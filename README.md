# 📝 Simple To-Do App

This is a full-stack To-Do List application built using:

- ✅ **Frontend**: HTML, Bootstrap 5, JavaScript (Fetch API)
- 🔧 **Backend**: Node.js with Express
- 🗄️ **Database**: MySQL

---

## 📁 Project Structure

todo-app/
├── backend/ # Express.js API
│ └── index.js
├── frontend/ # Static HTML UI
│ └── index.html
├── .gitignore
└── README.md

yaml
Copy
Edit

---

## ⚙️ How to Run

### 🛠️ 1. Setup MySQL

Create a database and table:

```sql
CREATE DATABASE todo;

USE todo;

CREATE TABLE todoItems (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  itemDescription VARCHAR(255) NOT NULL
);
🚀 2. Run the Backend
bash
Copy
Edit
cd backend
npm install express cors mysql2
node index.js
The backend will run on: http://localhost:3000/

💻 3. Open Frontend
Open frontend/index.html in your browser.

It communicates with the backend API to manage to-do items.

📌 API Endpoints
Method	Endpoint	Description
GET	/	Get all to-do items
POST	/add-item	Add a new to-do item
PUT	/edit-item	Edit an existing item
DELETE	/delete-item/:id	Delete item by ID

✅ Features
Add new tasks

Edit tasks

Delete tasks

Responsive and clean UI

👨‍💻 Developed By
Ranjith Ambeeru
