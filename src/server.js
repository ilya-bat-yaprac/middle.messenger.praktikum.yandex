const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;

const distributiveDirPath = path.join(__dirname, '../', "dist");

const app = express();

app.use(express.static(distributiveDirPath));

app.listen(PORT, () => console.log(`Server http://localhost:` + PORT));
