const express = require('express');
const path = require('path');

const distributiveDirPath = path.join(__dirname, '../', "dist");

const app = express();

app.use(express.static(distributiveDirPath));

app.listen(3000, () => console.log(`Server http://localhost:3000`));