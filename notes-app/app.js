const fs=require('fs');

fs.writeFileSync('notes.txt','This is file created by node');

fs.appendFileSync('notes.txt',' Appened text ')