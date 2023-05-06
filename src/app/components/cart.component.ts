import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { ItemList } from '../model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  
  // declare input pipe to receive from parent app.component
  @Input() cartInfoFromParent: ItemList[] = [];

  // decalre output pipe to send item to be deleted to parent for logic processing
  @Output() newItemRemovedEvent = new EventEmitter<ItemList>();
  RemoveFromCart(value: ItemList) {
    this.newItemRemovedEvent.emit(value);
  }

  // @Output()
  // onDelete = new Subject<number>()
  // deleteItem(i: number) {
  //   console.info(`To delete: ${i}`)
  //   this.onDelete.next(i);
  // }


}
