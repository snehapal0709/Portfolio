// Minimal Express server providing sample API endpoints for the portfolio.
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Sample projects data — placeholders the frontend will consume.
const sampleProjects = [
  {
    id: 1,
    title: '[project]',
    description: 'Short project description...',
    tech: ['React', 'Node.js', 'MongoDB'],
    url: '#',
    repo: '#'
  },
  {
    id: 2,
    title: '[project]',
    description: 'Short project description...',
    tech: ['TypeScript', 'Express'],
    url: '#',
    repo: '#'
  },
  {
    id: 3,
    title: '[project]',
    description: 'Short project description...',
    tech: ['React', 'Tailwind'],
    url: '#',
    repo: '#'
  },
  {
    id: 4,
    title: '[project]',
    description: 'Short project description...',
    tech: ['Node.js', 'MySQL'],
    url: '#',
    repo: '#'
  }
];

app.get('/api/projects', (req, res) => {
  res.json(sampleProjects);
});

// Contact endpoint (does not send email in this minimal scaffold)
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form received:', { name, email, message });
  // In production you'd persist or send an email here.
  res.json({ ok: true, message: 'Thanks — I will get back to you soon!' });
});

app.listen(port, () => {
  console.log(`Portfolio backend running on port ${port}`);
});
