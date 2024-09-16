document.addEventListener('DOMContentLoaded', () => {
    const interestsScreen = document.getElementById('interests-screen');
    const interestButtons = document.querySelectorAll('.interest-button');
    const buttons = document.querySelectorAll('.interest-button');
    const sidebar = document.getElementById('sidebar');
    const menuButton = document.getElementById('menu-button');
    const closeSidebarButton = document.getElementById('close-sidebar');
    const overlay = document.getElementById('overlay');
    const content = document.querySelector('.content');

    function toggleSidebar() {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
        content.classList.toggle('blurred');
    }

    function closeSidebar() {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        content.classList.remove('blurred');
    }

    menuButton.addEventListener('click', toggleSidebar);
    closeSidebarButton.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const interest = this.getAttribute('data-interest');
            console.log("Clicked: " + interest); // Log to confirm button click
            redirectToPage(interest);
        });
    });

    function redirectToPage(interest) {
        let pageUrl = '';

        switch (interest) {
            case 'Anatomy':
                pageUrl = 'anatomy.html'; // Replace with actual URL
                break;
            case 'Physiology':
                pageUrl = 'physiology.html'; // Replace with actual URL
                break;
            case 'Medical Biochemistry':
                pageUrl = '#'; // Replace with actual URL
                break;
            case 'Pharmacology':
                pageUrl = '#'; // Replace with actual URL
                break;
            case 'Chemistry':
                pageUrl = '#'; // Replace with actual URL
                break;
            case 'General Studies':
                pageUrl = '#'; // Replace with actual URL
                break;
            default:
                pageUrl = 'index.html'; // Default or fallback page
        }

        if (pageUrl) {
            window.location.href = pageUrl;
        } else {
            console.error("Page URL not found for: " + interest);
        }
    }



 




    // Add hover animations
    const animateOnHover = (element, scale) => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = `scale(${scale})`;
        });
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'scale(1)';
        });
    };

    interestButtons.forEach(button => animateOnHover(button, 1.05));
    document.querySelectorAll('.quiz-button').forEach(button => animateOnHover(button, 1.02));

    // Add click animations
    const animateOnClick = (element, scale) => {
        element.addEventListener('mousedown', () => {
            element.style.transform = `scale(${scale})`;
        });
        element.addEventListener('mouseup', () => {
            element.style.transform = 'scale(1)';
        });
    };

    interestButtons.forEach(button => animateOnClick(button, 0.95));
    document.querySelectorAll('.quiz-button').forEach(button => animateOnClick(button, 0.98));
});