import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp3',
  templateUrl: './cmp3.component.html',
  styleUrls: ['./cmp3.component.css']
})
export class Cmp3Component implements OnInit {
  n:number=200;
  array:number[];
  constructor() { }
  change(this: any){
    document.getElementById("clic").id="unanswered";
  } 
  
  ngOnInit() {
    this.array=[];
    for(let i=0;i<this.n;i++){
      this.array[i]=i+1;
    } 
   
   
  } 
   
  
 
}
