import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PersonalComponent} from './personal/personal.component';
import {WorkComponent} from './work/work.component';
import {WorkflowGuardService} from './workflow/workflow-guard.service';
import {ResultatComponent} from './resultat/resultat.component';
import {AddressComponent} from './address/address.component';


const routes: Routes = [
  // 1st Route
  { path: 'personal',  component: PersonalComponent },
  // 2nd Route
  { path: 'work',  component: WorkComponent, canActivate: [WorkflowGuardService] },
  // 3rd Route
  { path: 'address',  component: AddressComponent, canActivate: [WorkflowGuardService] },
  // 4th Route
  { path: 'result',  component: ResultatComponent, canActivate: [WorkflowGuardService] },
  // 5th Route
  { path: '',   redirectTo: '/personal', pathMatch: 'full' },
  // 6th Route
  { path: '**', component: PersonalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
