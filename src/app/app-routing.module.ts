import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SettingsComponent } from './settings/settings.component';
import { FeedComponent } from './feed/feed.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { MessagesComponent } from './messages/messages.component';


const routes: Routes = [
  {path: 'home-page', component: HomePageComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'feed', component: FeedComponent},
  {path: 'help-page', component: HelpPageComponent},
  {path: 'messages', component: MessagesComponent},
  {path: ' ', redirectTo: 'home-page', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
