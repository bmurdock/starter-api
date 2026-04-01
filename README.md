# Starter API

Minimal Express and MongoDB starter API for building REST-style backend projects.

## Why This Exists

This repository is meant to be a clean starting point for small Node.js APIs that need routing, database access, and a structure that is easy to extend.

Instead of starting from an empty folder each time, this project gives you a basic backend foundation with sample modules, database configuration, and a layout that separates concerns clearly.

## Stack

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- helmet
- cors
- morgan

## Project Structure

```text
starter-api/
├── api/
│   ├── samplemodel/
│   │   ├── mongo.dao.js
│   │   ├── sample.dao.js
│   │   └── sample.model.js
│   ├── controller.js
│   └── router.js
├── config.js
├── db.js
├── native.mongodb.db.js
├── server.js
└── package.json
```

## Running Locally

1. Clone the repository.
2. Install dependencies.
3. Configure environment variables.
4. Start the server.

```bash
git clone https://github.com/bmurdock/starter-api.git
cd starter-api
npm install
cp .env.example .env
npm start
```

If your local setup does not include `.env.example`, create the environment file manually and point it at your MongoDB instance.

## What You Get

- Express server setup
- MongoDB connection support
- Example API module structure
- Common middleware for logging, security, and CORS
- A base you can adapt for CRUD-style backend apps

## Notable Implementation Details

- The repo includes both Mongoose-based and native MongoDB connection options.
- Sample module files show one way to separate models, data access, controllers, and routes.
- The structure is intentionally simple so it can be reused as a starting point for other projects.

## Good Fit For

- small internal APIs
- class or portfolio backend projects
- quick prototypes that still need structure
- new Node.js projects that should not start from scratch
