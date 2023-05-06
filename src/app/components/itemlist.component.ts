import { Component, EventEmitter, Output } from '@angular/core';
import {  INVENTORIES, ItemList } from '../model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent {

items : ItemList[] = INVENTORIES;

@Output() 
increaseQuantity = new EventEmitter<ItemList>();
// function to take in the item from html and bind it to newItemEvent for output
// emits the value to the pipe and send it up to parent
addItem(item: ItemList) {
  this.increaseQuantity.emit(item);
}

@Output() 
reduceQuantity = new EventEmitter<ItemList>();
reduceItem(item: ItemList) {
    this.reduceQuantity.emit(item);
  }
}
