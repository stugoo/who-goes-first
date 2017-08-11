import $ from 'jquery';
import { Decider } from 'decider';

function init () {

    var decider = new Decider();

    console.log(decider.data)

    $('[data-decide]').on('click',function() {
        $('[data-descion]').text(decider.getDescision());
    })
}

$(document).ready(() => {
    init();
});
