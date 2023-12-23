import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '../hooks/redux';
import { Company } from '../type/company';
import './table.css';
import { editCompany, removeCompany, selectCompany } from '../store/companySlice';
import { useEffect, useState } from 'react';
import { RootState } from '../store/storeReducer';

function CompanyItem({ company }: { company: Company }): JSX.Element {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const { workers } = useAppSelector((state) => state.workerReducer);
  const numb = workers.filter((work) => work.parentId === company.id);
  const companies = useSelector((state: RootState)=> state.companiesReducer.companies.find(compan => compan.id === company.id))
  const [editedCompany, setEditedCompany] = useState<Company | null>(null)
  useEffect(() => {
    if (companies) {
      setEditedCompany({ ...companies });
    }
  }, [companies])
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editedCompany) {
      setEditedCompany({
        ...editedCompany,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleEditCompany = () => {
    if (editedCompany) {
      dispatch(editCompany(editedCompany));
      setOpen(!open)
    }
  };
  return (
    <>
     {open? <div className={company.selected ? 'CompanyCardSelected' : 'CompanyCard'}>
        <h3 className="namecom">Компания: {company.name}</h3>
        <div className="adres">Адресс: {company.address}</div>
        <div className="sotr">Число сотрудников: {numb.length}</div>
        <div>
          {' '}
          <input
            type="checkbox"
            checked={company.selected}
            onChange={() => dispatch(selectCompany(company.id))}
          ></input>
          <button onClick={() => dispatch(removeCompany(company.id))}>🗑</button>
          <button onClick={() => setOpen(!open)}>✏️</button>
        </div>
      </div>: <div className='EditCard'>
        <div className='editInput'><input
            type="text"
            name="name"
            placeholder="Название компании"
            value={editedCompany?.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Адрес"
            value={editedCompany?.address}
            onChange={handleInputChange}
          />
          <button onClick={handleEditCompany}>Сохранить</button></div>
      
      </div> } 
    </>
  );
}

export default CompanyItem;
