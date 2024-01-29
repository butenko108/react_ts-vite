import { useState } from 'react';
import './App.css';
import Companies from './FavoriteCompaniesSelect/Companies';
import { CompaniesTypes } from './types/companies-types';
import { ComSelect } from './com-select/com-select';

function App() {
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [companyUsers] = useState({
    null: 2738,
    GVC: 40,
    GCS: 4,
    MVT: 25,
    PTC: 46,
    ITA: 25,
    ICP: 18,
    MVP: 18,
    MAG: 78,
  });

  return (
    <div>
      <ComSelect
        isLabel
      />
      <ComSelect
        isLabel
        isAffiliateOnly
      />

      <Companies
        company_ids={selectedCompanies}
        changeCompany={setSelectedCompanies}
        companiesTypes={[CompaniesTypes.Affiliate]}
        showCountValues
        fullText
        isStandard
      />

      <Companies
        company_ids={selectedCompanies}
        changeCompany={setSelectedCompanies}
        companiesTypes={[CompaniesTypes.Affiliate, CompaniesTypes.Contract]}
        className="driver-companies"
        allName="All"
        label="Companies"
      />

      <Companies
        company_ids={selectedCompanies}
        changeCompany={setSelectedCompanies}
        companiesTypes={[CompaniesTypes.Affiliate]}
        className="header-rides__companies"
        fullText
        allName="All Companies"
        showCountValues
        isStandard
      />

      <Companies
        company_ids={selectedCompanies}
        changeCompany={setSelectedCompanies}
        companiesTypes={[CompaniesTypes.Affiliate]}
        showCountValues
        fullText
        isStandard
        allName="All Companies"
      />

      <Companies
        company_ids={selectedCompanies}
        changeCompany={setSelectedCompanies}
        companiesTypes={[CompaniesTypes.Affiliate]}
        className="header-rides__companies"
        fullText
        allName="All Companies"
        isStandard
        getCompanyStats={company => companyUsers[company.name] || 0}
      />
    </div>
  );
}

export default App;
