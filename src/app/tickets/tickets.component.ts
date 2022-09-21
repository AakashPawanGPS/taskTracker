import { Component, OnInit } from '@angular/core';
import { faFilter, faTrash, faPlus, faEdit, faL, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, FormBuilder, Form, Validators } from '@angular/forms';
import { TicketsModel } from './tickets.model';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {


  // ticketForm !: FormGroup;
  ticketData !: any;
  ticketModelObj: TicketsModel = new TicketsModel();
  showAdd!: boolean;
  showUpdate!: boolean;

  public searchText: any = '';

  deleteTrigger: boolean = false;

  faFilter = faFilter;
  faPlus = faPlus;
  faEdit = faEdit
  faDelete = faTrash
  faSearch = faSearch

  constructor(private formBuilder: FormBuilder, private api: ApiserviceService) { }

  ngOnInit(): void {
    // this.ticketForm = this.formBuilder.group({
    //   idx: [''],
    //   id: [''],
    //   title: [''],
    //   desc: [''],
    //   assign: [''],
    //   status: ['']
    // })
    this.getTicketDetails();
  }

  ticketForm: FormGroup = new FormGroup({
    idx: new FormControl('', [Validators.required]),
    id: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required]),
    assign: new FormControl('', [Validators.required]),
    status: new FormControl('')
  })

  postTicketDetails() {
    this.ticketModelObj.idx = this.ticketForm.value.idx;
    this.ticketModelObj.id = this.ticketForm.value.id;
    this.ticketModelObj.title = this.ticketForm.value.title;
    this.ticketModelObj.desc = this.ticketForm.value.desc;
    this.ticketModelObj.assign = this.ticketForm.value.assign;
    this.ticketModelObj.status = this.ticketForm.value.status;

    this.api.postTicket(this.ticketModelObj)
      .subscribe({
        next: () => {
          this.getTicketDetails()
          alert("Ticket Raised Successfully")
          this.ticketForm.reset()
        },
        error: (err) => console.log(err),
        complete: () => console.log('Completed')
      })
  }

  getTicketDetails() {
    this.api.getTicket()
      .subscribe({
        next: (res) => {
          this.ticketData = res
          console.log(this.ticketData);

        }
      })
  }

  deleteTicketDetails(row: any) {
    this.deleteTrigger = true;
    if (confirm("Are you sure You Want to delete this Ticket?")) {
      this.api.deleteTicket(row.id)
        .subscribe({
          next: (res) => {
            alert("Ticket Resolved")
            this.getTicketDetails()
          }
        })
    }
    this.deleteTrigger = false
  }

  editTicketDetails(row: any) {
    console.log(this.ticketModelObj.id + " " + row.id);
    this.ticketModelObj.idx = row.idx
    this.ticketForm.controls['id'].setValue(row.id)
    this.ticketForm.controls['title'].setValue(row.title)
    this.ticketForm.controls['desc'].setValue(row.desc)
    this.ticketForm.controls['assign'].setValue(row.assign)
    this.ticketForm.controls['status'].setValue(row.status)
    this.showAdd = false
    this.showUpdate = true
    this.getTicketDetails()
  }

  updateTicketDetails() {
    this.ticketModelObj.id = this.ticketForm.value.id;
    this.ticketModelObj.title = this.ticketForm.value.title;
    this.ticketModelObj.desc = this.ticketForm.value.desc;
    this.ticketModelObj.assign = this.ticketForm.value.assign;
    this.ticketModelObj.status = this.ticketForm.value.status;

    this.api.updateTicket(this.ticketModelObj, this.ticketModelObj.id)
      .subscribe({
        next: (res) => {
          alert("Ticket Updated Successfully")
          this.getTicketDetails()
        }
      })
  }

  clickRaiseTicket() {
    this.showAdd = true
    this.showUpdate = false
    this.ticketForm.reset()
  }

  logout() {
    localStorage.removeItem('token')
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
      formControlName: 'id',
      msg:'* Required Field'
    },
    {
      id: 'title',
      name: 'title',
      class: 'form-control form-box',
      type: 'text',
      label: 'Title',
      fcn: 'title',
      placeholder: 'Ticket Title',
      formControlName: 'title',
      msg:'* Required Field'
    },
    {
      id: 'desc',
      name: 'desc',
      class: 'form-control form-box',
      type: 'text',
      label: 'Description',
      fcn: 'desc',
      placeholder: 'Short summary of your Issue',
      formControlName: 'desc',
      msg:'* Required Field'
    },
    {
      id: 'assign',
      name: 'assign',
      class: 'form-control form-box',
      type: 'text',
      label: 'Assigning To',
      fcn: 'assign',
      placeholder: 'Assigning To',
      formControlName: 'assign',
      msg:'* Required Field'
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
