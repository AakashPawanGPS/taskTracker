import { Component, OnInit } from '@angular/core';
import { faFilter, faL, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, FormBuilder, Form } from '@angular/forms';
import { TicketsModel } from './tickets.model';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {


  ticketForm !: FormGroup;
  ticketData !: any;
  ticketModelObj: TicketsModel = new TicketsModel();
  showAdd!: boolean;
  showUpdate!: boolean;

  faFilter = faFilter;
  faPlus = faPlus;



  constructor(private formBuilder: FormBuilder, private api: ApiserviceService) { }

  ngOnInit(): void {
    this.ticketForm = this.formBuilder.group({
      id: [''],
      title: [''],
      desc: [''],
      assign: [''],
      status: ['']
    })
    this.getTicketDetails();
  }

  postTicketDetails() {
    this.ticketModelObj.id = this.ticketForm.value.id;
    this.ticketModelObj.title = this.ticketForm.value.title;
    this.ticketModelObj.desc = this.ticketForm.value.desc;
    this.ticketModelObj.assign = this.ticketForm.value.assign;
    this.ticketModelObj.status = this.ticketForm.value.status;

    this.api.postTicket(this.ticketModelObj)
      .subscribe({
        next: (res) => {
          alert("Ticket Raised Successfully")
          this.ticketForm.reset()
          this.getTicketDetails()
        },
        error: (err) => console.log(err),
        complete: () => console.log('Completed')
      })
  }

  getTicketDetails() {
    this.api.getTicket()
      .subscribe({
        next: (res) => { this.ticketData = res }
      })
  }

  deleteTicketDetails(row: any) {
    this.api.deleteTicket(row.id)
      .subscribe({
        next: (res) => {
          alert("Ticket Resolved")
          this.getTicketDetails()
        }
      })
  }

  editTicketDetails(row:any){
    this.showAdd = false
    this.showUpdate = true
    this.ticketModelObj.id = row.id
    this.ticketForm.controls['id'].setValue(row.id)
    this.ticketForm.controls['title'].setValue(row.title)
    this.ticketForm.controls['desc'].setValue(row.desc)
    this.ticketForm.controls['assign'].setValue(row.assign)
    this.ticketForm.controls['status'].setValue(row.status)
  }

  updateTicketDetails(){
    this.ticketModelObj.id = this.ticketForm.value.id;
    this.ticketModelObj.title = this.ticketForm.value.title;
    this.ticketModelObj.desc = this.ticketForm.value.desc;
    this.ticketModelObj.assign = this.ticketForm.value.assign;
    this.ticketModelObj.status = this.ticketForm.value.status;

    this.api.updateTicket(this.ticketModelObj,this.ticketModelObj.id)
    .subscribe({
      next: (res)=>{
        alert("Ticket Updated Successfully")
        this.getTicketDetails()
      }
    })
  }

  clickRaiseTicket(){
    this.ticketForm.reset()
    this.showAdd = true
    this.showUpdate = false
  }


  json = [
    {
      id: 'id',
      name: 'emp_id',
      class: 'form-control form-box',
      type: 'text',
      label: 'ID',
      fcn: 'id',
      placeholder: 'Enter Your Employee ID',
      formControlName: 'id'
    },
    {
      id: 'title',
      name: 'title',
      class: 'form-control form-box',
      type: 'text',
      label: 'Title',
      fcn: 'title',
      placeholder: 'Ticket Title',
      formControlName: 'title'
    },
    {
      id: 'desc',
      name: 'desc',
      class: 'form-control form-box',
      type: 'text',
      label: 'Description',
      fcn: 'desc',
      placeholder: 'Short summary of your Issue',
      formControlName: 'desc'
    },
    {
      id: 'assign',
      name: 'assign',
      class: 'form-control form-box',
      type: 'text',
      label: 'Assigning To',
      fcn: 'assign',
      placeholder: 'Assigning To',
      formControlName: 'assign'
    },
    {
      id: 'status',
      name: 'status',
      class: 'form-control form-box',
      type: 'text',
      label: 'Status',
      fcn: 'status',
      placeholder: 'Status',
      formControlName: 'status'
    },
  ];
}
