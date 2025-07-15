# ABC Company Website 🌐

A modern, responsive company website built using **React** on the frontend and **Spring Boot** on the backend. This platform offers dynamic content management and showcases key services through an interactive UI.

---

## 🔗 Live URLs

- **Frontend (Vercel)**: [https://abc-company-website-gray.vercel.app/](https://abc-company-website-gray.vercel.app/)
- **Backend (Render)**: [https://abccompanywebsite-4.onrender.com](https://abccompanywebsite-4.onrender.com)

---

## 🛠️ Tech Stack

### Frontend
- React.js
- HTML5, CSS3 (Responsive)
- Material UI
- Lucide Icons
- Axios

### Backend
- Spring Boot
- Java 17
- H2 In-Memory Database
- RESTful APIs

---

## ⚙️ Features

- 🎯 Hero section with a marketing message and call to action
- 🧠 Zigzag feature step slider with icons and descriptions
- 📄 CMS panel to dynamically update homepage heading
- 🔄 API integration between frontend and backend
- 📱 Fully responsive design

---
```bash
  ###cd backend
./mvnw clean package
java -jar target/backend-0.0.1-SNAPSHOT.jar
```

```bash
 ###cd frontend
npm install
npm start

```

## 🚀 Deployment Info

### Backend (Render)
- URL: `https://abccompanywebsite-4.onrender.com`
- Deployment: via JAR build using Maven and Docker
- Procfile:
  ```bash
  web: java -jar target/backend-0.0.1-SNAPSHOT.jar

  
