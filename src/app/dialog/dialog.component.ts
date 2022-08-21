import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {


  userForm !: FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      lastName : ['',Validators.required],
      firstName : ['',Validators.required],
      middleName : ['',Validators.required],
      tyoe : ['',Validators.required],
      birthday : ['',Validators.required],

    })
  }
  addUser(){
console.log(this.userForm.value);

  }

}
