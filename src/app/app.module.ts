import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuComponent } from './menu/menu.component';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatChipsModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatInputModule
} from '@angular/material';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SettingsComponent } from './settings/settings.component';
import { FeedComponent } from './feed/feed.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { HelpPageComponent } from './help-page/help-page.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageDetailsComponent } from './message-details/message-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuComponent,
    UserProfileComponent,
    SettingsComponent,
    FeedComponent,
    HelpPageComponent,
    MessagesComponent,
    MessageDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatExpansionModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
