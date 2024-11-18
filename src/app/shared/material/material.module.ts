import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const modulearr = [
  MatButtonModule,
  MatIconModule,
  MatSnackBarModule
]


@NgModule({
 declarations:[],
 imports:[
  ...modulearr
 ],
 exports:[
  ...modulearr
 ]
})
export class MaterialModule{

}
