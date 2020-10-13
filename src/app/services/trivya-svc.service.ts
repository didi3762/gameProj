import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FulWord, Word } from '../interfacees/ful-word';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrivyaSvcService {

  public urlsJeson = {
    jsonA:"https://raw.githubusercontent.com/didi3762/ajax/master/ajax4.json",
  }

  constructor(private myHttp:HttpClient) { 

    console.log(this.wordsArr,this.randArr,this.HebWords);

    this.httpGet<FulWord>(this.urlsJeson.jsonA)
    .subscribe(result => {
      this.fullResponse = result
      this.words = this.fullResponse.words 
      this.HebWords = this.words[0].HebWords
      this.englishWords = this.words[0].englishWords
      this.wordsSum = this.fullResponse.persons[0].sumDoct
      this.rand()
      this.addRand(this.randArr)
      
    })


  }

  httpGet<T>(url:string) :Observable<T>{
    return this.myHttp.get<T>(url)
  }


  fullResponse:FulWord
  words:Word[]
  HebWords:string[] = []
  englishWords:string[] = []
  wordsArr:string[] = []
  wordHeb:string
  wordEng:string
  randArr:number[] = [1,2,3,4,5,6]
  wordsSum:number[]
  resTex:string
  sum:number
  

  rand(){
    for (let i = 0; i < this.randArr.length; i++) {
      let rand = Math.floor(Math.random() * Math.floor(40));
      this.randArr[i]= rand;
    }
    let rand4 = Math.floor(Math.random() * Math.floor(4));
    this.randArr[5] = rand4;
 }
 
  addRand(event){
    
    
    let engIndex = this.englishWords.indexOf(this.wordEng)
    if(this.wordEng==''||this.wordEng==null){
      console.log(this.sum);
      this.sum = 0
    }
    else if(event[6] == engIndex){
        this.sum++
        this.wordsSum[event[6]]++
        console.log(this.sum);
    }else{
      console.log(this.sum);
      this.sum--
    }
    this.wordEng = this.englishWords[event[0]]
    this.wordsArr[0] = this.HebWords[event[1]];
    this.wordsArr[1] = this.HebWords[event[2]];
    this.wordsArr[2] = this.HebWords[event[3]];
    this.wordsArr[3] = this.HebWords[event[4]];
    this.wordsArr[event[5]] = this.HebWords[event[0]]
    console.log(this.wordsSum);
    this.resTex = this.sum.toString()
  }
}
