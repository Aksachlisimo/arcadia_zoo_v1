const axios = require('axios');

async function testIncrementView() {
  try {
    const animalId = 'Lion'; // Replace with actual ID
    const response = await axios.post(`http://localhost:5000/increment-view/${animalId}`);
    
    console.log('Animal Updated:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testIncrementView();
