// backend/index.js
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();

app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Pintu@123',
  database: 'todo'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to DB:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Get all to-do items
app.get('/', (req, res) => {
  db.query('SELECT * FROM todoItems', (err, result) => {
    if (err) return res.status(500).send('DB error');
    res.json(result);
  });
});

// Add new item
app.post('/add-item', (req, res) => {
  const { text } = req.body;
  db.query('INSERT INTO todoItems (itemDescription) VALUES (?)', [text], (err) => {
    if (err) return res.status(500).send('Insert error');
    res.send('Item added successfully');
  });
});

// Update item
app.put('/edit-item', (req, res) => {
  const { id, text } = req.body;
  db.query('UPDATE todoItems SET itemDescription = ? WHERE ID = ?', [text, id], (err) => {
    if (err) return res.status(500).send('Update error');
    res.send('Item updated successfully');
  });
});

// Delete item
app.delete('/delete-item/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM todoItems WHERE ID = ?', [id], (err) => {
    if (err) return res.status(500).send('Delete error');
    res.send('Item deleted successfully');
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
