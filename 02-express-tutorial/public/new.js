//  I want you to use fs module and print the file list for your desktop

const fs = require('fs')
const path = require('path')
const file = path.join(__dirname, '../../../../../../../../../../');

fs.readdir(file, (err, files) => {
    if (err)
      console.log(err);
    else {
      files.forEach(file => {
        console.log(file);
      })
    }
  })

