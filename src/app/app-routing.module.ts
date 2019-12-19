import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SettingsComponent } from './settings/settings.component';
import { FeedComponent } from './feed/feed.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageDetailsComponent } from './message-details/message-details.component';
import { LogOnComponent } from './log-on/log-on.component';
import {NeedAuthGuard} from './auth.guard';


const routes: Routes = [
  {path: '', redirectTo: '/log-on', pathMatch: 'full'},
  {path: 'log-on', component: LogOnComponent},
  {path: 'home-page', component: HomePageComponent, canActivate: [NeedAuthGuard] },
  {path: 'user-profile', component: UserProfileComponent, canActivate: [NeedAuthGuard] },
  {path: 'settings', component: SettingsComponent, canActivate: [NeedAuthGuard] },
  {path: 'feed', component: FeedComponent, canActivate: [NeedAuthGuard] },
  {path: 'help-page', component: HelpPageComponent, canActivate: [NeedAuthGuard] },
  {path: 'messages', component: MessagesComponent, canActivate: [NeedAuthGuard] },
  {path: 'message-details', component: MessageDetailsComponent, canActivate: [NeedAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
