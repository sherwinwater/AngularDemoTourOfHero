import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private logger: LoggerService) {  }

  getHeroes() {
    this.logger.log('Getting heroes ...');
  }
}
