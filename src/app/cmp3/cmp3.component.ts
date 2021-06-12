import { HtmlParser } from '@angular/compiler';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS } from '@angular/material';
import { Button } from 'selenium-webdriver';


@Component({
  selector: 'app-cmp3',
  templateUrl: './cmp3.component.html',
  styleUrls: ['./cmp3.component.css']
})
export class Cmp3Component implements OnInit {
  n:number=200;
  array:any[]; 
  n1:number;
  change1(n1:number){
    n1=2;
    console.log(n1);
    return n1;
  } 
  constructor() { }
  ngOnInit() {
    this.array=[];
    for(let i=0;i<this.n;i++){
      let c={
        id:i+1,
        val:1
      }
      this.array.push(c);
    }  
  } 
   
  
 
}
