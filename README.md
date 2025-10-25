# DigitalOcean App Platform Templates

A curated collection of ready-to-deploy application templates for DigitalOcean App Platform. Each template includes a one-click "Deploy to DigitalOcean" button for instant deployment.

## Quick Deploy - Hello World Node.js

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/bikram20/AppPlatform-Templates/tree/claude/test-escape-011CUSnzRbiowPbdpwQQmSoe)

This simplified version deploys a Hello World Node.js app directly from the repository root.

## What is This?

This repository contains production-ready application templates that can be deployed to DigitalOcean App Platform with a single click. Each template is a complete, working application with all necessary configuration files.

## Available Templates

### Web Applications & Services

| Template | Description | Stack | Resources |
|----------|-------------|-------|-----------|
| [Hello World (Node.js)](./templates/hello-world-nodejs) | Simple Node.js web server - perfect for getting started | Node.js 20 | Basic ($5/mo) |

## Quick Start

1. **Browse Templates**: Explore the `templates/` directory to find an application that fits your needs
2. **Click Deploy Button**: Open the template's README and click the "Deploy to DigitalOcean" button
3. **Configure**: DigitalOcean will prompt you for any required environment variables
4. **Launch**: Your app will be built and deployed automatically

## How It Works

Each template contains:
- **Application Code**: Ready-to-run source code
- **`.do/deploy.template.yaml`**: DigitalOcean App Platform configuration
- **README.md**: Template documentation including:
  - What the template does
  - Prerequisites
  - Resource costs
  - Version information
  - Deploy button

## Creating Your Own Template

See the [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md) for detailed instructions on:
- Creating new templates
- Testing deployments
- Template structure requirements
- Best practices

## Contributing

Contributions are welcome! To add a new template:

1. Fork this repository
2. Create a new directory under `templates/`
3. Follow the structure guidelines in [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md)
4. Test your deployment
5. Submit a pull request

## Template Categories (Coming Soon)

- **Web Frameworks**: React, Vue, Next.js, Express, Django, Flask
- **Static Sites**: Hugo, Jekyll, Gatsby, Docusaurus
- **Databases**: PostgreSQL, MySQL, Redis, MongoDB
- **CMS**: WordPress, Ghost, Strapi, Directus
- **E-commerce**: WooCommerce, Magento, PrestaShop
- **API Services**: REST APIs, GraphQL, gRPC
- **Monitoring**: Grafana, Prometheus, Uptime Kuma
- **AI/ML**: TensorFlow, PyTorch, Jupyter Notebooks

## Requirements

To deploy these templates, you need:
- A DigitalOcean account ([Sign up here](https://www.digitalocean.com/))
- Basic understanding of the application stack you're deploying

## Support

- **DigitalOcean App Platform Docs**: https://docs.digitalocean.com/products/app-platform/
- **Issues**: Report problems or request templates via GitHub Issues
- **Community**: Join the DigitalOcean Community for help

## License

This repository is available under the MIT License. Individual templates may have their own licenses - check each template's README.

## About DigitalOcean App Platform

DigitalOcean App Platform is a Platform-as-a-Service (PaaS) that allows you to deploy applications directly from source code. It automatically builds, deploys, and scales your applications with:
- Automatic HTTPS
- Global CDN
- Automatic deployments from Git
- Built-in monitoring
- Easy scaling

## Maintenance

Templates are regularly updated to use the latest stable versions of dependencies. Each template's README indicates the version information and last update date.

---

**Need help?** Check out the [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md) or open an issue!
