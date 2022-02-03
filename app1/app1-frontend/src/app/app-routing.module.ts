import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { DetailComponent } from './component/user/detail/detail.component';
import { UserComponent } from './component/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full'  },
  { path: 'user', component: UserComponent },
  { path: 'user/detail/:_id', component: DetailComponent },
];


@NgModule({
  
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
