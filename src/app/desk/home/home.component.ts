import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ScimagoService } from 'src/app/core/services/scimago/scimago.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any;
  displayedColumns: string[] = ['Areas', 'Country', 'Publisher', 'Title', 'Rank'];
  dataSource = new MatTableDataSource<any>(this.scimagoService.getDataScimago());
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( private scimagoService: ScimagoService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
