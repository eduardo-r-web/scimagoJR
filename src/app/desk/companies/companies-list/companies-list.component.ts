import { Component, OnInit } from '@angular/core';
import { CompaniesService } from 'src/app/core/services/companies/companies.service';
import {MatTableDataSource} from '@angular/material/table';
import { Company } from 'src/app/core/interfaces/company.interface';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {

  companies: Company[] = [];
  displayedColumns = ['name', 'email', 'phone', 'action'];
  dataSource: MatTableDataSource<Company>;

  constructor( private companiesService: CompaniesService ) { }

  ngOnInit(): void {
    this.companiesService.companiesList()
      .subscribe( companies => {
        this.companies = companies;
        this.loadTable();
      });
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadTable(){
    this.dataSource = new MatTableDataSource(this.companies);
  }

}
