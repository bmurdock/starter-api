# Starter API

A boilerplate Node.js API designed for rapid development of scalable and maintainable web applications using Express.js and MongoDB. The repository is structured with a clear separation of concerns, making it easy to extend and adapt for various use cases.

---

## Features

- **Express.js Framework**: Provides a robust foundation for building RESTful APIs.
- **MongoDB Integration**: Supports both Mongoose and native MongoDB driver connections.
- **Modular Design**: Separation of concerns with models, controllers, and routes.
- **Secure Configuration**: Uses `dotenv` for environment variables and includes `.gitignore` for sensitive files.
- **Middleware**:
  - `body-parser`: For parsing JSON request bodies.
  - `helmet`: For securing HTTP headers.
  - `cors`: For enabling cross-origin resource sharing.
  - `morgan`: For logging HTTP requests.
- **Scalable Project Structure**: Organized to facilitate clean code and easy maintenance.

---

Here is the corrected and verified Markdown for the **Project Structure** section:


## Project Structure

```
starter-api/
├── api/
│   ├── samplemodel/
│   │   ├── mongo.dao.js         # MongoDB data access logic with Mongoose
│   │   ├── sample.dao.js        # Abstraction for database access
│   │   ├── sample.model.js      # Defines MongoDB model/schema
│   ├── controller.js            # Controller for handling request logic
│   ├── router.js                # API routes
├── .gitignore                   # Specifies files to exclude from version control
├── README.md                    # Project documentation
├── config.js                    # Configuration settings
├── db.js                        # Mongoose-based database connection
├── native.mongodb.db.js         # Alternative native MongoDB driver connection
├── package.json                 # Project metadata and dependencies
├── package-lock.json            # Dependency lockfile for consistent installs
├── server.js                    # Entry point for the application
```

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bmurdock/starter-api.git
   cd starter-api
