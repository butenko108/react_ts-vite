import { Dispatch, FC } from 'react';
import { FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import GradeIcon from '@mui/icons-material/Grade';
import { DEFAULT_COMPANY, FAVORITE_COMPANIES_NAME } from '../constants';
import { Company } from '../types';
import { filterAffiliateCompanies, sortFavoriteCompanies } from '../utils';

import './companies.css';
import './select.css';

interface Props {
  data: Company[];
  selectedCompanies: string[];
  setSelectedCompanies: Dispatch<React.SetStateAction<string[]>>;
  className?: string;
  isLabel?: boolean;
  isStandard?: boolean;
  isAffiliateOnly?: boolean;
}

export const Multiselect: FC<Props> = ({ data, selectedCompanies, setSelectedCompanies, className, isLabel, isStandard, isAffiliateOnly }) => {
  const defaultCompanies = isAffiliateOnly ? filterAffiliateCompanies(data) : sortFavoriteCompanies(data);

  const handleChange = (event: SelectChangeEvent<typeof selectedCompanies>) => {
    const { target: { value } } = event;

    if (value.includes(DEFAULT_COMPANY.name)) {
      return setSelectedCompanies([]);
    }

    setSelectedCompanies(typeof value === 'string' ? [value] : value);
  };

  return (
    <FormControl 
      variant="outlined"
      className={`companies-select ${className}`}
    >
      {isLabel && (
        <InputLabel
          shrink
          className="input-select"
        >
          Companies
        </InputLabel>
      )}

      <Select
        displayEmpty
        className="select-form-control companies-select"
        multiple
        value={selectedCompanies}
        onChange={handleChange}
        variant={isStandard ? 'standard' : 'outlined'}
      >
        <MenuItem
          value={DEFAULT_COMPANY.name}
          sx={{ pt: '2px', pb: '2px' }}
        >
          <IconButton
            size="small"
            sx={{ color: 'rgb(203, 15, 21)' }}
          >
            <GradeIcon />
          </IconButton>

          <p className='text'>{DEFAULT_COMPANY.name}</p>
        </MenuItem>

        {defaultCompanies.map(company => (
          <MenuItem
            key={company.id}
            value={company.name}
            sx={{ pt: '2px', pb: '2px' }}
          >
            <IconButton
              size="small"
              sx={{ color: FAVORITE_COMPANIES_NAME.includes(company.name) ? 'rgb(255, 179, 0)' : 'rgba(99,97,97,0.89)' }}
            >
              {FAVORITE_COMPANIES_NAME.includes(company.name) ? <GradeIcon /> : <StarOutlineIcon />}
            </IconButton>
            
            <p className='text'>{company.name}</p>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
