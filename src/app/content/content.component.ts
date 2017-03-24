import { Component, OnInit } from '@angular/core';
import {Message}  from './message.model';
import {MessageService} from '../message.service';


@Component({
  selector: 'app-root',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [MessageService]
})
export class ContentComponent implements OnInit{
  public allMessages:any;
  messages:Message[]=[];
  constructor(private messageService: MessageService){}
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


}
