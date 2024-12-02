# 🚀 Next.js + Express + PostgreSQL Full-Stack Boilerplate – Supercharged with Docker!

Jumpstart your full-stack development with this powerful **Next.js + Express + PostgreSQL Boilerplate** – fully Dockerized, ready to go, and built for modern, scalable web applications! Imagine setting up your frontend, backend, and database in one seamless process. With this boilerplate, you’ll be up and running in minutes, focusing on building features, not configurations. Whether you're a startup builder, enterprise developer, or coding enthusiast, this stack brings professional-grade tools into one unified, plug-and-play experience.

## Why This Boilerplate? ⚡

Say goodbye to repetitive setup and dive straight into development. This boilerplate takes the best of web development tools and packs them into a streamlined stack:
- **Next.js** - The React framework with zero-config, SSR, and static export capabilities, giving you a blazing-fast, SEO-friendly frontend.
- **Express.js** - A minimal and flexible Node.js web application framework, perfect for building high-performance, RESTful APIs.
- **PostgreSQL** - An open-source relational database renowned for its reliability and flexibility, ensuring that your data is managed professionally.
- **Docker** - With Docker and Docker Compose, deploy your full-stack app anywhere with ease, from development to production.

## Key Features 🏆

- **Frontend**: Built with **Next.js** for a responsive, accessible, and lightning-fast user interface.
- **Backend**: **Express.js** for a solid, scalable backend API, serving data swiftly and reliably.
- **Database**: **PostgreSQL** as the backbone for structured, SQL-based data storage.
- **Containerization**: A fully **Dockerized** setup for isolated, consistent environments across all development, testing, and production stages.
- **Styling**: **Tailwind CSS** for utility-first styling that’s both quick and customizable, making UI design a breeze.

## Prerequisites 🛠

Ensure you have the following installed:
- **Docker**: [Get Docker](https://www.docker.com/products/docker-desktop)
- **Docker Compose**: Included with Docker Desktop.

## Getting Started 🚀

Ready to bring your app to life? Let’s dive in!

### 1. Clone the Repository

```bash
git clone git@github.com:chee86j/DockerNextExpressNodePostgres-Template.git
cd DockerNextExpressNodePostgres-Template
```

## .env
DATABASE_URL=postgres://postgres:password@db:5433/todos_db


## The beauty of Docker Compose: One command to build everything and one to start everything.

### 1. Ensure Docker is Running & Run the following commands to start the application using Docker Compose:
```bash
docker-compose down -v    
docker-compose build --no-cache
docker-compose up
```

## Access the App Locally

### 1. Frontend: `http://localhost:3000`
### 2. Backend API Routes: `http://localhost:4000`
