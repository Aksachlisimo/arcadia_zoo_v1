document.addEventListener('DOMContentLoaded', () => {
    const detailsButtons = document.querySelectorAll('.details-btn');
    const detailsSection = document.getElementById('details');
    const habitatDetails = document.getElementById('habitat-details');

    detailsButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const habitatId = event.target.getAttribute('data-habitat');
            fetchHabitatDetails(habitatId);
        });
    });

    function fetchHabitatDetails(habitatId) {
        // For demonstration, using static details
        const details = {
            savane: 'La savane est un habitat avec des animaux tels que les lions, éléphants et girafes. Découvrez plus de détails sur leur comportement et leur habitat naturel.',
            jungle: 'La jungle dense abrite des tigres majestueux et des singes acrobatiques. En savoir plus sur les espèces qui vivent ici.',
            marais: 'Les marais sont un habitat mystérieux où vivent les alligators et autres créatures aquatiques. Découvrez la faune qui réside dans ces environnements uniques.'
        };

        habitatDetails.innerHTML = `<p>${details[habitatId]}</p>`;
        detailsSection.style.display = 'block';
    }
});
