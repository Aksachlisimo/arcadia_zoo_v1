document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('service-modification-form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const serviceName = document.getElementById('service-name').value;
    const serviceDescription = document.getElementById('service-description').value;

    if (serviceName && serviceDescription) {
      try {
        const response = await fetch('https://arcadiazooapi.vercel.app/api/services', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: serviceName,
            description: serviceDescription
          })
        });

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        alert('Service modified successfully!');
        form.reset(); // Clear form

      } catch (error) {
        console.error('Fetch error:', error);
        alert('An error occurred while modifying the service.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  });
});
