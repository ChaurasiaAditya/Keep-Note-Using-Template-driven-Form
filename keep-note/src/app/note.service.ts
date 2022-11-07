import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from 'src/models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpclient: HttpClient) { }

  URL: string = "http://localhost:3000/notes"

  getNotes(){
    return this.httpclient.get<Array<Note>>(this.URL);
  }

  addNote(data:Note){
    return this.httpclient.post(this.URL,data)
  }
}
