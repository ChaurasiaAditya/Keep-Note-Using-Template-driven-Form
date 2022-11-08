import { Component, OnInit } from '@angular/core';
import { Note } from 'src/models/note';
import { NoteService } from '../note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  note:Note = {}

  panelOpenState:boolean = false;

  // ForMinimum Date
  currentdate: Date = new Date();
  minimumdate:Date = new Date(this.currentdate.getFullYear(),this.currentdate.getMonth(),this.currentdate.getDate());

  // For category
  categories:string[] = ["office","Review"]
  
  addNote(){
    this.noteservice.addNote(this.note).subscribe(
      {next:() => {this._snackBar.open('Note Added successfully', 'dismis', {​
        duration: 5000,​
        panelClass: ['mat-toolbar', 'mat-primary']​
        })}}
    )
  }
  
  constructor(private noteservice:NoteService,private _snackBar: MatSnackBar) { }


  ngOnInit(): void {
  }

}
