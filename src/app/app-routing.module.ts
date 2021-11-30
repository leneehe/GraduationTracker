import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraduationTrackerComponent } from './graduation-tracker/graduation-tracker.component'
const routes: Routes = [
  { path: '', component: GraduationTrackerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
