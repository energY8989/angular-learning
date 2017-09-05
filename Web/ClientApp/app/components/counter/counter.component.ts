import { Component } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    public currentCount = 0;

    public counterClicked = false;

    public incrementCounter() {
        this.currentCount++;

        this.counterClicked = this.currentCount > 0
    }
}
