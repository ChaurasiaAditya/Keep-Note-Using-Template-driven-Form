import { Component, OnInit } from '@angular/core';
import { Note } from 'src/models/note';
// import { NOTE } from 'src/models/notes';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {

  NOTE!: Note[];
  NOTES!: Note[];

  aditya: boolean = false;
  displayAdd() {
    if (this.aditya) {
      this.aditya = false;
    } else {
      this.aditya = true
    }

  }


  searchTextChanged!: string

  search(data: string) {
    this.searchTextChanged = data;
    this.onSearchTextChanged()
  }


  onSearchTextChanged() {
    this.NOTE = this.NOTES.filter(x => x.title?.match(this.searchTextChanged))
    console.log(this.NOTE);
  }

  // onSearchTextChanged(){
  //   this.NOTE = NOTE.filter(x => x.title ?.startsWith(this.searchTextChanged))
  // }

  constructor(private noteservice: NoteService) { }

  ngOnInit(): void {
    this.noteservice.getNotes().subscribe(data => { this.NOTE = data; this.NOTES = data })
  }

}
