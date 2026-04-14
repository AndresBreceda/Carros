# 🚗 NAOROBI — Luxury Car Rental Platform

A full-stack luxury car rental application with a **React + Vite** frontend and a **C# ASP.NET Core** backend connected to **MongoDB Atlas** in the cloud.

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, TailwindCSS |
| Backend | ASP.NET Core (.NET 8), C# |
| Database | MongoDB Atlas (cloud) |
| Authentication | JWT (JSON Web Tokens) |
| Password Security | BCrypt hashing |
| Routing | React Router v7 |

---

## 📁 Project Structure

```
Carros/
├── src/                          # React frontend
│   ├── components/
│   │   └── Layout.jsx            # Shared navbar + footer shell
│   ├── pages/
│   │   ├── LandingPage.jsx       # Public landing page
│   │   ├── UserLogin.jsx         # Login with attempt limiter
│   │   ├── CarCatalog.jsx        # 🔐 Protected — car listing
│   │   ├── BookingDetail.jsx     # 🔐 Protected — reservation form
│   │   ├── UserDashboard.jsx     # 🔐 Protected — user panel
│   │   ├── AdminDashboard.jsx    # 🔐 Protected — admin panel
│   │   ├── ProtectedRoute.jsx    # Route guard component
│   │   └── NotFound.jsx          # 404 page
│   └── App.jsx                   # Route definitions
│
└── Naorobi.Api/                  # ASP.NET Core backend
    ├── Controllers/
    │   ├── AuthController.cs     # Login + Register endpoints
    │   ├── CarrosController.cs   # CRUD for cars
    │   └── ReservasController.cs # CRUD for reservations
    ├── Models/
    │   ├── Usuario.cs            # User model
    │   ├── Admin.cs              # Admin model
    │   ├── Carro.cs              # Car model
    │   └── Reserva.cs            # Reservation model
    └── Program.cs                # App configuration + DI
```

---

## 🔐 Security Features

### JWT Authentication
- Login returns a signed JWT token valid for **2 hours**
- Token is stored in `localStorage` and sent in requests
- The token payload includes: `userId`, `email`, `role`

### BCrypt Password Hashing
- Passwords are **never stored in plain text**
- BCrypt is used to hash on register and verify on login
- Example:
  ```csharp
  // Register
  usuario.Contraseña = BCrypt.Net.BCrypt.HashPassword(usuario.Contraseña);

  // Login
  bool isValid = BCrypt.Net.BCrypt.Verify(request.Password, usuario.Contraseña);
  ```

### Protected Routes (Frontend)
- Any route requiring login uses `<ProtectedRoute>` which checks for a token in `localStorage`
- If no token is found, the user is redirected to `/login`
- Protected routes: `/catalog`, `/booking/:id`, `/dashboard`, `/admin`

### Login Attempt Limiter
- Maximum of **3 failed login attempts**
- After 3 failures the login form is **locked for 30 seconds**
- All inputs and the submit button are fully disabled during lockout
- A live countdown timer is displayed
- The counter resets automatically after the lockout expires

---

## 🌐 API Endpoints

### Auth — `POST /api/Auth/login`
```json
// Request
{ "email": "user@example.com", "password": "secret" }

// Response
{ "token": "eyJ...", "userId": "6830abc...", "email": "user@example.com" }
```

### Auth — `POST /api/Auth/register`
```json
{ "email": "user@example.com", "contraseña": "secret" }
```

### Cars
| Method | Route | Description |
|---|---|---|
| GET | `/api/Carros` | List all cars |
| GET | `/api/Carros/{id}` | Get one car |
| POST | `/api/Carros` | Create a car |

### Reservations
| Method | Route | Description |
|---|---|---|
| GET | `/api/reservas` | All reservations |
| GET | `/api/reservas/usuario/{userId}` | Reservations by user |
| GET | `/api/reservas/{id}` | One reservation |
| POST | `/api/reservas` | Create reservation |
| PUT | `/api/reservas/{id}` | Update reservation |
| DELETE | `/api/reservas/{id}` | Delete reservation |

---

## ☁️ MongoDB Atlas

The backend connects to **MongoDB Atlas** (cloud-hosted MongoDB). Configuration lives in `appsettings.json`:

```json
"MongoDB": {
  "ConnectionString": "mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/",
  "DatabaseName": "carros"
}
```

Collections used:
- `Usuarios` — registered users
- `Admins` — admin accounts
- `carros` — car inventory
- `Reservas` — car reservations

> ⚠️ Never commit real credentials to version control. Use environment variables or secrets management in production.

---

## 🚀 Running Locally

### Backend (ASP.NET Core)
```bash
cd Naorobi.Api
dotnet run
# Runs on http://localhost:5206
```

### Frontend (React + Vite)
```bash
# From project root
npm install
npm run dev
# Runs on http://localhost:5173
```

---

## 🔑 How Authentication Flow Works

```
1. User submits email + password on /login
2. Backend verifies credentials against MongoDB (BCrypt)
3. If valid → returns { token, userId, email }
4. Frontend stores token, userId, userEmail in localStorage
5. ProtectedRoute checks localStorage for token on every navigation
6. Reservations are created with the user's real MongoDB ObjectId
7. Dashboard fetches only that user's reservations via /api/reservas/usuario/{userId}
8. Visiting / (LandingPage) clears the token (logout)
```

---

## 👤 User Roles

| Role | Access |
|---|---|
| Usuario | `/catalog`, `/booking/:id`, `/dashboard` |
| Admin | `/admin` — car management panel |

Role is determined by email: if the email contains `"admin"`, the user is redirected to the admin panel on login.
