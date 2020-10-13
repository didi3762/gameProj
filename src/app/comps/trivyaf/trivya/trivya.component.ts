import { Component, OnInit, Input } from '@angular/core';
import { TrivyaSvcService } from 'src/app/services/trivya-svc.service';

@Component({
  selector: 'board',
  templateUrl: './trivya.component.html',
  styleUrls: ['./trivya.component.css']
})
export class TrivyaComponent implements OnInit {

  @Input() wordRand:string = ''
  @Input() arrLange:number 

  constructor(public wordsSVC:TrivyaSvcService) { 
   
  }

  ngOnInit(): void {
  }

}
