import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Company } from '../type/company';
import { AddCompany } from '../store/companySlice';
import { useAppSelector } from '../hooks/redux';

function AddCompanyForm(): JSX.Element {
  const { companies } = useAppSelector((state) => state.companiesReducer);
  const dispatch = useDispatch();
  const [newCompany, setNewCompany] = useState<Company>({
    id: 0,
    name: '',
    address: '',
    selected: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCompany({
      ...newCompany,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddCompany = () => {
    const companyId = companies.length + 1;
    const companyToAdd: Company = {
      ...newCompany,
      id: companyId,
      selected: false,
    };
    dispatch(AddCompany(companyToAdd));
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Имя компании"
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Адресс"
        onChange={handleInputChange}
        required
      />
      <button onClick={handleAddCompany}>Добавить</button>
    </div>
  );
}

export default AddCompanyForm;
