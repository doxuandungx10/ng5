import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal1 = this.goals.asObservable();

  constructor() { }

  changeGoal(goals: string[]) {
    this.goals.next(goals);
  }
}
