import { Component, OnInit } from '@angular/core';
import { Note } from 'src/models/note';
import { NOTE } from 'src/models/notes';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  NOTE?:Note[] = [];

  note:Note = {}

  addNote(){
    this.noteservice.addNote(this.note).subscribe({ next(x) { alert("Note Added") }, error() { alert("Failed to Add Note") } })
  }
  
  


  constructor(private noteservice:NoteService) { }

  ngOnInit(): void {
    this.noteservice.getNotes().subscribe(data => this.NOTE = data)
  }

}
