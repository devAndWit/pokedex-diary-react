# ⚡ React + Vite Starter Template

🚀 A minimal setup to get React working in Vite with HMR (Hot Module Replacement) and a few ESLint rules for better code quality.

## ✨ Features

- ⚡ Vite: Blazing-fast development environment.
- 🔥 Hot Module Replacement (HMR): Instantly updates your app during development.
- 🛠️ ESLint Rules: Maintain clean and consistent code.
- 🌐 Docker Support: Easy deployment in a containerized environment.

## 📦 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/devAndWit/pokedex-diary-react.git
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Development Server

```bash
npm run dev
```

## 🐳 Running with Docker

### 1️⃣ Build the Docker Image

```bash
docker build -t react-vite-app .
```

### 2️⃣ Run the Container

```bash
docker run -d -p 3000:80 --name react-vite-container react-vite-app
```

The app will be accessible at `http://localhost:3120`.

### 3️⃣ Using Docker Compose

Alternatively, you can use Docker Compose for easier management. Here's how:

1. Create a `docker-compose.yml`

```yaml
services:
  react-app:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: pokedex-diary-container
    ports:
      - "3120:80"
    restart: always
```

2. Start the Container:

```bash
docker compose up -d
```

3. Stop the Container:

```bash
docker compose down
```

---

**Enjoy coding!**  🚀