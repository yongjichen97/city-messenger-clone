import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = 'http://localhost:3000/api/messages'; // Replace with your Rails API URL

  constructor(private http: HttpClient) {}

  // Method to get all messages
  getAllMessages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Method to create a new message
  createMessage(message: any): Observable<any> {
    const messageWithTimestamp: Message = { ...message, timestamp: new Date().toISOString(), session_id: document.cookie };
    console.log("creating...")
    console.log(messageWithTimestamp)
    return this.http.post<Message>(this.apiUrl, messageWithTimestamp);
  }

  // Method to delete a message by ID
  deleteMessage(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }

  getMessagesBySessionId(sessionId: string) {
    return this.http.get<Message[]>(`${this.apiUrl}/by_session/${sessionId}`);
  }

}
