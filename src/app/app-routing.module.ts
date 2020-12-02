import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubendComponent } from './subend/subend.component'

const routes: Routes = [
  { path: 'subend', component: SubendComponent, pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
