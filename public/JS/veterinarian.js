document.addEventListener('DOMContentLoaded', function () {
    // Handle form submission for reports
    document.getElementById('report-form').addEventListener('submit', async function (event) {
      event.preventDefault(); // Prevent default form submission
      const animalId = document.getElementById('animal-id').value;
      const reportDate = document.getElementById('report-date').value;
      const reportText = document.getElementById('report-text').value;
  
      try {
        const response = await fetch('https://arcadia-zoo-api.onrender.com/api/vet-reports', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ animalId, reportDate, reportText }),
        });
  
        if (response.ok) {
          alert('Rapport soumis avec succès');
          document.getElementById('report-form').reset();
        } else {
          throw new Error('Erreur lors de la soumission du rapport');
        }
      } catch (error) {
        console.error(error);
        alert('Échec de la soumission du rapport.');
      }
    });
  
    // Handle form submission for habitat comments
    document.getElementById('comment-form').addEventListener('submit', async function (event) {
      event.preventDefault();
  
      const habitatId = document.getElementById('habitat-id').value;
      const commentText = document.getElementById('comment-text').value;
  
      try {
        const response = await fetch('https://arcadia-zoo-api.onrender.com/api/habitat-comments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ habitatId, commentText }),
        });
  
        if (response.ok) {
          alert('Commentaire soumis avec succès');
          document.getElementById('comment-form').reset();
        } else {
          throw new Error('Erreur lors de la soumission du commentaire');
        }
      } catch (error) {
        console.error(error);
        alert('Échec de la soumission du commentaire.');
      }
    });
  
    // Handle form submission for feeding records
    document.getElementById('feeding-form').addEventListener('submit', async function (event) {
      event.preventDefault();
  
      const animalIdFeeding = document.getElementById('animal-id-feeding').value;
      const feedingDate = document.getElementById('feeding-date').value;
      const feedingTime = document.getElementById('feeding-time').value;
      const foodType = document.getElementById('food-type').value;
      const foodQuantity = document.getElementById('food-quantity').value;
  
      try {
        const response = await fetch('https://arcadia-zoo-api.onrender.com/api/feeding-records', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            animalId: animalIdFeeding,
            feedingDate,
            feedingTime,
            foodType,
            foodQuantity,
          }),
        });
  
        if (response.ok) {
          alert('Enregistrement de nourriture soumis avec succès');
          document.getElementById('feeding-form').reset();
        } else {
          throw new Error('Erreur lors de la soumission de l’enregistrement');
        }
      } catch (error) {
        console.error(error);
        alert('Échec de la soumission de l’enregistrement de nourriture.');
      }
    });
  });
  