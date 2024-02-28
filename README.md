# MWC 2024 Open Gateway Hackathon - UDE Group Backend

## Overview

Welcome to the UDE Group Backend repository for the MWC 2024 Open Gateway Hackathon. This backend system is designed to facilitate the development and deployment of innovative solutions leveraging the latest in network technology. Our goal is to provide a robust and scalable backend that supports the rapid development of applications that can meet the challenges of modern network demands.

## Features

- **Scalable Architecture**: Built on the Nest framework, our backend is designed for scalability, making it suitable for applications of all sizes.
- **Modern Technology Stack**: Utilizes a cutting-edge stack including NestJS, PostgreSQL, TypeORM, Swagger for API documentation, and Nokia's Network as Code for unparalleled network integration.
- **Docker Integration**: Simplifies deployment and development with Docker containerization.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- Yarn
- Docker & Docker Compose

## Getting Started

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd <repository-directory>
yarn install
```

### Database Setup

Set up your PostgreSQL database using Docker:

```bash
docker compose up -d
```

Configuration details can be found in docker-compose.yml.

### Running the Application

Start the application in development, watch, or production mode as needed:

```bash
# Development mode
yarn run start

# Watch mode for real-time updates
yarn run start:dev

# Production mode
yarn run start:prod

```

## Accessing the Application

- **Application Endpoint**: Access the application at http://localhost:3000.
- **Swagger API Documentation**: View our API documentation at http://localhost:3000/api.
- **pgAdmin**: Manage your PostgreSQL database via pgAdmin at http://localhost:5050. Configuration details can be found in docker-compose.yml.
