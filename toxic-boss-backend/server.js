const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json());

const bossMessages = JSON.parse(fs.readFileSync('./messages/bossMessages.json'));
const replies = JSON.parse(fs.readFileSync('./replies/replies.json'));

// GET: Random boss message
app.get('/api/message', (req, res) => {
  const msg = bossMessages[Math.floor(Math.random() * bossMessages.length)];
  res.json(msg);
});

// POST: Get reply based on tone + category
app.post('/api/reply', (req, res) => {
  const { category, tone } = req.body;
  console.log('Incoming request:', req.body);

  const replyOptions = replies[category]?.[tone];
  if (replyOptions && replyOptions.length > 0) {
    const reply = replyOptions[Math.floor(Math.random() * replyOptions.length)];
    res.json({ reply });
  } else {
    res.status(400).json({ error: 'Invalid category or tone' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🔥 Server running at http://localhost:${PORT}`));
