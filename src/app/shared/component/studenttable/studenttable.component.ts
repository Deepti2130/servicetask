import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { Istd } from '../../model/std';

@Component({
  selector: 'app-studenttable',
  templateUrl: './studenttable.component.html',
  styleUrls: ['./studenttable.component.scss']
})
export class StudenttableComponent implements OnInit {
stdArr !: Array<Istd>
  constructor(
    private _stdservice:StudentService
  ) { }

  ngOnInit(): void {
    this.stdArr=this._stdservice.fetchstddata()
  }

  onremovestd(id:string){
 let getConfirm:boolean = confirm(`Are you sure. you want to remove this student?`);
 if(getConfirm){
 this._stdservice.removestdData(id)
 }
  }

}
