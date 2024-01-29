import { useState } from 'react';
import { FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import './companies.css';
import './select.css';
import companiesFS from '../mock/companies.json';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import GradeIcon from '@mui/icons-material/Grade';

interface Props {
  className?: string;
  isLabel?: boolean;
  isStandard?: boolean;
  isAffiliateOnly?: boolean;
}

const ALL_COMPANIES = {
  "id": 0,
  "name": "All Companies",
};
const favoriteCompaniesName = ['ICP', 'MVP', 'SGB'];

const sortFavoriteCompanies = () => {
  const favoriteCompanies = companiesFS.filter(company => favoriteCompaniesName.includes(company.name));
  const unfavoriteCompanies = companiesFS.filter(company => !favoriteCompaniesName.includes(company.name));

  return [...favoriteCompanies, ...unfavoriteCompanies];
};

const filterAffiliateCompanies = () => {
  return [...sortFavoriteCompanies().filter(company => company.type === 'affiliate')];
};

export const ComSelect = ({ className, isLabel, isStandard, isAffiliateOnly }: Props) => {
  const defaultCompanies = isAffiliateOnly ? filterAffiliateCompanies() : sortFavoriteCompanies();
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedCompanies>) => {
    const { target: { value } } = event;
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
          // id="com-select"
          className="input-select"
        >
          Companies
        </InputLabel>
      )}

      <Select
        // labelId="com-select"
        displayEmpty
        className="select-form-control companies-select"
        multiple
        value={selectedCompanies}
        onChange={handleChange}
        variant={isStandard ? 'standard' : 'outlined'}
        // renderValue={props.renderValue}
        // inputProps={props.inputProps}
        // MenuProps={props.MenuProps}
        // onClose={props.onClose}
        // onOpen={props.onOpen}
        // open={props.open}
      >
        <MenuItem
          value={ALL_COMPANIES.name}
          sx={{ pt: '2px', pb: '2px' }}
        >
          <IconButton
            size="small"
            sx={{ color: 'rgb(203, 15, 21)' }}
          >
            <GradeIcon />
          </IconButton>

          <p className='text'>{ALL_COMPANIES.name}</p>
        </MenuItem>

        {defaultCompanies.map(company => (
          <MenuItem
            key={company.id}
            value={company.name}
            sx={{ pt: '2px', pb: '2px' }}
          >
            <IconButton
              size="small"
              sx={{ color: favoriteCompaniesName.includes(company.name) ? 'rgb(255, 179, 0)' : 'rgba(99,97,97,0.89)' }}
            >
              {favoriteCompaniesName.includes(company.name) ? <GradeIcon /> : <StarOutlineIcon />}
            </IconButton>

            <p className='text'>{company.name}</p>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
