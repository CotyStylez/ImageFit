import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve jszip dist file from node_modules if requested
app.use('/vendor/jszip.min.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'node_modules/jszip/dist/jszip.min.js'));
});

// Serve static assets from project root
app.use(express.static(__dirname));

// Fallback to index.html for root path or SPA navigation
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`ResizeZero server listening on http://0.0.0.0:${PORT}`);
});
