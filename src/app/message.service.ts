import { Injectable } from '@angular/core';
//import {Message} from './content/message.model';
import {Message} from './overview/overview.model';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MessageService {
    constructor(private http: Http){}
saveMessage(message:Message){
      const body = JSON.stringify(message);
      const headers = new Headers({'content-Type': 'application/json'});
      return this.http.post('http://localhost:3000/api/message', body, {headers: headers});
    }
  getMessages(){
        return this.http.get('/api/messages')
            .map((response:Response) => response.json());
  }
    //saveInfo(message:Message, )
    saveInfo(userData): Observable<any>{
      console.log(userData);
      const body = userData;

      const headers = new Headers({'content-Type': 'application/json'});
      return this.http.post('http://localhost:3000/api/overview', body, {headers: headers});
    }

}
