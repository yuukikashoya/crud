import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import {MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {


  userForm !: FormGroup;

  constructor(private formBuilder : FormBuilder , private api : ApiService, private dialogRef : MatDialogRef<DialogComponent> ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      lastName : ['',Validators.required],
      firstName : ['',Validators.required],
      middleName : ['',Validators.required],
      type : ['',Validators.required],
      birthday : ['',Validators.required],

    })
  }
  addUser(){
// console.log(this.userForm.value);
    if(this.userForm.valid){
      this.api.postUser(this.userForm.value)
      .subscribe({
        next:(res)=>{
          alert("user added")
          this.userForm.reset();
          this.dialogRef.close();
        },
        error:()=>{
          alert("error while adding the user")

        }
      })
    }
  }

}
