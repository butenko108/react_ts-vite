import { FAVORITE_COMPANIES_NAME } from '../constants';
import { Company } from '../types';

export const sortFavoriteCompanies = (companies: Company[]) => {
  const favoriteCompanies = companies.filter(company => FAVORITE_COMPANIES_NAME.includes(company.name));
  const unfavoriteCompanies = companies.filter(company => !FAVORITE_COMPANIES_NAME.includes(company.name));

  return [...favoriteCompanies, ...unfavoriteCompanies];
};
