import { CompanyAttributes, Relationships } from "./company.interface";

export interface CompaniesCreateResponse {
    data: CompaniesCreateResponse;
}

export interface CompaniesCreateResponse {
    type: string;
    id: string;
    attributes: CompanyAttributes;
    relationships: Relationships;
}