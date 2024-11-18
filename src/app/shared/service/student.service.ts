import { Injectable } from '@angular/core';
import { Istd } from '../model/std';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  stdArr:Array<Istd> = [
    {
      fname:"Mahesh",
      lname:"Tipradi",
      email:"mt@gmail.com",
      contact:896774533,
      id:"123"
    },
    {
      fname:"Amit",
      lname:"Bharate",
      email:"ab@gmail.com",
      contact:6756745335,
      id:"124"
    },
    {
      fname:"Jay",
      lname:"Jadhav",
      email:"jj@gmail.com",
      contact:900074533,
      id:"125"
    },
    {
      fname:"Sneha",
      lname:"More",
      email:"st@gmail.com",
      contact:7788874533,
      id:"126"
    }
  ]
  constructor(
    private _snackBar : SnackbarService
  ) { }

  fetchstddata(){
    //API call to fetch std all data
    return this.stdArr
  }

  addNewstd(std:Istd){
  //API call to add new std data
  this.stdArr.push(std)

  //msg for add new todo
  this._snackBar.opensnackBar(`New student of ${std.fname} ${std.lname} is added successfully`)
  }

  removestdData(id:string){
    let getIndex = this.stdArr.findIndex(std=>std.id === id);

    let removestdobj = this.stdArr[getIndex]

    this.stdArr.splice(getIndex,1)

    this._snackBar.opensnackBar(`studentdata of ${removestdobj.fname} ${removestdobj.lname} is removed successfully`)
  }
}
