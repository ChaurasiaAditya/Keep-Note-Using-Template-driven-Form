import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input()
  note:any;


  icons:boolean = false;
  showIcons(){
      this.icons= true;
  
  }

  hideIcons(){
    this.icons=false;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
