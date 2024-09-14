document.addEventListener('DOMContentLoaded', () => {
    const interestsScreen = document.getElementById('interests-screen');
    const homeScreen = document.getElementById('home-screen');
    const sidebar = document.getElementById('sidebar');
    const menuButton = document.getElementById('menu-button');
    const closeSidebarButton = document.getElementById('close-sidebar');
    const interestButtons = document.querySelectorAll('.interest-button');

    function showHomeScreen() {
        interestsScreen.classList.add('hidden');
        homeScreen.classList.remove('hidden');
    }

    function toggleSidebar() {
        sidebar.classList.toggle('open');
    }

    interestButtons.forEach(button => {
        button.addEventListener('click', showHomeScreen);
    });

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