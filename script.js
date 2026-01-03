function loadSharedComponents() {
    const repoPath = '/web-design-semester-one/';

    // Зареждане на Header
    fetch(repoPath + 'base/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });

    // Зареждане на Nav
    fetch(repoPath + 'base/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
            // След зареждане на навигацията, маркиране на активната връзка
            highlightActiveLink();
        });

    // Зареждане на Footer
    fetch(repoPath + 'base/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
}

// Зареждане на споделените компоненти при зареждане на страницата (header и nav)
loadSharedComponents();

// Функция за маркиране на активната връзка в навигационното меню
function highlightActiveLink() {
    // Вземаме текущия път от URL адреса
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        // Взимаме само пътя от href атрибута
        const linkPath = new URL(link.href).pathname;
        
        // Сравняваме пътищата и ако е правилният път маркираме връзката
        if (linkPath === currentPath) {
            link.style.backgroundColor = '#00e5ff';
            link.style.color = '#1a237e';
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
    // Обработка на формата за контакт
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            const responseDiv = document.getElementById('formResponse');
            responseDiv.innerHTML = `<p style="color: green; font-weight: bold;">Благодарим Ви, ${name}! Вашето съобщение беше изпратено успешно.<br> 
            Очаквайте отговор на ${email}.</p>`;
            
            contactForm.reset();
        });
    }
});


let slideIndex = 0;
let slideTimer; 

showSlides();

// Функция за ръчно превключване на слайдовете
function currentSlide(n) {
    clearTimeout(slideTimer); 
    slideIndex = n;       
    showSlides();             
}

// Автоматично показване на слайдовете
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    let thumbs = document.getElementsByClassName("thumb"); 


    clearTimeout(slideTimer);

    if (slides.length === 0) return; 

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    for (i = 0; i < thumbs.length; i++) {
        thumbs[i].className = thumbs[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    
    if (dots.length > 0) dots[slideIndex-1].className += " active";
    if (thumbs.length > 0) thumbs[slideIndex-1].className += " active"; 
    
    slideTimer = setTimeout(showSlides, 3500); 
}

