// menu.js

// Function to hide or show the 'Connexion' link based on user role
function updateMenu() {
  const userRole = localStorage.getItem('userRole'); // Assuming user role is stored in localStorage
  const connexionLink = document.querySelector('a[href="login.html"]');
  
  if (userRole === 'admin' || userRole === 'employee' || userRole === 'vet') {
    connexionLink.style.display = 'inline'; // Show link if user has permission
  } else {
    connexionLink.style.display = 'none'; // Hide link for others
  }
}

// Call the function on page load
window.onload = function() {
  updateMenu();
};
