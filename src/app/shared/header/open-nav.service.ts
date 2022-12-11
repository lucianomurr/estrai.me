import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenNavService {
  private sidenavSource$ = new BehaviorSubject<boolean>(false);
  sidenav$ = this.sidenavSource$.asObservable();

  updateData(data: boolean) {
    this.sidenavSource$.next(data);
  }
}
