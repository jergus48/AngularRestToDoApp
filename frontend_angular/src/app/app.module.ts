import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './Lists/lists.component';
import { TasksComponent } from './Tasks/tasks.component';
import { DailyComponent } from './Daily/daily.component';
import { HomeComponent } from './Home/home.component';
import { RoutingTable } from './routes';
import { TimeWithoutSecondsPipe } from './Daily/withoutseconds.pipe';
@NgModule({
  declarations: [
    AppComponent, ListComponent, TasksComponent, DailyComponent, TimeWithoutSecondsPipe, HomeComponent
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    RouterModule.forRoot(RoutingTable),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
