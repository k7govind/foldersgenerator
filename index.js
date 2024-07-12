const fs = require('fs');
const path = require('path');

const jsonFilePath = './input.json';
const filePath = require('./filepath.json');

// Read the JSON file
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  try {
    const folderData = JSON.parse(data);

    // Create yearly folders
    folderData.yearlyFolders.forEach(year => {
      const yearPath = path.join(filePath.src, year);
      createFolder(yearPath);
      
      // Create monthly folders for each year
      folderData.monthlyFolders[year].forEach(month => {
        const monthPath = path.join(yearPath, month);
        createFolder(monthPath);

        // Create daily folders for each month
        folderData.dailyFolders[year][month].forEach(day => {
          const dayPath = path.join(monthPath, day);
          createFolder(dayPath);
        });
      });
    });

    console.log('Folders created successfully based on input file.');

  } catch (error) {
    console.error('Error parsing JSON data:', error);
  }
});

// Helper function to create a folder
function createFolder(folderPath) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log(`Created folder: ${folderPath}`);
  } else {
    console.log(`Folder already exists: ${folderPath}`);
  }
}
