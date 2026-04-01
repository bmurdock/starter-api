# Starter API

Minimal Express and MongoDB starter API for building REST-style backend projects with current Node.js and current core dependencies.

## Why This Exists

This repository is meant to be a clean starting point for small Node.js APIs that need routing, database access, and a structure that is easy to extend.

Instead of starting from an empty folder each time, this project gives you a basic backend foundation with sample modules, database configuration, and a layout that separates concerns clearly.

## Stack

- Node.js 20.19+
- Express 5
- MongoDB driver 7
- Mongoose 9
- dotenv
- cors
- argon2

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

The starter expects these environment variables:

- `DB`
- `DB_NAME`
- `PORT`

## What You Get

- Express server setup
- MongoDB connection support
- Example API module structure
- Common middleware for logging, security, and CORS
- A base you can adapt for CRUD-style backend apps

## Notable Implementation Details

- The repo includes both Mongoose-based and native MongoDB connection examples.
- Route handlers use async and await rather than legacy callback-style Mongoose APIs.
- The sample API module shows one way to separate models, controllers, and routes.
- The structure is intentionally simple so it can be reused as a starting point for other projects.

## Good Fit For

- small internal APIs
- class or portfolio backend projects
- quick prototypes that still need structure
- new Node.js projects that should not start from scratch
