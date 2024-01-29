import { sortFavoriteCompanies } from '.';
import { CompaniesTypes, Company } from '../types';

export const filterAffiliateCompanies = (companies: Company[]) => {
  return [...sortFavoriteCompanies(companies).filter(company => company.type === CompaniesTypes.Affiliate)];
};
