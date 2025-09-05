# 🤖 AI Interview Prep Platform

An intelligent full-stack application built with the MERN stack (MongoDB, Express.js, React, Node.js) and powered by the Gemini API. The app helps candidates practice technical interviews by generating personalized questions, detailed answers, and AI-driven explanations.

---

## ✨ Features

1.🔑 **Secure Authentication** – Login & signup with JWT-based security.

2.🎓 **Role-Specific Practice** – Get interview questions customized to your role & experience level.

3.🤖 **AI Q&A Engine** – Uses Gemini API to generate realistic technical questions and responses.

4.📖 **Interactive Learning** – Accordion-style UI for better readability and navigation.

5.💡 **Smart Explanations** – Ask the AI for simplified breakdowns of difficult concepts.

6.📌 **Bookmark Questions** – Pin key Q&As to revisit anytime.

7.🗄 **Persistent Storage** – MongoDB stores user data, sessions, and pinned content.

8.🎨 **Modern UI/UX** – Tailwind CSS ensures a responsive and clean interface.

---

## 🏗 Project Structure
```
AI-Interview-Prep/
├── Backend/
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ ├── aiController.js
│ │ ├── authController.js
│ │ ├── questionController.js
│ │ └── sessionController.js
│ ├── middlewares/
│ │ ├── authMiddlewares.js
│ │ └── uploadMiddlewares.js
│ ├── models/
│ │ ├── Question.js
│ │ ├── Session.js
│ │ └── User.js
│ ├── routes/
│ │ ├── authRoutes.js
│ │ ├── questionRoutes.js
│ │ └── sessionRoutes.js
│ ├── utils/
│ ├── server.js
│ ├── package.json
│ └── package-lock.json
│
├── Frontend/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ │ ├── Cards/
│ │ │ ├── Inputs/
│ │ │ ├── Loader/
│ │ │ ├── layouts/
│ │ │ └── DeleteAlertContent.jsx, Drawer.jsx, Modal.jsx
│ │ ├── context/
│ │ │ └── userContext.jsx
│ │ ├── pages/
│ │ │ ├── Auth/
│ │ │ ├── Home/
│ │ │ └── InterviewPrep/
│ │ ├── utils/
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ ├── index.css
│ │ └── index.html
│ ├── package.json
│ └── vite.config.js
```
---
## ⚡ Tech Stack

| Layer      | Technology                     |
|------------|--------------------------------|
| Frontend   | React.js, Tailwind CSS, Vite   |
| Backend    | Node.js, Express.js            |
| Database   | MongoDB                        |
| AI Service | Gemini API (Q&A + Explanation) |
| Auth       | JWT, Passport.js (if used)     |

---
## 🛠 Setup Instructions

### 📌Backend Setup

```bash
cd Backend
npm install
```

### Create a `.env` file in the root of Backend:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```

### Start the backend server:

```bash
node server.js
```

---

## 💻Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```
- Access the app at: http://localhost:5173
- Make sure the backend is running at http://localhost:5000 or update the API base URL accordingly in `axiosInstance.js`.

---

## 📍 Example Workflow
- Sign up or log in.
- Select a job role and experience level.
- Receive a curated list of questions.
- View answers and AI explanations on demand.
- Pin important Q&As for future review.

---
## Project Maintainer
**Github:** [Akash Rawat](https://github.com/SwedeshnaMishra)
