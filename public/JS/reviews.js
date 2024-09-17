document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('review-form');
    
    if (!form) {
        console.error('Form with ID "review-form" not found.');
        return;
    }

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        const pseudoElement = document.getElementById('pseudo');
        const reviewElement = document.getElementById('review');

        if (!pseudoElement || !reviewElement) {
            console.error('Form elements not found.');
            return;
        }

        const pseudo = pseudoElement.value;
        const review = reviewElement.value;

        if (pseudo && review) {
            try {
                const response = await fetch('https://arcadia-zoo-v1-api.onrender.com/api/reviews', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ pseudo, review })
                });

                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();
                console.log('Response data:', data);

                // Clear the form
                form.reset();

                // Notify user of successful submission
                alert('Review submitted successfully!');
            } catch (error) {
                console.error('Fetch error:', error);
                alert('An error occurred while submitting the review.');
            }
        } else {
            alert('Please fill in all fields.');
        }
    });
});
