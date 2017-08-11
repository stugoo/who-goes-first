import * as responses from 'datasets/base';

let activeIndex = 0;

export class Decider {
    
    constructor(){
        this.desicionList = responses.BASE_RESPONSES;
        this.descisionIndex = false;
        this.currentDescision = false;

        console.log(this);
    }

    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    getDescision() {

        activeIndex = this.getRandomInt(0, this.desicionList.length );

        if(activeIndex === this.descisionIndex) {
            this.getDescision();
            return;
        }

        this.currentDescision = this.desicionList[activeIndex];

        return this.currentDescision;
    }

}
