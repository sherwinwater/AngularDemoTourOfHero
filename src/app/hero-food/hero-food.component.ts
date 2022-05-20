import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import {
  debounceTime,
  distinct,
  filter,
  fromEvent,
  interval,
  map,
  of,
  range,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-hero-food',
  templateUrl: './hero-food.component.html',
  styleUrls: ['./hero-food.component.css'],
})
export class HeroFoodComponent implements OnInit {
  @Input()
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }

  private _name = '';

  dataX: number;
  dataArray: number[] = [];
  dataArray2: number[];

  constructor() {}

  ngOnInit(): void {
    of(10, 20, 30).subscribe({
      next: (value) => console.log('next:', value),
      error: (err) => console.log('error:', err),
      complete: () => console.log('the end'),
    });

    of([10, 20, 30]).subscribe({
      next: (value) => console.log('next:', value),
      error: (err) => console.log('error:', err),
      complete: () => console.log('the end'),
    });

    of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)
      .pipe(distinct())
      .subscribe((x) => console.log(x));

    range(1, 3)
      .pipe(
        filter((x) => x % 2 === 1),
        map((x) => x + x)
      )
      .subscribe((x) => console.log(x));

    // const observable1 = interval(400);
    // const observable2 = interval(300);

    // const subscription = observable1.subscribe((x) =>
    //   console.log('first: ' + x)
    // );
    // const childSubscription = observable2.subscribe((x) =>
    //   console.log('second: ' + x)
    // );

    // subscription.add(childSubscription);

    // setTimeout(() => {
    //   // Unsubscribes BOTH subscription and childSubscription
    //   subscription.unsubscribe();
    //   // childSubscription.unsubscribe();
    // }, 1000);

    // debounce
    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(debounceTime(1000));
    // result.subscribe((x) => console.log(x));

    //tap
    console.log('tap');
    of(Math.random())
      .pipe(
        tap(console.log),
        map((n) => (n > 0.5 ? 'big' : 'small'))
      )
      .subscribe(console.log);

    const source = of(1, 2, 3, 4, 5);

    source
      .pipe(
        tap((n) => {
          if (n > 3) {
            throw new TypeError(`Value ${n} is greater than 3`);
          }
        })
      )
      .subscribe({
        next: console.log,
        error: (err) => console.log('error:', err.message),
      });

    source.subscribe({
      next: console.log,
      error: (err) => console.log('error:', err.message),
    });

    source.subscribe((data) => (this.dataX = data));

    console.log(typeof this.dataArray2, typeof this.dataArray);

    source.pipe(map((n) => n * 2)).subscribe((data) => {
      this.dataX = data;
      this.dataArray.push(data);
    });

    console.log('dataX', this.dataX, this.dataArray);
  }
}
