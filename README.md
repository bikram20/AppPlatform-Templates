# Hello World - Node.js

A simple, production-ready Node.js web application that demonstrates how to deploy to DigitalOcean App Platform. Perfect for getting started or as a foundation for building REST APIs.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/AppPlatform-Templates/HelloWorld-Template/tree/claude/initial-template-setup-011CUXyg8Xby28Js6XCtJAqJ)

## What This Template Includes

- **Express.js Web Server**: Lightweight and fast Node.js framework
- **RESTful API Endpoints**: Multiple example endpoints demonstrating different patterns
- **Health Checks**: Built-in health monitoring endpoint
- **Graceful Shutdown**: Proper signal handling for zero-downtime deployments
- **Error Handling**: Comprehensive error handling middleware
- **Production Ready**: Security best practices and environment-based configuration

## Tech Stack

- **Runtime**: Node.js 18.x or higher
- **Framework**: Express.js 4.18.x
- **Deployment**: DigitalOcean App Platform
- **Dependencies**: Minimal (only Express.js)

## Features

This Hello World application provides several useful endpoints:

- **`GET /`** - Welcome message with timestamp and environment info
- **`GET /health`** - Health check endpoint for monitoring (returns uptime and status)
- **`GET /api/info`** - API documentation and available endpoints
- **`POST /api/echo`** - Echo endpoint that returns your request body

## Prerequisites

- DigitalOcean account ([Sign up here](https://www.digitalocean.com/))
- Basic understanding of Node.js (optional, for local development)

## Estimated Cost

- **Compute**: Basic XXS (512MB RAM, 1 vCPU) - **$5/month**
- **Bandwidth**: 100GB included
- **Total**: **~$5/month** for a production-ready application

> Cost can be reduced further by using App Platform's free tier (if available) or by scaling down when not in use.

## Deployment Instructions

### One-Click Deploy

1. Click the **"Deploy to DigitalOcean"** button above
2. Authorize DigitalOcean to access the GitHub repository (read-only)
3. Configure deployment settings:
   - **App Name**: Choose a unique name for your app
   - **Region**: Select the closest region to your users
   - **Branch**: Keep as `main` (or change if deploying from a different branch)
4. Review environment variables (defaults are set for production)
5. Click **"Deploy"**
6. Wait 2-5 minutes for the build and deployment to complete

### Post-Deployment

Once deployed, your application will be available at:
```
https://[your-app-name].ondigitalocean.app
```

**Test Your Deployment:**

```bash
# Test the welcome endpoint
curl https://[your-app-name].ondigitalocean.app/

# Check health status
curl https://[your-app-name].ondigitalocean.app/health

# Get API information
curl https://[your-app-name].ondigitalocean.app/api/info

# Test echo endpoint
curl -X POST https://[your-app-name].ondigitalocean.app/api/echo \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello from DigitalOcean!"}'
```

## Local Development

Want to test or modify the application locally? Follow these steps:

### Prerequisites

- Node.js 18.x or higher installed
- npm (comes with Node.js)

### Setup

```bash
# Clone the repository
git clone https://github.com/bikram20/AppPlatform-Templates.git
cd AppPlatform-Templates/templates/hello-world-nodejs

# Install dependencies