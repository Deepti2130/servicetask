import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { UuidService } from '../../service/uuid.service';
import { Istd } from '../../model/std';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-stdform',
  templateUrl: './stdform.component.html',
  styleUrls: ['./stdform.component.scss']
})
export class StdformComponent implements OnInit {

stdArr ! : Array<Istd>
MaxFlag : boolean = false;
@ViewChild('stdForm') stdForm! : NgForm
  constructor(
    private _stdservice : StudentService,
    private _uuidservice: UuidService
  ) { }

  ngOnInit(): void {
    this.stdArr=this._stdservice.fetchstddata()
  }


  onstdAdd(){
    console.log(this.stdForm.value)
    if(this.stdForm.valid){
      let stdobj:Istd= {...this.stdForm.value,id:this._uuidservice.generateUuid()};
      console.log(stdobj)
      this._stdservice.addNewstd(stdobj)
      this.stdForm.reset()
  }
}
  onfnamekeyup(eve:Event){
    let vallength =(eve.target as HTMLInputElement).value.length
    if(vallength >= 12){
     this.MaxFlag = true
    }else{
     this.MaxFlag = false
    }

  }


   }





