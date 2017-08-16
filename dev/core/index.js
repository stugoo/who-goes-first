import $ from 'jquery';
import routerInit  from 'router';

function init () {
    routerInit();
}

// $(document).ready(() => {
    init();
    doServiceworkerstuff();


// });

function doServiceworkerstuff() {


    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
             .register('service-worker.js')
             .then(function() { 
                console.log('Service Worker Registered', 'service-worker.js'); 
        });
    }

}
