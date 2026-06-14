# 🎵 Song Management System - MERN Stack Application

A full-stack web application for managing songs, artists, albums, and genres with real-time statistics. Built with the MERN (MongoDB, Express.js, React, Node.js) stack following best practices and modern architecture patterns.

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Live Demo](#live-demo)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Installation](#installation)
- [Docker Setup](#docker-setup)
- [Environment Variables](#environment-variables)
- [Testing with Postman](#testing-with-postman)
- [Deployment](#deployment)
- [Author](#author)

## ✨ Features

### Backend Features
- ✅ Complete CRUD operations for songs (Create, Read, Update, Delete)
- ✅ Real-time statistics dashboard with MongoDB aggregation pipelines
- ✅ RESTful API design with proper HTTP status codes
- ✅ Docker containerization for easy deployment
- ✅ MongoDB Atlas cloud database integration
- ✅ Comprehensive error handling

### Statistics Provided
- 📊 Total number of songs, artists, albums, and genres
- 🎸 Number of songs in each genre
- 🎤 Number of songs each artist has
- 💿 Number of albums each artist has released
- 📀 Number of songs in each album
- 🏆 Top artists and genres (bonus)

### Frontend Features
- ✅ Modern React with TypeScript (zero `any` types)
- ✅ Redux Toolkit for state management
- ✅ Redux-Saga for handling API side effects
- ✅ Emotion.js for styled components
- ✅ Modal popups for add/edit operations
- ✅ Toast notifications for user feedback
- ✅ Filter songs by genre
- ✅ Real-time updates without page reload
- ✅ Fully responsive design
- ✅ Black & white professional theme

## 🛠️ Technologies Used

### Backend
| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web framework for REST API |
| **MongoDB** | NoSQL database |
| **Mongoose** | ODM for MongoDB |
| **Docker** | Containerization |
| **Render** | Cloud deployment |

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 18** | UI library |
| **TypeScript** | Type-safe JavaScript |
| **Redux Toolkit** | State management |
| **Redux-Saga** | Side effect management |
| **Emotion** | CSS-in-JS styling |
| **Axios** | HTTP client |
| **Vercel** | Frontend deployment |

## 🌐 Live Demo

| Environment | URL |
|-------------|-----|
| **Frontend** | [https://song-list-gkkzsm37f-fuadseids-projects.vercel.app](https://song-list-gkkzsm37f-fuadseids-projects.vercel.app) |
| **Backend API** | [https://song-list-lnq0.onrender.com/api](https://song-list-lnq0.onrender.com/api) |
| **Health Check** | [https://song-list-lnq0.onrender.com/health](https://song-list-lnq0.onrender.com/health) |
| **Songs Endpoint** | [https://song-list-lnq0.onrender.com/api/songs](https://song-list-lnq0.onrender.com/api/songs) |
| **Stats Endpoint** | [https://song-list-lnq0.onrender.com/api/songs/stats](https://song-list-lnq0.onrender.com/api/songs/stats) |

## 📁 Project Structure
