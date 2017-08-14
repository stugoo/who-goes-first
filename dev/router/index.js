import Navigo from 'navigo';
import { Decider } from 'decider';
import $ from 'jquery';


const root = null;
const useHash = true;
const hash = '#!';
const router = new Navigo(root, useHash, hash);


const decider = new Decider();



var pages = $('[data-page]');

function goToPage(page) {
    pages.hide()

    pages.filter('[data-page="'+page+'"]').show();
}

function setRoutes() {

    router.on(function(){
        goToPage('home')
    });

    // router
    //     .hooks({
    //         before: function(done, params) { 
    //             console.log('before', params) 

    //             done();
    //         },
    //         after: function(params) { 
    //             console.log('after') 
    //         }
    //     });

    router
      .on({
        'decision/:id': function (params) {
          decider.set(params.id);
          decider.show();
          goToPage('descion');
        },
        'decide': function () {        
          router.navigate('/decision/' + decider.random());
        },
        'settings': function () {
          goToPage('settings');
        },
        '*': function () {
          goToPage('home');
        }
      })
      .resolve();

}

export default function () {
    setRoutes();
}
