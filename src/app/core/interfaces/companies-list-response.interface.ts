export interface CompaniesListResponse {
    data: DataCompany[];
}

export interface DataCompany {
    type: string;
    id: string;
    attributes: Company;
    relationships: Relationships;
}

export interface Company {
    commercial_name: string;
    identification_type_name: string;
    source_name: string;
    sector_name: string;
    marketplace_name: string;
    taxation_name: string;
    created_by: string;
    stage_name: string;
    segmentation_name: string;
    updated_by: string;
    created_at: Date;
    updated_at: Date;
    name: string;
    identification_type: string;
    identification_number: string;
    industry: string;
    employees: number;
    taxation: string;
    email: string;
    phone: string;
    address: string;
    trademark: string;
    marketplace: string;
    sector: string;
    segmentation: string;
    source: string;
    stage: string;
    description: string;
}

export interface Relationships {
    commercial: Commercial;
}

export interface Commercial {
    data: DataComercial;
    links: Links;
}

export interface DataComercial {
    id: string;
    type: string;
}

export interface Links {
    related: string;
}
