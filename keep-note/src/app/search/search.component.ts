
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from 'src/models/note';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText:any;

  @Output()
  searchTextChanged = new EventEmitter<string>()

  searchNote(){
    this.searchTextChanged.emit(this.searchText)
  }
  constructor() { }
  
  ngOnInit(): void {
  }

}
function output() {
  throw new Error('Function not implemented.');
}

