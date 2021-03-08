import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company, CompanyAttributes } from 'src/app/core/interfaces/company.interface';
import { CompaniesService } from 'src/app/core/services/companies/companies.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {

  company: Company;
  companyDetail: any = {};
  loading = true;

  constructor( private activatedRoute: ActivatedRoute,
               private companiesService: CompaniesService ) {}

  ngOnInit(): void {
   const { idCompany } = this.activatedRoute.snapshot.params;
   this.companyRead( idCompany );
  }

  companyRead( idCompany: number ): void{
    this.companiesService.companiesRead( idCompany )
      .subscribe( company => {
        this.loading = false;
        console.log( company );
        this.company = company;
        this.companyDetail = company.attributes;
        console.log( this.companyDetail.name );
      });
  }

}
