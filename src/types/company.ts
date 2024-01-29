import { CompaniesTypes } from '.';

export interface Company {
  id: number;
  name: string;
  phone_number: null | string;
  logo: string;
  type: CompaniesTypes;
  status: "active";
  users_count: number;
}
