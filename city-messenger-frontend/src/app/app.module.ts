import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import the FormsModule
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageCreateComponent } from './message-create/message-create.component';

@NgModule({
  declarations: [AppComponent, MessageListComponent, MessageCreateComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule, NgbModule], // Add FormsModule to imports
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
