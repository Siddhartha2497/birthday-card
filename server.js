// import path from 'path'; 
// import sound from 'sound-play';
// const __dirname = path.resolve();
require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Replace with your actual correct values
// const correctName = 'siddhartha';
// //const correctDob = '1997-09-24';
// const correctDob = '2025-06-01';

// console.log(correctDob);
// console.log(correctName);
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));

const correctName=process.env.CORRECT_NAME;
const correctDob=process.env.CORRECT_DOB;
const memoryLink=process.env.MEMORY_LINK;
// const filePath = path.join(__dirname, "tune_song.mp3");
// sound.play(filePath);
// API endpoint
app.post('/validate', (req, res) => {
const { name, dob } = req.body;

// console.log('Received:',name,dob);
if (
name.trim().toLowerCase() === correctName &&
dob === correctDob
) {
return res.json({ success: true, message: 'Correct',
memoryLink: memoryLink
// 'https://drive.google.com/file/d/1QjYnb-7krlmTjxELvU7OVSkEGcq9SHhb/view?usp=drive_link' // replace with real URL
});
} else {
return res.json({ success: false, message: 'Wrong name or DOB' });
}
});

// Start server
app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});