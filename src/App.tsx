import { useState } from 'react';
import './App.css';
import Companies from './FavoriteCompaniesSelect/Companies';
import { CompaniesTypes } from './types/companies-types';

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
      <Companies
        company_ids={selectedCompanies}
        changeCompany={setSelectedCompanies}
        companiesTypes={[CompaniesTypes.Affiliate]}
        showCountValues
        fullText
        variant="standard"
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
        variant="standard"
      />

      <Companies
        company_ids={selectedCompanies}
        changeCompany={setSelectedCompanies}
        companiesTypes={[CompaniesTypes.Affiliate]}
        showCountValues
        fullText
        variant="standard"
        allName="All Companies"
      />

      <Companies
        company_ids={selectedCompanies}
        changeCompany={setSelectedCompanies}
        companiesTypes={[CompaniesTypes.Affiliate]}
        className="header-rides__companies"
        fullText
        allName="All Companies"
        variant="standard"
        getCompanyStats={company => companyUsers[company.name] || 0}
      />
    </div>
  );
}

export default App;
