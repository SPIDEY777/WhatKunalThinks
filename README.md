# What Kunal Thinks

> Web app: upload exported WhatsApp chat and receive an AI-generated relationship report.

## Run locally

- Backend (Java, Spring Boot):

  ```bash
  cd backend
  ./mvnw spring-boot:run
  ```

- Frontend (Vite):

  ```bash
  cd frontend
  npm install
  npm run dev
  ```

- Or with Docker Compose:

  ```bash
  docker compose up --build
  ```

## Environment

See `.env.example` for all variables.

## Project structure

- `backend/` — Spring Boot 3.x, Java 21, Maven project
- `frontend/` — Vite + React + TypeScript