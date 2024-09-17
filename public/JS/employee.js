// employee.js
document.addEventListener('DOMContentLoaded', function() {
    loadReviews();
    handleServiceFormSubmit();
});

async function loadReviews() {
    try {
        const response = await fetch('https://arcadia-zoo-v1-api.onrender.com/api/reviews'); // Replace with your API endpoint
        const reviews = await response.json();
        const tableBody = document.querySelector('#reviews-table tbody');
        
        reviews.forEach(review => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${review.pseudo}</td>
                <td>${review.review}</td>
                <td>
                    <button onclick="validateReview(${review.id})">Valider</button>
                    <button onclick="invalidateReview(${review.id})">Invalider</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error loading reviews:', error);
    }
}

async function validateReview(id) {
    try {
        await fetch(`https://arcadia-zoo-v1-api.onrender.com/api/reviews/${id}/validate`, {
            method: 'PATCH',
        });
        alert('Review validated');
        location.reload();
    } catch (error) {
        console.error('Error validating review:', error);
    }
}

async function invalidateReview(id) {
    try {
        await fetch(`https://arcadia-zoo-v1-api.onrender.com/api/reviews/${id}/invalidate`, {
            method: 'PATCH',
        });
        alert('Review invalidated');
        location.reload();
    } catch (error) {
        console.error('Error invalidating review:', error);
    }
}

function handleServiceFormSubmit() {
    const form = document.getElementById('service-form');
    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const serviceName = document.getElementById('service-name').value;
        const serviceDescription = document.getElementById('service-description').value;

        try {
            await fetch('https://arcadia-zoo-v1-api.onrender.com/api/services', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: serviceName, description: serviceDescription }),
            });
            alert('Service updated');
            form.reset();
        } catch (error) {
            console.error('Error updating service:', error);
        }
    });
}
