document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('service-form');
  
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      description: formData.get('description')
    };
    
    try {
      const response = await fetch('https://arcadia-zoo-api.onrender.com/api/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  });
});
