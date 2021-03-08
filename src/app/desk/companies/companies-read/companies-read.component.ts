import { Component, Input, OnInit } from '@angular/core';
import { CompanyAttributes } from 'src/app/core/interfaces/company.interface';

@Component({
  selector: 'app-companies-read',
  templateUrl: './companies-read.component.html',
  styleUrls: ['./companies-read.component.scss']
})
export class CompaniesReadComponent implements OnInit {

  @Input() companyDetail: CompanyAttributes;
  

  constructor() { }

  ngOnInit(): void {
    console.log(this.companyDetail);
  }

}
