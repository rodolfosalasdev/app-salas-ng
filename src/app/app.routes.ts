import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MessengerComponent } from './components/messenger/messenger.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'messenger', component: MessengerComponent, pathMatch: 'full' }
];
