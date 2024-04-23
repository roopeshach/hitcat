document.addEventListener('DOMContentLoaded', () => {
    const preventionStrategies = [
        {
            id: 'educate',
            title: 'Educate',
            description: 'Learn about the causes and consequences of cyberbullying to better understand how to prevent it.',
            imgSrc: 'educate.jpg', 
        },
        {
            id: 'communicate',
            title: 'Communicate',
            description: 'Open lines of communication with family and friends about online experiences and witnessed behaviors.',
            imgSrc: 'communicate.jpeg', 
        },
        {
            id: 'protect',
            title: 'Protect',
            description: 'Use privacy settings and reporting tools to protect yourself and others online.',
            imgSrc: 'protect.jpg', 
        }
    ];

    const preventionSection = document.getElementById('prevention');

    // Create modals and append to prevention section
    preventionStrategies.forEach(strategy => {
        // Create the button that triggers the modal
        const modalButton = document.createElement('button');
        modalButton.setAttribute('type', 'button');
        modalButton.classList.add('btn', 'btn-success');
        modalButton.setAttribute('data-toggle', 'modal');
        modalButton.setAttribute('data-target', `#${strategy.id}Modal`);
        modalButton.textContent = "View More";

        // Find the corresponding card and append the button
        const card = preventionSection.querySelector(`.${strategy.id}`);
        card.appendChild(modalButton);

        // Create the modal HTML
        const modalHTML = `
            <div class="modal fade" id="${strategy.id}Modal" tabindex="-1" role="dialog" aria-labelledby="${strategy.id}ModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="${strategy.id}ModalLabel">${strategy.title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <img src="${strategy.imgSrc}" alt="${strategy.title}" class="img-fluid">
                            <p>${strategy.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Append the modal HTML to the body
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    });


    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        $('#successModal').modal('show');
    });
});


