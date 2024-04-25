import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layout/auth-admin-layout/auth-admin-layout.component';
import { StagiaireLayoutComponent } from './layout/stagiaire-layout/stagiaire-layout.component';
import { AssistantLayoutComponent } from './layout/assistant-layout/assistant-layout.component';
import { EncadrantLayoutComponent } from './layout/encadrant-layout/encadrant-layout.component';
import { RegisterLayoutComponent } from './layout/register-layout/register-layout.component';
import { AcceuilstagiairesLayoutComponent } from './layout/acceuilstagiaires-layout/acceuilstagiaires-layout.component';
import { FormulaireLayoutComponent } from './layout/formulaire-layout/formulaire-layout.component';

const routes: Routes = [
  



{path:'stagiaires',component:StagiaireLayoutComponent,children:[
  {path:'',loadChildren:()=>import('./views/stagiaires/pagedesuivi/pagedesuivi.module').then(m=>m.PagedesuiviModule)},
  {path:'pagedesuivi',loadChildren:()=>import('./views/stagiaires/pagedesuivi/pagedesuivi.module').then(m=>m.PagedesuiviModule)},
  {path:'tachesnonvalides',loadChildren:()=>import('./views/stagiaires/tachesnonvalides/tachesnonvalides.module').then(m=>m.TachesnonvalidesModule)},

  {path:'rapport',loadChildren:()=>import('./views/stagiaires/rapport/rapport.module').then(m=>m.RapportModule)},
  {path:'attestation',loadChildren:()=>import('./views/stagiaires/attestation/attestation.module').then(m=>m.AttestationModule)},

]},
{path:'assistants',component:AssistantLayoutComponent,children:[
  {path:'',loadChildren:()=>import('./views/assistants/listestagiairesacceptees/listestagiairesacceptees.module').then(m=>m.ListestagiairesaccepteesModule)},
  {path:'listestagiairesacceptees',loadChildren:()=>import('./views/assistants/listestagiairesacceptees/listestagiairesacceptees.module').then(m=>m.ListestagiairesaccepteesModule)},
  {path:'historiquedesujet',loadChildren:()=>import('./views/assistants/historiquedesujet/historiquedesujet.module').then(m=>m.HistoriquedesujetModule)},
  {path:'historiquedestagiaires',loadChildren:()=>import('./views/assistants/historiquedestagiaires/historiquedestagiaires.module').then(m=>m.HistoriquedestagiairesModule)},
  {path:'sujetencours',loadChildren:()=>import('./views/assistants/sujetencours/sujetencours.module').then(m=>m.SujetencoursModule)},
  {path:'listeattestation',loadChildren:()=>import('./views/assistants/listeattestation/listeattestation.module').then(m=>m.ListeattestationModule)},

]},
{path:'encadrants',component:EncadrantLayoutComponent,children:[
  {path:'',loadChildren:()=>import('./views/encadrants/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:'dashboard',loadChildren:()=>import('./views/encadrants/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:'listesstagiaires',loadChildren:()=>import('./views/encadrants/listesstagiaires/listesstagiaires.module').then(m=>m.ListesstagiairesModule)},
  {path:'historiquessujet',loadChildren:()=>import('./views/encadrants/historiquessujet/historiquessujet.module').then(m=>m.HistoriquessujetModule)},
  {path:'pagedesuivi',loadChildren:()=>import('./views/encadrants/pagedesuivi/pagedesuivi.module').then(m=>m.PagedesuiviModule)},

]},



{path:'admin',component:AdminLayoutComponent,children:[
{path:'',loadChildren:()=>import('./views/admin/gestiondeprofile/gestiondeprofile.module').then(m=>m.GestiondeprofileModule)},
{path:'gestiondeprofile', loadChildren: ()=>import('./views/admin/gestiondeprofile/gestiondeprofile.module').then(m=>m.GestiondeprofileModule)},
{path:'administrateur', loadChildren: ()=>import('./views/admin/administrateur/administrateur.module').then(m=>m.AdministrateurModule)},
{path:'ajouter',loadChildren:()=>import('./views/admin/ajouter/ajouter.module').then(m=>m.AjouterModule)},
{path:'listesencadrants',loadChildren:()=>import('./views/admin/listesencadrants/listesencadrants.module').then(m=>m.ListesencadrantsModule)},
{path:'stagesexpires', loadChildren: ()=>import('./views/admin/stagesexpires/stagesexpires.module').then(m=>m.StagesexpiresModule)},
{path:'calendrier',loadChildren:()=>import('./views/admin/calendrier/calendrier.module').then(m=>m.CalendrierModule)},
{path:'sujetencours', loadChildren: ()=>import('./views/admin/sujetencours/sujetencours.module').then(m=>m.SujetencoursModule)},

]},

{path:'',component:AuthAdminLayoutComponent},
{path:'register',component:RegisterLayoutComponent},
{path:'accueilstagiaires',component:AcceuilstagiairesLayoutComponent},
{path:'formulaire',component:FormulaireLayoutComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
