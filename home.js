document.addEventListener('DOMContentLoaded', () => {
    const interestsScreen = document.getElementById('interests-screen');
    //const homeScreen = document.getElementById('home-screen');
    const sidebar = document.getElementById('sidebar');
    const menuButton = document.getElementById('menu-button');
    const closeSidebarButton = document.getElementById('close-sidebar');
    const interestButtons = document.querySelectorAll('.interest-button');
    const buttons = document.querySelectorAll('.interest-button');



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
            case 'MBC':
                pageUrl = 'mbc.html'; // Replace with actual URL
                break;
            case 'Pharmacology':
                pageUrl = 'pha.html'; // Replace with actual URL
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

    function toggleSidebar() {
        sidebar.classList.toggle('open');
    }

    menuButton.addEventListener('click', toggleSidebar);
    closeSidebarButton.addEventListener('click', toggleSidebar);

    
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