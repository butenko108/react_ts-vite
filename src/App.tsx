import { useState } from 'react';
import companiesFS from './mock/companies.json';
import { Company } from './types';
import { Multiselect } from './multiselect';
import './App.css';

function App() {
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);

  return (
    <div>
      <Multiselect
        data={companiesFS as Company[]}
        selectedCompanies={selectedCompanies}
        setSelectedCompanies={setSelectedCompanies}
        isLabel
      />

      <Multiselect
        data={companiesFS as Company[]}
        selectedCompanies={selectedCompanies}
        setSelectedCompanies={setSelectedCompanies}
        isLabel
        isAffiliateOnly
      />
    </div>
  );
}

export default App;
