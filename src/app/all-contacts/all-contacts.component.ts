import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {

// property : to hold all contacts from api

allContacts:any= []
searchKey:string=''


// AllContactsComponent property aane api

  constructor(private api:ApiService){

  }

  ngOnInit(): void {
   this.getAllContact()
  }
  // to get all contact
  getAllContact(){
     // api call to get all contacts
     this.api.allcontacts()
     .subscribe((result:any)=>{
       // result in all contacts array from api 
       console.log(result);
       this.allContacts = result
     })
  }

  // delete contact
  deleteContact(contactId:any){
    this.api.deleteContact(contactId)
    .subscribe((data:any)=>{
      // window.location.reload()
      this.getAllContact()
    })
  }
}
