import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todocomp',
  templateUrl: './todocomp.component.html',
  styleUrls: ['./todocomp.component.css']
})
export class TodocompComponent implements OnInit {

  constructor(private api:ApiService) {
    api.viewTodo().subscribe(
      (response)=>{this.data=response}
    )
   }

  ngOnInit(): void {
  }
  data:any=[]


















  

}
