// #docplaster
//#docregion
import {Component, Injector}  from '@angular/core';

import {Car, Engine, Tires}   from './car/car';
import {HeroService}          from './heroes/hero.service';
import {heroServiceProvider}  from './heroes/hero.service.provider';
import {Logger}               from './logger.service';

//#docregion injector
@Component({
  selector: 'my-injectors',
  template: `
  <h2>Other Injections</h2>
  <div id="car">{{car.drive()}}</div>
  <div id="hero">{{hero.name}}</div>
  <div id="rodent">{{rodent}}</div>
  `,
  providers: [Car, Engine, Tires,
              heroServiceProvider, Logger]
})
export class InjectorComponent {
  constructor(private _injector: Injector) { }

  car:Car = this._injector.get(Car);

  //#docregion get-hero-service
  heroService:HeroService = this._injector.get(HeroService);
  //#enddocregion get-hero-service
  hero = this.heroService.getHeroes()[0];

  get rodent() {
    let rous = this._injector.get(ROUS, null);
    if (rous) {
      throw new Error('Aaaargh!')
    }
    return "R.O.U.S.'s? I don't think they exist!";
  }
}
//#enddocregion injector

/**
 * R.O.U.S. - Rodents Of Unusual Size
 * // https://www.youtube.com/watch?v=BOv5ZjAOpC8
 */
class ROUS { }