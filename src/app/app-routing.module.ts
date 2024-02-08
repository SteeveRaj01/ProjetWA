import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EssaieCompComponent } from './components/essaie-comp/essaie-comp.component';

const routes: Routes = [
  { path: '', redirectTo: 'essaicomp', pathMatch: 'full' },
  { path: 'essaicomp', component: EssaieCompComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
