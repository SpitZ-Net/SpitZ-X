window.addEventListener('DOMContentLoaded', () => {
    // Wait for the CSS animation bar to finish (2 seconds) + tiny buffer
    setTimeout(() => {
        const loader = document.getElementById('loading-screen');
        const mainUi = document.getElementById('main-interface');
        
        if(loader && mainUi) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                mainUi.classList.add('active'); // Fade in the main dashboard
            }, 500); // 500ms matches the CSS transition time
        }
    }, 2200); 
});
