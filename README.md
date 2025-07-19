# Authentication System

A full-stack authentication system built with .NET 8 and React, featuring JWT-based authentication, user registration, login, and secure API endpoints.

## 🏗️ Architecture

This project consists of two main components:
- **AuthBackend**: ASP.NET Core Web API with JWT authentication
- **AuthFrontend**: React frontend with Material-UI components

## 🚀 Features

- **User Registration & Login**: Secure user authentication with email and password
- **JWT Token Authentication**: Stateless authentication using JSON Web Tokens
- **ASP.NET Core Identity**: Built-in user management and password hashing
- **Entity Framework Core**: Database operations with SQL Server
- **React Frontend**: Modern UI with Material-UI components
- **API Documentation**: Swagger/OpenAPI integration
- **Responsive Design**: Mobile-friendly interface

## 🛠️ Tech Stack

### Backend
- .NET 8
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server
- ASP.NET Core Identity
- JWT Bearer Authentication
- Swagger/OpenAPI

### Frontend
- React 19
- Material-UI (MUI)
- Axios for API calls
- React Router DOM
- Vite build tool

## 📋 Prerequisites

Before running this application, make sure you have the following installed:
- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) or SQL Server Express
- [Git](https://git-scm.com/)

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/JMAdikari/Authentication-System-.git
cd Authentication-System-
```

### 2. Backend Setup

#### Navigate to the backend directory:
```bash
cd AuthBackend
```

#### Update Connection String:
Edit `appsettings.json` and `appsettings.Development.json` to configure your SQL Server connection string.

#### Install Dependencies and Run Migrations:
```bash
dotnet restore
dotnet ef database update
```

#### Run the Backend:
```bash
dotnet run
```

The API will be available at `https://localhost:7077` (or check the console output for the exact port).

### 3. Frontend Setup

#### Navigate to the frontend directory:
```bash
cd ../AuthFrontend
```

#### Install Dependencies:
```bash
npm install
```

#### Run the Frontend:
```bash
npm run dev
```

The React app will be available at `http://localhost:5173`.

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/user` - Get current user (requires authentication)

### Request/Response Examples

#### Register User
```json
POST /api/auth/register
{
  "email": "user@example.com",
  "password": "Password123!",
  "fullName": "John Doe"
}
```

#### Login User
```json
POST /api/auth/login
{
  "email": "user@example.com",
  "password": "Password123!"
}
```

## 🗂️ Project Structure

```
Authentication-System-/
├── AuthBackend/
│   ├── Controllers/
│   │   └── AuthController.cs
│   ├── Data/
│   │   └── ApplicationDbContext.cs
│   ├── Models/
│   │   └── User.cs
│   ├── Services/
│   │   ├── IAuthService.cs
│   │   └── AuthService.cs
│   ├── Migrations/
│   └── Program.cs
└── AuthFrontend/
    ├── src/
    │   ├── api/
    │   │   ├── authApi.js
    │   │   └── axiosConfig.js
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   └── Register.jsx
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

## 🔒 Security Features

- **Password Hashing**: Secure password storage using ASP.NET Core Identity
- **JWT Tokens**: Stateless authentication with configurable expiration
- **CORS Configuration**: Controlled cross-origin resource sharing
- **Input Validation**: Model validation on both client and server
- **HTTPS**: Secure communication in production

## 🧪 Testing

### Backend Testing
```bash
cd AuthBackend
dotnet test
```

### Frontend Testing
```bash
cd AuthFrontend
npm run test
```

## 📝 Configuration

### Backend Configuration (appsettings.json)
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=AuthSystem;Trusted_Connection=true;"
  },
  "Jwt": {
    "Key": "your-secret-key-here",
    "Issuer": "your-issuer",
    "Audience": "your-audience",
    "ExpireMinutes": 60
  }
}
```

## 🚀 Deployment

### Backend Deployment
1. Publish the application: `dotnet publish -c Release`
2. Deploy to your preferred hosting service (Azure, AWS, etc.)
3. Update connection strings for production database

### Frontend Deployment
1. Build the application: `npm run build`
2. Deploy the `dist` folder to a static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**JMAdikari**
- GitHub: [@JMAdikari](https://github.com/JMAdikari)

## 📞 Support

If you have any questions or need help with setup, please open an issue on GitHub.

---

⭐ If you find this project helpful, please give it a star! 
