import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import{Contact} from './contact';
import 'rxjs/Rx';
//Property 'map' does not exist on type 'Observable<Response>' Error For npm install --save rxjs-compat@6
@Injectable()
  
export class ContactService { 

  constructor(private http: Http) {  }

    //Retriving contacts
    getContats(){
      return this.http.get('http://localhost:3000/api/contacts').map(res =>res.json());
    }
  
    //Add contact 

    addContact(newContact){
      var headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.http.post('http://localhost:3000/api/contact',newContact,{headers:headers}).map(res =>res.json()); 
    }

    //Delete contacts

    deleteContact(id){

      return this.http.delete('http://localhost:3000/api/contact/'+id).map(res =>res.json());
    }
}
