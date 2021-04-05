import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import {UserService} from './../../services/user.service'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit{
  userDetails:any;
  message: any;
  messages: string[] = [];
  username: string = '';
  usernameIn: any;
  usernameValidatation: boolean = false;

  constructor(private chatService: ChatService,private userService:UserService) {}

  sendMessage() {
    if (this.message != '' && this.username != '') {
      this.chatService.sendMessage(`${this.username} : ${this.message}`);
      this.message = '';
    } else {
      this.validatorAlert();
    }
  }
  validatorAlert() {
    this.usernameValidatation = true;
  }



  getUsername(username: string = '') {
    if (username != '') this.username = username;
  }

  ngOnInit():void {
    this.userService.getUserProfile().subscribe((data:any)=>{
      console.log(data)
      this.userDetails=data.user
    })
    console.log('asdfa');

    this.chatService.getMessages().subscribe((message: string) => {
      this.messages.push(message);
    });
  }

}
