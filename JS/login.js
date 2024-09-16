document.getElementById('loginForm').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
      const response = await fetch('http://localhost:5000/api/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
      });

      if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Login successful:', data);

      // Redirect based on user role
      switch (data.role) {
          case 'admin':
              window.location.href = 'admin.html';
              break;
          case 'employee':
              window.location.href = 'employee.html';
              break;
          case 'veterinarian':
              window.location.href = 'veterinarian.html';
              break;
          default:
              alert('Unauthorized role');
      }
  } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed. Please check your username and password.');
  }
});
