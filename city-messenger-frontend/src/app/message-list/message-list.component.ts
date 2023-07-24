import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message-create/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: any[] = [];
  sessionId: string = document.cookie;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.loadMessages();
    // this.loadMessagesBySessionId();
  }

  loadMessages() {
    this.messageService.getAllMessages().subscribe(
      (messages) => {
        let filterBySessionId = messages.filter(x => x.session_id == document.cookie);
        filterBySessionId.forEach(x => x.readable = new Date(x.timestamp).toLocaleString());
        console.log(filterBySessionId)
        this.messages = filterBySessionId.reverse();
        console.log("loading filtered...")
        console.log(messages)
      },
      (error) => {
        console.error('Error fetching messages:', error);
      }
    );
  }
  
  loadAllMessages() {
    this.messageService.getAllMessages().subscribe(
      (messages) => {
        messages.forEach(x => x.readable = new Date(x.timestamp).toLocaleString());
        this.messages = messages.reverse();
        console.log("loading all messages...")
        console.log(messages)
      },
      (error) => {
        console.error('Error fetching messages:', error);
      }
    );
  }


  loadMessagesBySessionId() {
    const sessionId = document.cookie;
    this.messageService.getMessagesBySessionId(sessionId).subscribe(
      (messages) => {
        this.messages = messages;
      },
      (error) => {
        // Handle error
      }
    );
  }

  displaySessionId() {
    return document.cookie;
  }

}
