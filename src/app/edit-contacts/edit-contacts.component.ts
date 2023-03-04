import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MyContact } from 'src/models/mycontact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-contacts',
  templateUrl: './edit-contacts.component.html',
  styleUrls: ['./edit-contacts.component.css']
})
export class EditContactsComponent implements OnInit{

  contactId:string =''
  contact:MyContact ={}
  allGroups:any=[]
  constructor(private editContactActivatedRoute:ActivatedRoute,private api:ApiService,private editcontactRouter:Router){


  }

  ngOnInit(): void {
    this.editContactActivatedRoute.params
    .subscribe((data:any)=>{
     this.contactId =data.id
     console.log(this.contactId);
     
    })
    // to get the details of a perticular contact
    this.api.viewContact(this.contactId)
    .subscribe((result:any)=>{
      this.contact=result
      console.log(this.contact);

    })
    // to get all contact from api
    this.api.allGroups()
    .subscribe((groups:any)=>{

    this.allGroups=groups     
    })
  }
  editContact(contact:MyContact){
    this.api.updateContact(this.contactId,contact)
    .subscribe((result:any)=>{
      alert('contact successfully updated...')
      // redirect to the allcontact page
      this.editcontactRouter.navigateByUrl('')
    })
  }

}
