import { Component } from '@angular/core';
import { ItemService} from 'app/items.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-salesrep',
  templateUrl: './salesrep.component.html',
  styleUrls: ['./salesrep.component.scss']
})
export class SalesrepComponent  {
posts$;
    form: FormGroup;
    constructor(private fb: FormBuilder,  private item:ItemService) {
      this.createForm();
this.posts$=this.item.getItemsList();
    }
    createForm() {
      this.form = this.fb.group({
        post: ['', Validators.required]
       
      });
    }
    onSubmit() {
      const {post} = this.form.value;        
      
    this.item.createItem(post);
      this.form.reset();
    }
  }
