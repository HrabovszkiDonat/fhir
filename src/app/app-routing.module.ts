import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationsComponent } from './pages/communications/communications.component';
import { CreateComponent } from './pages/create/create.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { EconomicalCommunicationsComponent } from './pages/economical-communications/economical-communications.component';
import { PatientsComponent } from './pages/patients/patients.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'communications',
    pathMatch: 'full',
  },
  {
    path: 'communications',
    component: CommunicationsComponent,
  },
  {
    path: 'economical-communications',
    component: EconomicalCommunicationsComponent,
  },

  { path: 'create-communication', component: CreateComponent },
  {
    path: 'delete',
    component: DeleteComponent,
  },
  {
    path: 'patients',
    component: PatientsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
