const express = require('express');
const app = express();

// Use PORT environment variable provided by DigitalOcean App Platform
// Default to 8080 for local development
const PORT = process.env.PORT || 8080;

// Middleware to parse JSON
app.use(express.json());

// Root endpoint - Hello World
app.get('/', (req, res) => {
  const response = {
    message: 'Hello World from DigitalOcean App Platform!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0'
  };

  res.json(response);
});

// Health check endpoint for monitoring
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// API info endpoint
app.get('/api/info', (req, res) => {
  res.json({
    name: 'Hello World Node.js API',
    version: '1.0.0',
    description: 'A simple Node.js application deployed on DigitalOcean App Platform',
    endpoints: [
      { path: '/', method: 'GET', description: 'Welcome message' },
      { path: '/health', method: 'GET', description: 'Health check' },
      { path: '/api/info', method: 'GET', description: 'API information' },
      { path: '/api/echo', method: 'POST', description: 'Echo back the request body' }
    ]
  });
});

// Echo endpoint - echoes back whatever is sent
app.post('/api/echo', (req, res) => {
  res.json({
    echo: req.body,
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Cannot ${req.method} ${req.path}`,
    availableEndpoints: ['/', '/health', '/api/info', '/api/echo (POST)']
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'production'
      ? 'Something went wrong'
      : err.message
  });
});

// Start the server
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Available endpoints:`);
  console.log(`  GET  / - Welcome message`);
  console.log(`  GET  /health - Health check`);
  console.log(`  GET  /api/info - API information`);
  console.log(`  POST /api/echo - Echo endpoint`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});
