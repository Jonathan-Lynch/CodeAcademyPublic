import { Component, OnInit, ViewChild } from '@angular/core';
import { JusticeLeagueService } from './services/justice-league.service';
import { JusticeLeagueMember } from './interfaces/justice-league-member';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['name', 'alias', 'age', 'currentMember', 'memberSince', 'powers'];
  dataSource: MatTableDataSource<JusticeLeagueMember>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private justiceLeagueService: JusticeLeagueService) {

  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.justiceLeagueService.getMembers());
    this.dataSource.sort = this.sort;
  }

  applyFilter(filter: string) {
    this.dataSource.filter = filter.trim().toLowerCase();
  }
}
