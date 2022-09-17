import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  
  constructor(private http : HttpClient) { }

  postTicket(data: any){
    return this.http.post<any>("http://localhost:3tickets",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getTicket(){
    return this.http.get<any>("http://localhost:3000/tickets")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateTicket(data: any,id:number){
    return this.http.put<any>("http://localhost:3000/tickets/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteTicket(id:number){
    return this.http.delete<any>("http://localhost:3000/tickets/"+id) 
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
