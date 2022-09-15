import { Component, OnInit } from '@angular/core';
import { faFilter, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {


  ticketForm: FormGroup


  faFilter = faFilter;
  faPlus = faPlus;

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
      formControlName:'assign'
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

  constructor(){
    this.ticketForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl(''),
      desc: new FormControl(''),
      assign: new FormControl(''),
      status: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  raise() {
    var id = JSON.stringify(this.ticketForm.value.id)
    var title = JSON.stringify(this.ticketForm.value.title)
    var desc = JSON.stringify(this.ticketForm.value.desc)
    var assign = JSON.stringify(this.ticketForm.value.assign)
    var status = JSON.stringify(this.ticketForm.value.status)

    console.log(id + " " + title + " " + desc + " " + assign + " " + status);

    this.ticketForm.reset()

  }

}
