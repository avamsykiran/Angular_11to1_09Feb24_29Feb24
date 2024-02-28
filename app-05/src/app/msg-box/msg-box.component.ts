import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-msg-box',
  templateUrl: './msg-box.component.html',
  styleUrls: ['./msg-box.component.css']
})
export class MsgBoxComponent {

  @Input()
  type!:string;

  bootstrapClasses:string;

  constructor(){
    this.bootstrapClasses = "alert fw-bold p-2";
  }

  ngOnChanges(){
    if(this.type){
      if(this.type==="error"){
        this.bootstrapClasses = "alert alert-danger fw-bold p-2";
      }else if(this.type==="info"){
        this.bootstrapClasses = "alert alert-info fw-bold p-2";
      }else{
        this.bootstrapClasses = "alert alert-primary fw-bold p-2";
      }
    }
  }
}
