import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateComponent } from './pages/create/create.component';
import { UpdateComponent } from './pages/update/update.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Directives
import { HighlightDirective } from './directives/highlight.directive';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';

// Components
import { CommunicationsComponent } from './pages/communications/communications.component';
import { PatientFormComponent } from './pages/patients/patient-form/patient-form.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { PatientsComponent } from './pages/patients/patients.component';
import { ParseJsonPipe } from './pipes/parse-json.pipe';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { CommunicationsFormComponent } from './pages/communications/communications-form/communications-form.component';
import { CustomTableComponent } from './shared/components/custom-table/custom-table.component';
import { ConfirmComponent } from './shared/components/confirm/confirm.component';
import { EconomicalCommunicationsComponent } from './pages/economical-communications/economical-communications.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    HighlightDirective,
    CommunicationsComponent,
    PatientFormComponent,
    PatientsComponent,
    ParseJsonPipe,
    CommunicationsFormComponent,
    CustomTableComponent,
    ConfirmComponent,
    EconomicalCommunicationsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
