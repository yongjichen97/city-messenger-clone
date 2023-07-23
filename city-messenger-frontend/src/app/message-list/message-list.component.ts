import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message-create/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: any[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    this.messageService.getAllMessages().subscribe(
      (messages) => {
        this.messages = messages;
        console.log("loading...")
        console.log(messages)
      },
      (error) => {
        console.error('Error fetching messages:', error);
      }
    );
  }
}
