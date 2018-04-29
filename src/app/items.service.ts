import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


export class Item {
  body: string;
  userId: string;
}


@Injectable()
export class ItemService {

  items   = null;
  userId: string;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
  }


  // Return an observable list with optional query
  // You will usually call this from OnInit in a component
  getItemsList() {
    if (!this.userId) return;
    this.items = this.db.list(`items/`).valueChanges();
    return this.items
  }


  // Create a brand new item
  createItem(item: Item)  {
    item.userId = this.userId
    this.items.push(item)
  }

}