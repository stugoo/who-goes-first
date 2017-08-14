import $ from 'jquery';
import * as responses from 'datasets/base';

export class Decider {
    
    constructor(){
        this.desicionList = responses.BASE_RESPONSES;
        this.currentDecisionIndex = false;
        this.currentDecision = false;

        this.set(0);
    }

    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    random() {
        var currentIndex = this.currentDecisionIndex,
            newIndex = this.getRandomInt(0, this.desicionList.length  );

        // @TODO create real random, never the same twice.
        
        this.currentDecisionIndex = newIndex;

        return newIndex;
    }

    set(int) {        
        this.currentDecisionIndex = parseInt(int, 10);
    }

    get() {
        this.currentDecision = this.desicionList[this.currentDecisionIndex];
        return this.currentDecision;
    }

    show() {
        $('[data-decision]').text(this.get());
        return 'yolo';
    }

}
