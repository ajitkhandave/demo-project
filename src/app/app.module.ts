import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { AppRoutingModule }   from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { OverviewComponent } from './overview/overview.component';
import { PersonComponent } from './person/person.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContentComponent,
    OverviewComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
   AppRoutingModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
