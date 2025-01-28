# URL Shortener

> A modern URL shortening service built with Node.js and MongoDB

## 🚀 Technology Stack

- Node.js & Express.js
- MongoDB with Mongoose
- EJS templating
- Bootstrap CSS

## ✨ Features

- User authentication (signup and login) (RESTful api)
- Shorten long URLs with custom slugs
- Track URL visit history and analytics
- View click analytics for shortened URLs
- Bulk delete functionality
- Responsive dashboard interface

## 📡 API Endpoints

### Authentication
- `GET /signup` - Signup page
- `GET /login` - Login page
- `POST /user/signup` - Create new account
- `POST /user/login` - User login

### URL Operations
- `POST /url` - Create short URL
- `GET /analytics` - View all URLs analytics
- `GET /analytics/:shortId` - View specific URL analytics
- `POST /url/delete` - Delete specific URL
- `POST /url/delete/all` - Delete all URLs
- `GET /:shortId` - Redirect to original URL

---
Thanks for visiting 👍