const ObjectID = require('mongodb').ObjectID;
function handleError(res, err)
{
    console.log('Got an error: ', err);
    return res.status(400).send({err});
}
// exports a single function that creates an object <- I'd underline if i could
// the only argument the function expects is a mongoose/data model
// this is going to CALL our model's CRUD methods, but doesn't necesarily have to be named after them
module.exports = function(Model)
{
    return {
        create: (req, res, next) => {
            Model.create(req.body)
            .then((result) =>
            {
                res.json({message: `New Mongo document created!`});
            })
            .catch((err) =>
            {
                console.log('Create error: ', err);
                res.json({err});
            });
        },
        update: (req, res, next) => {
            const query = {
                _id: ObjectID(req.params.id)
            };
            Model.update(query, req.body)
            .then((result) =>
            {

                console.log('Updated collection: ', result);
                res.json({message: "Collection updated successfully."});
            })
            .catch((err) =>
            {
                console.log('Error updating Mongo collection: ', err);
                res.json({err});
            });
        },
        delete: (req, res, next) => {
            const query = {
                _id: req.params.id
            };
            Model.delete(query, (err, result) => {
                if (err) {
                    handleError(res, err);
                    return;
                }
                res.json({
                    message: `${Model.modelName} deleted successfully.`,
                    result,
                });
            })
        },
        getAll: (req, res, next) => {
            const query = {};
            Model.read(query)
            .then((result) =>
            {
                console.log('got read result:', result);
                res.json(result);
            })
            .catch((err) =>
            {
                console.log('Read error: ', err);
                res.json({err});
            });

        },
        getById: (req, res, next) => {
            const query = {
                _id: req.params.id
            };
            
            Model.read(query, (err, result) => {
                if (err) {
                    handleError(res, err);
                    return;
                }
                res.json(result);
            })
        },
    }
}