const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));

// Simple API endpoint for contact form
app.post('/api/contact', (req, res) => {
  const { name, email, phone, details } = req.body;
  if(!name || !email) return res.status(400).json({ error: 'Name and email required' });

  // In a real app: validate, store in DB, send notification email
  console.log('Contact submission:', { name, email, phone, details });

  // Simulate processing delay
  setTimeout(() => {
    res.json({ success: true, message: 'Received' });
  }, 700);
});

// Fallback to index
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
