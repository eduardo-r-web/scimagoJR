import { Component, OnInit } from '@angular/core';
import { Company, DataCompany } from 'src/app/core/interfaces/companies-list-response.interface';
import { CompaniesService } from 'src/app/core/services/companies/companies.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {

  companies: DataCompany[] = [];
  company: Company[] = [];
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
    this.companies.forEach( companies => this.company.push(companies.attributes));
    this.dataSource = new MatTableDataSource(this.company);
  }

}
