import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotdogComponent } from './components/hotdog/hotdog.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const appRoutes: Routes = [
  {path: '', component: HotdogComponent},
  {path: 'about', component: ContactsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HotdogComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
