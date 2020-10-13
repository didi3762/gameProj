import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sudoko-main',
  templateUrl: './sudoko-main.component.html',
  styleUrls: ['./sudoko-main.component.css']
})
export class SudokoMainComponent implements OnInit {

  sudoku_long:any[] = [1,2,3,4,5,6,7,8,9]
  constructor() { }

  ngOnInit(): void {
    this.sudokoRand()
  }

  sudokoRand(){
    for (let i = 0; i < this.sudoku_long.length; i++) {
      let rand = Math.floor(Math.random() * 9);
      if(rand===0){ 
        this.sudoku_long[i]= " ";
      }else{
        this.sudoku_long[i]= rand;
      }
      
    };
  }

}
