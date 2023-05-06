import { Component } from '@angular/core';
import { INVENTORIES, ItemList } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedItems: ItemList[] = [];

  addItem(item: ItemList) {
    //when item is newly added, push. Otherwise, increase quantity as it is already in the cart (same view)
    if (this.selectedItems.includes(item))
      item.quantity++;
    else {
      item.quantity++
      this.selectedItems.push(item);
    }
  }

  reduceItem(item: ItemList) {
    //if quantity is more than 1, decrease quantity. If quantity == 0, remove item from cart
    if (item.quantity >= 1) {
      item.quantity--;
      if (item.quantity == 0) {
        var index: number;
        index = this.selectedItems.indexOf(item);
        this.selectedItems.splice(index, 1);
      }
    }
  }

  deleteItem(item: ItemList) {
    var index: number;
    index = this.selectedItems.indexOf(item);
    this.selectedItems.splice(index, 1);
  }

}
