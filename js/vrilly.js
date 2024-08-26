// script.js
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.close');

    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.querySelector('img').src;
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});


document.addEventListener('contextmenu', event => event.preventDefault());
