import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // properties


  // constructor
  constructor(private http:HttpClient) { }


  // user defined functions

  // allContacts - to get the contact data from api
  allcontacts(){

    // api call to get the all contact  
    return this.http.get('http://localhost:3000/contacts')

  }

  // api to get a particular conntact
  viewContact(contactId:string){
    return this.http.get('http://localhost:3000/contacts/'+contactId)

  }

  // api call to get a particular contact groups information
  viewContactGroupname(groupId:string){
  return this.http.get('http://localhost:3000/groups/'+groupId)
  }

  // api call hold to get all groups
allGroups(){
  return this.http.get('http://localhost:3000/groups')
}

// api call toa add new ontact details to url

addContact(contact:any){
return this.http.post('http://localhost:3000/contacts',contact)

}

// api cal to delete contact
deleteContact(contactId:any){
  return this.http.delete('http://localhost:3000/contacts/'+contactId)
}

// api call for existing contact
updateContact(contactId:String,contactBody:any){
  return this.http.put('http://localhost:3000/contacts/'+contactId,contactBody) 
}

}
