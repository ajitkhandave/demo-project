import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { OverviewComponent } from './overview/overview.component';
import { PersonComponent } from './person/person.component';


const routes: Routes = [
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'login',  component: LoginComponent },
{ path: 'content', component: ContentComponent},
 { path: 'overview', component: OverviewComponent },
  { path: 'person', component: PersonComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
