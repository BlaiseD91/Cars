import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url="http://localhost:3000/autok/";
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url);
  }

  onDelete(auto:any){
    return this.http.delete(this.url+auto.id);
  }
  onUpdate(auto:any){
    return this.http.put(this.url+auto.id, auto);
  }
  
  onCreate(auto:any){
    return this.http.post(this.url,auto);
  }
}
