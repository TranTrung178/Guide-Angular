import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemsSubject = new BehaviorSubject<string[]>([]);
  items$: Observable<string[]> = this.itemsSubject.asObservable();

  constructor() { }

  addItem(item: string) {
    const currentItems = this.itemsSubject.value;
    this.itemsSubject.next([...currentItems, item]);
  }

  getItemCount(): Observable<number> {
    return this.items$.pipe(
      map(items => items.length)
    );
  }
  clearItems() {
    this.itemsSubject.next([]); // Reset the items list to empty
  }
}
