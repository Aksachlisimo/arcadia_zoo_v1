document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission
  
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const email = document.getElementById('email').value;
  
    if (title && description && email) {
        try {
            const response = await fetch('https://arcadia-zoo-v1-api.onrender.com/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: title,
                    description: description,
                    email: email
                })
            });
  
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
            }
  
            const data = await response.json();
            console.log('Response data:', data);
  
            // Clear the form
            document.getElementById('contact-form').reset();
  
            // Notify user of successful submission
            alert('Votre message a été envoyé avec succès ! Nous vous répondrons bientôt.');
        } catch (error) {
            console.error('Fetch error:', error);
            // Notify user of the error
            alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer plus tard.');
        }
    } else {
        // Notify user of missing fields
        alert('Veuillez remplir tous les champs.');
    }
  });
  