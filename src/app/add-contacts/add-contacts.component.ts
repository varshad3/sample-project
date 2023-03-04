import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyContact } from 'src/models/mycontact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit {

groups:any=[]
contact:MyContact={}

  constructor(private api:ApiService,private addContactRouter:Router){
this.contact.groupId="choose a group"
  }

    ngOnInit(): void{
      this.api.allGroups()
      .subscribe((result:any)=>{
        console.log(result);
        this.groups=result
      })

    }
  

    // addcontct
    addContact(contact:any){
this.api.addContact(contact)
.subscribe((data:any)=>{
  alert('new contact added successfully')
  this.addContactRouter.navigateByUrl('')
})
    }
}
