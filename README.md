# Todo API

A RESTful API for managing todos built with Express.js, TypeScript, MongoDB, and Docker.

## 🚀 Features

- RESTful API endpoints for todo operations (CRUD)
- TypeScript for type safety
- MongoDB for data persistence
- Docker and Docker Compose for containerization
- Automatic data initialization
- Development mode with hot-reload
- Production-ready configuration

## 📋 Prerequisites

- Docker and Docker Compose
- Node.js (v20 or later)
- npm (Node Package Manager)

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB
- **Container**: Docker
- **Development Tools**: nodemon, ts-node

## 🏗️ Project Structure

```
todo-app/
├── src/
│   ├── controllers/
│   │   └── todoController.ts
│   ├── models/
│   │   └── Todo.ts
│   ├── routes/
│   │   └── todoRoutes.ts
│   ├── utils/
│   │   ├── db.ts
│   │   └── initData.ts
│   └── index.ts
├── Dockerfile
├── docker-compose.yml
├── package.json
├── tsconfig.json
└── .env.local
```

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd todo-app
   ```

2. **Set up environment variables. Update the values in `.env.local` as needed.**

3. **Start the application**
   ```bash
   docker-compose up --build
   ```
   The API will be available at `http://localhost:3000`

## 🔄 API Endpoints

### Get All Todos
```http
GET /api/todos
```
Returns a list of all todos, sorted by creation date (newest first).

### Get Single Todo
```http
GET /api/todos/:id
```
Returns a specific todo by ID.

### Create Todo
```http
POST /api/todos
Content-Type: application/json

{
  "title": "Todo title",
  "description": "Optional description"
}
```

### Update Todo
```http
PUT /api/todos/:id
Content-Type: application/json

{
  "title": "Updated title",
  "description": "Updated description",
  "completed": true
}
```

### Delete Todo
```http
DELETE /api/todos/:id
```

## 💻 Development

### Running in Development Mode
```bash
docker-compose up
```
The application will restart automatically when files change.

### TypeScript Compilation
```bash
npm run build
```
Compiles TypeScript files to JavaScript in the `dist` directory.

### Database
- MongoDB runs in a Docker container
- Data is persisted in a Docker volume
- Initial sample data is loaded automatically on first run

## 🐳 Docker Configuration

### Development
- Uses nodemon for hot-reload
- Source code is mounted as a volume
- Node modules are in a separate volume

### Production
- Multi-stage build for smaller image size
- Only production dependencies are installed
- TypeScript is compiled during build

## 📝 Todo Model

```typescript
interface Todo {
  title: string;          // Required, max 100 characters
  description?: string;   // Optional, max 500 characters
  completed: boolean;     // Default: false
  createdAt: Date;       // Automatically set
  updatedAt: Date;       // Automatically updated
}
```

## ⚙️ Environment Variables

| Variable     | Description           | Default               |
|-------------|-----------------------|-----------------------|
| PORT        | Server port           | 3000                 |
| MONGODB_URI | MongoDB connection URL| mongodb://mongodb:27017/todo-app |
| NODE_ENV    | Environment          | development          |

## 🧪 Testing

To add tests to the project:

1. Install testing dependencies:
   ```bash
   npm install --save-dev jest @types/jest ts-jest
   ```

2. Create test files with `.test.ts` extension

3. Run tests:
   ```bash
   npm test
   ```

## 📚 Additional Documentation

### Postman Collection
Import the provided Postman collection for easy API testing:
1. Open Postman
2. Click "Import"
3. Use the collection JSON from the previous section

### Error Handling
The API uses standard HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 404: Not Found
- 500: Server Error

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
