import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { EditContactsComponent } from './edit-contacts/edit-contacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';

const routes: Routes = [
  {
    path:'', component:AllContactsComponent
  },
  {
  path:'add-contacts', component:AddContactsComponent
  },
  {
    path:'edit-contacts/:id', component:EditContactsComponent
  },
  {
    path:'view-contacts/:id', component:ViewContactsComponent
  },
  {
    path:'**', component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
