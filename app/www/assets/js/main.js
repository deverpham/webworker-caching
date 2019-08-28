
function registerServiceWorker() {
    navigator
        .serviceWorker
        .register('/static/js/sworker.js', {
            scope: '/'
        }).then(() => {
            console.log('service worked loaded');
        })
    const worker = new Worker('/static/js/wworker.js');
}
window.onload = function () {
    if ('serviceWorker' in navigator) {
        registerServiceWorker();
    }
    self.addEventListener('fetch', () => {
        console.log('yes');
    })
}