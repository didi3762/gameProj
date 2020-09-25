import { Component, ElementRef, AfterViewInit, ViewChild, HostListener, AfterViewChecked, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { GameService } from './services/game.service';
import io from "socket.io-client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {

  
  @ViewChild('game') public gameCanvas: ElementRef;
     
    //  private context: any;
    // private socket:any;

    @ViewChild('canvas') public canvas: ElementRef;
    subscription: any;
    showLoader = true;

    

    
    
    constructor(
    private appService: AppService,
    private gameService: GameService
    ) {}

    // @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    //   this.appService.movePlayer(event, 'keydown');
    //   }
       
      @HostListener('document:keyup', ['$event']) onKeyupHandler(event: KeyboardEvent) {
      this.appService.movePlayer(event, 'keyup');
      }

      public ngOnInit() {
        // this.socket = io("http://localhost:3000");
    }
    
    public ngAfterViewInit() {
      // this.context = this.gameCanvas.nativeElement.getContext("2d");
      // this.socket.on("position", data =>{
      //     this.context.clearRect(0,0, this.gameCanvas.nativeElement.width, this.gameCanvas.nativeElement.height);
      //     this.context.fillRect(data.x,data.y, 20, 20);
      // })
      // setTimeout(() => {
      //   const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
      //   this.appService.createPlayGround(canvasEl);
      //   this.subscription = this.appService.getImageLoadEmitter()
      //   .subscribe((item) => {
      //   this.showLoader = false;
      //   this.gameService.startGameLoop();
      // }, 1000);
    
    
    // });
    }

    // public move(direction:string){
    //   this.socket.emit("move",direction);
    // }



    
}
