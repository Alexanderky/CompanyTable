import { createSlice, PayloadAction } from '@reduxjs/toolkit';


import { StateCompany, CompanyID, Company } from '../type/company';

import { Ccompany as initialCompany } from '../list';
import { RootState } from './storeReducer';

const initialState: StateCompany = {
    companies : initialCompany
};

const companySlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    selectCompany: (state, action: PayloadAction<CompanyID>) => {
      const selectedCompany = state.companies.find((company) => company.id === action.payload);
      if (selectedCompany) {
        selectedCompany.selected = !selectedCompany.selected;
      }
    },
    removeCompany: (state, action: PayloadAction<CompanyID>)=>
    { state.companies = state.companies.filter((com)=> com.id !== action.payload)},
    selectAllCompanies: (state) => {
      const fff=state.companies.filter(e=> e.selected===true)
      if (fff.length>0){state.companies.map((company) => (company.selected = false))}
      else state.companies.map((el)=>(el.selected=true) )
    },
    
    removeSelectedCompanies: (state) => {
      state.companies = state.companies.filter((company) => !company.selected);
    },
    AddCompany:(state, action: PayloadAction<Company>) =>{
      state.companies.push(action.payload)
    },
    editCompany: (state, action: PayloadAction<Company>) => {
      const editedCompanyIndex = state.companies.findIndex(company => company.id === action.payload.id);
      if (editedCompanyIndex !== -1) {
        state.companies[editedCompanyIndex] = action.payload;
      }
    },


    
  },
});

export const { selectCompany,removeCompany, selectAllCompanies, removeSelectedCompanies, AddCompany, editCompany } = companySlice.actions;

export const selectCompanies = (state: RootState) => state.companiesReducer.companies;

export default companySlice.reducer;