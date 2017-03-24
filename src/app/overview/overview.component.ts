import { Component, OnInit } from '@angular/core';
import {Message}  from './overview.model';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
    public fOvrName: string;
    public fOvrLname: string;
    public fOvrMail: string;
    public fOvrNumber: string;

// Declaring Javascript Object Literal
    public userData: any = {};

   public ovrName: string;
   public ovrLname: string;
   public ovrMail: string;
   public ovrNumber: string;

  public allMessages:any;

  messages:Message[]=[];
  constructor(private messageService: MessageService){
  //declaring empty userData object
  this.userData.ovrName = '';
  this.userData.ovrLname = '';
  this.userData.ovrMail = '';
  this.userData.ovrNumber = '';
  }

  onAddMassage(){
    const rnd = Math.ceil(Math.random()*100);
    const message = new Message(rnd + ' is an Awesome number');
    this.messages.push(message);
    this.messageService.saveMessage(message)
      .subscribe(
          () => console.log('Success'),
          error => console.log('error')
      );
  }
  ngOnInit(){
        this.messageService.getMessages()
            .subscribe(resMessageData => this.allMessages = resMessageData);
    }

  changeMe(key, val) {
    this.userData[key] = val;
  }

    createEntry(){
    console.log(this.userData)
      this.messageService.saveInfo(this.userData)
             .subscribe(
                        () => console.log('Success'),
                      error => console.error('error')
                 );
    }
}
