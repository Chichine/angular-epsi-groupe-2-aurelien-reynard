import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import { ProfileComponent } from './components/profile/profile.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UserPartsModule} from '../shared/user-parts/user-parts.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    UserPartsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule
  ]
})
export class AdminModule { }
