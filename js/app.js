document.addEventListener('DOMContentLoaded', async () => {
    try {
        const gridGenerator = new PasswordGrid();
        const ui = new UIController(gridGenerator);
        window.uiController = ui; // Optional: for console debugging
        
        await ui.loadPresets();
        ui.loadSettings();
        ui.generateGrid();

        if ('serviceWorker' in navigator) {
            console.log('Service Worker is supported in this browser');
        } else {
            console.log('Service Worker is not supported in this browser');
        }
    } catch (error) {
        console.error('Application initialization failed:', error);
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'An error occurred while loading the application. Please refresh the page.';
        document.body.appendChild(errorMessage);
    }
});