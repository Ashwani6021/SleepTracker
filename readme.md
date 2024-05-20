# Sleep Tracker API

## Overview

Welcome to the Sleep Tracker API! This API allows users to effortlessly store and access their sleep data. Built using Node.js, Express, and MongoDB, it offers a robust solution for managing sleep records.

## Features

- **Create Sleep Record:** Submit your sleep duration and timestamp to create a new sleep record.
- **Retrieve Sleep Records:** Get a list of all your sleep records, sorted by date.
- **Delete Sleep Record:** Remove a specific sleep record by its ID.

## API Endpoints

### POST `/api/sleep`

**Description:** Create a new sleep record.

**Request Body:**

```json
{
  "userId": "user1",
  "hours": 8,
  "timestamp": "2024-05-18T08:00:00Z"
}
```

**Response:**

- **201 Created**

```json
{
  "_id": "generated-mongodb-id",
  "userId": "user1",
  "hours": 8,
  "timestamp": "2024-05-18T08:00:00Z",
  "createdAt": "2024-05-18T08:00:00Z",
  "updatedAt": "2024-05-18T08:00:00Z"
}
```

**Errors:**

- **400 Bad Request**

```json
{
  "error": "userId, hours, and timestamp are required"
}
```

### GET `/api/sleep/:userId`

**Description:** Retrieve all sleep records for a user.

**Response:**

- **200 OK**

```json
[
  {
    "_id": "generated-mongodb-id",
    "userId": "user1",
    "hours": 8,
    "timestamp": "2024-05-18T08:00:00Z",
    "createdAt": "2024-05-18T08:00:00Z",
    "updatedAt": "2024-05-18T08:00:00Z"
  }
]
```

**Errors:**

- **500 Internal Server Error**

```json
{
  "error": "Error retrieving sleep records"
}
```

### DELETE `/api/sleep/:recordId`

**Description:** Delete a specific sleep record by ID.

**Response:**

- **204 No Content**

**Errors:**

- **404 Not Found**

```json
{
  "error": "Record not found"
}
```

- **500 Internal Server Error**

```json
{
  "error": "Error deleting sleep record"
}
```

### Steps to Set Up the Project

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/Ashwani6021/SleepTracker.git
   cd sleep-tracker
   ```

2. **Install Dependencies:**

   ```sh
   npm install
   ```

3. **Set Up MongoDB:**

   Ensure MongoDB is installed and running on your machine, or set up a MongoDB Atlas account.

4. **Configure Environment Variables:**

   Create a `.env` file in the root of the project and add:

   ```env
   MONGODB_URI=your mongodb connection url
   ```

   Replace the URI with your MongoDB connection string if using MongoDB Atlas.

5. **Run the Server:**

   ```sh
   nodemon app.js
   ```

6. **Run Tests:**

   To run tests:

   ```sh
   npm test
   ```
