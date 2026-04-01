function handleError(res, err)
{
    console.log('Got an error: ', err);
    return res.status(400).send({err});
}

module.exports = function(Model)
{
    return {
        create: async (req, res, next) => {
            console.log('body: ', req.body);
            try
            {
                const result = await Model.create(req.body);
                res.json({
                    message: `${Model.modelName} created successfully.`,
                    result,
                });
            }
            catch (err)
            {
                handleError(res, err);
            }
        },
        update: async (req, res, next) => {
            try
            {
                const result = await Model.findOneAndUpdate(
                    { _id: req.params.id },
                    { $set: req.body },
                    { new: true }
                );
                res.json({
                    message: `${Model.modelName} updated successfully.`,
                    result,
                });
            }
            catch (err)
            {
                handleError(res, err);
            }
        },
        delete: async (req, res, next) => {
            try
            {
                const result = await Model.findOneAndDelete({ _id: req.params.id });
                res.json({
                    message: `${Model.modelName} deleted successfully.`,
                    result,
                });
            }
            catch (err)
            {
                handleError(res, err);
            }
        },
        getAll: async (req, res, next) => {
            try
            {
                const result = await Model.find({});
                res.json(result);
            }
            catch (err)
            {
                handleError(res, err);
            }
        },
        getById: async (req, res, next) => {
            try
            {
                const result = await Model.findById(req.params.id);
                res.json(result);
            }
            catch (err)
            {
                handleError(res, err);
            }
        },
    }
}
