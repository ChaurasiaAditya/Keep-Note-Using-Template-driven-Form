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

  NOTE?:Note[] = [];

  note:Note = {}

  categories:string[] = ["office","Review"]
  
  addNote(){
    this.noteservice.addNote(this.note).subscribe(
      {next:() => this._snackBar.open('Note Added successfully', 'dismis', {​
        duration: 5000,​
        panelClass: ['mat-toolbar', 'mat-primary']​
        })}
    )
  }
  
  


  constructor(private noteservice:NoteService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.noteservice.getNotes().subscribe(data => this.NOTE = data)
  }

}
