import { Component, OnInit } from '@angular/core';
import { TrivyaSvcService } from 'src/app/services/trivya-svc.service';

@Component({
  selector: 'heder-trivya',
  templateUrl: './heder-trivya.component.html',
  styleUrls: ['./heder-trivya.component.css']
})
export class HederTrivyaComponent implements OnInit {

  wordEng:string = ""
  

  constructor(public wordsSV:TrivyaSvcService) {
     
   }

  ngOnInit(): void {
  }

}
