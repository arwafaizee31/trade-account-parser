# trade-account-parser
# CSV to MongoDB API

This project allows you to upload a CSV file and store its data in a MongoDB database. It also includes an endpoint to get the balance of trades at a given timestamp.

## Setup

### 1. Clone the Repository

The project exists in the master branch and readme.md exists in the main branch

### 2. Set up .env

Use the .env.example to set up the .env file with the provided connection string in email

### 3. List of all the extra packages installed along with node.js

express: Fast, unopinionated, minimalist web framework for Node.js
dotenv: Loads environment variables from a .env file into process.env
multer: Middleware for handling multipart/form-data, primarily used for uploading files
csv-parser: Streaming CSV parser that aims to follow the Node.js streaming API
mongoose: MongoDB object modeling tool designed to work in an asynchronous environment
cors: Express middleware to enable Cross-Origin Resource Sharing (CORS)

### 4. API Endpoints
<host-url>/api/data/upload-csv
<host-url>/api/data/balance
