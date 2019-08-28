self.addEventListener('install', e => {
    console.log('INSTALLING');
})
self.addEventListener('activate', e => {
    console.log('activated');
})
self.addEventListener('fetch', e => {
    console.log(e);
})