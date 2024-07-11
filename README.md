# CRUD Application

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a CRUD (Create, Read, Update, Delete) application built to demonstrate the basic functionalities of a typical web application. It allows users to perform various operations on a set of data, including creating new records, reading existing records, updating records, and deleting records.

## Features

- Create new records
- Read and view existing records
- Update records
- Delete records
- User authentication and authorization
- Responsive design for optimal viewing on various devices
- Error handling and form validation

## Tech Stack

### Frontend

- **HTML/CSS/JavaScript**: Standard web technologies for building user interfaces
- **EJS**: Embedded JavaScript templating engine
- **Bootstrap**: CSS framework for responsive design

### Backend

- **Node.js**: JavaScript runtime for server-side programming
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing application data
- **Mongoose**: ODM for MongoDB and Node.js

### Tools and Libraries

- **JWT**: For user authentication
- **bcrypt**: For hashing passwords
- **dotenv**: For managing environment variables
- **nodemon**: For automatic server restarts during development

## Project Structure

```
├── public
│   ├── css
│   ├── js
├── views
│   ├── partials
│   ├── index.ejs
│   ├── show.ejs
│   ├── edit.ejs
│   ├── new.ejs
├── config
├── controllers
├── middleware
├── models
├── routes
├── server.js
├── .env
├── README.md
└── package.json
```

## Setup and Installation

### Prerequisites

- Node.js
- MongoDB

### Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/your-username/crud-application.git
   cd crud-application
   ```

2. **Backend Setup**

   ```sh
   npm install
   ```

3. **Environment Variables**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Running the Application**

   ```sh
   npm start
   ```

5. **Accessing the Application**

   Open your browser and navigate to `http://localhost:5000`

## Usage

1. Register a new user or login with existing credentials.
2. Create a new record by filling out the form and submitting.
3. View a list of existing records.
4. Update any record by clicking on the edit button and modifying the details.
5. Delete any record by clicking on the delete button.

## API Endpoints

### Authentication

- **POST** `/api/auth/register`: Register a new user
- **POST** `/api/auth/login`: Login an existing user

### CRUD Operations

- **GET** `/api/items`: Get all items
- **GET** `/api/items/:id`: Get a single item by ID
- **POST** `/api/items`: Create a new item
- **PUT** `/api/items/:id`: Update an existing item by ID
- **DELETE** `/api/items/:id`: Delete an item by ID

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License.

---
