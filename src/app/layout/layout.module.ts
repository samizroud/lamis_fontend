import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { AuthAdminLayoutComponent } from './auth-admin-layout/auth-admin-layout.component';
import { StagiaireLayoutComponent } from './stagiaire-layout/stagiaire-layout.component';
import { AssistantLayoutComponent } from './assistant-layout/assistant-layout.component';
import { EncadrantLayoutComponent } from './encadrant-layout/encadrant-layout.component';
import { RegisterLayoutComponent } from './register-layout/register-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcceuilstagiairesLayoutComponent } from './acceuilstagiaires-layout/acceuilstagiaires-layout.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    
    AuthAdminLayoutComponent,
    StagiaireLayoutComponent,
    AssistantLayoutComponent,
    
    EncadrantLayoutComponent,
          RegisterLayoutComponent,
          AcceuilstagiairesLayoutComponent
       
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ]
})
export class LayoutModule { }
