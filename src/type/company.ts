export type Company = {
    id: number;
    name: string;
    address: string;
    selected: boolean;

}

export type StateCompany = {
    companies: Company[]
}
export type CompanyID = Company['id']