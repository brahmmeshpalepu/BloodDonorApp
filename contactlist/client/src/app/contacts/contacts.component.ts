import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../contact';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers:[ContactService]
})
export class ContactsComponent implements OnInit {
  contacts:Contact[];
  contact:Contact;
  first_name:String;
  last_name:String;
  phone:String;
  public loading:boolean = false;

  constructor(private contactService:ContactService) { }

  ngOnInit() {
    this.getContacts();
     }

     getContacts(){
      //  debugger;
       this.loading = true;
      this.contactService.getContats().subscribe(contacts => this.contacts = contacts);
      this.loading = false;
     }

  

  //add contact
  addContact(){
    this.loading = true;
    const newContact = {
      first_name:this.first_name,
      last_name:this.last_name,
      phone:this.phone
    }
    this.contactService.addContact(newContact).subscribe(contact =>{
      
      this.contacts.push(contact);
      this.getContacts();
    });
    
  }

  //deletecontact
  deleteContact(id:any){
    this.loading = true;
    var contacts = this.contacts;
    this.contactService.deleteContact(id).subscribe(data => {
      if(data.m == 1){
        for(let i = 0;i <=contacts.length;i++){
          if(contacts[i]._id == id){
            contacts.splice(i,1);
          }
        }
        this.getContacts();
      }
    });
  }

  // resetContactForm(){

  // }
}
