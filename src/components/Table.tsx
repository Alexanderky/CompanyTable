import React, { useState } from 'react';
import './table.css';

import CompanyItem from './companyItem';

import { useAppSelector } from '../hooks/redux';
import { useDispatch } from 'react-redux';
import {
  removeSelectedCompanies,
  selectAllCompanies,
} from '../store/companySlice';
import WorkerItem from './workeritem';
import { removeSelectedWorker, selectAllWorker } from '../store/workerSlice';
import AddCompanyForm from './addcompany';
import AddWorkerForm from './addworker';

function Table(): JSX.Element {
  const { companies } = useAppSelector((state) => state.companiesReducer);
  const { workers } = useAppSelector((state) => state.workerReducer);
  const dispatch = useDispatch();
  return (
    <div className="table">
      <div className="headerTable">
        <div className="headerCompany">
          <div><h1>Компании</h1></div>
          <div className='checkDelAll'>
            <div>
              Выбрать все компании
              <input className='check'
                type="checkbox"
                onChange={() => dispatch(selectAllCompanies())}
              />
            </div>
            <div>
              <button
                className="dellAll"
                onClick={() => dispatch(removeSelectedCompanies())}
              >
                удалить выбранное
              </button>
            </div>
          </div>
          
        </div><div className="headerWorker">
            <div> <h1>Сотрудники {companies.filter((e) => e.selected === true).length === 1?`компании: ${companies.filter((e) => e.selected === true)[0].name} `: ''}</h1></div>
            {companies.filter((e) => e.selected === true).length === 1 && <div className='checkDelAll'>
              <div>
                {' '}
                Выбрать всех сотрудников
                <input
                  type="checkbox"
                  className='check'
                  onChange={() => dispatch(selectAllWorker())}
                />
              </div>
              <div>
                <button
                  className="dellAll"
                  onClick={() => dispatch(removeSelectedWorker())}
                >
                  удалить выбранное
                </button>
              </div>
            </div>}
          </div>
      </div>
      <div className="bodyTable">
        <div className="BodyCompany">
          <div className='addform'>
            <AddCompanyForm />
          </div>
          {companies.map((company) => (
            <CompanyItem company={company} key={company.id} />
          ))}
        </div>
        <div className="BodyWorker">
          <div>
          {companies.filter((e) => e.selected === true).length !== 1 &&<div className='info'> Выберите ОДНУ компанию чтобы посмотреть сотрудников</div>} 
            {companies.filter((e) => e.selected === true).length === 1 && (<div className='addform'><AddWorkerForm /></div>
              
            )}
            {companies.filter((e) => e.selected === true).length === 1 &&
              workers.map((worker) =>
                companies.filter((e) => e.selected === true)[0].id ===
                worker.parentId ? (
                  <WorkerItem worker={worker} key={worker.id} />
                ) : (
                  <div></div>
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
