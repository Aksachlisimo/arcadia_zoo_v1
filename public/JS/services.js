document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('service-form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {
      id: formData.get('service-id'),
      name: formData.get('service-name'),
      description: formData.get('service-description')
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
      alert('Service submitted successfully!'); // Add this line for alert
    } catch (error) {
      console.error('Fetch error:', error);
      alert('There was an error submitting the service.'); // Add error handling alert
    }
  });
});
