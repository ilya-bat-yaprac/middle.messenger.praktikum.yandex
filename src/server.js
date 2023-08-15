const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3000;

const distributiveDirPath = path.join(__dirname, '../', 'dist');

const app = express();

app.use(express.static(distributiveDirPath));
/* eslint-disable no-console */
app.listen(PORT, () => console.log(`Server http://localhost:${PORT}`));
