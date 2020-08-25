import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student: any = {};
  currentStyles;
  isEditing = false;
  constructor() { }

  ngOnInit(): void {
    this.currentStyles = {
      color : this.student.grade === 'D' ? 'red' : 'blue',
      'font-style' : this.student.grade === 'F' ? 'italic' : 'normal'
    };
  }

}
