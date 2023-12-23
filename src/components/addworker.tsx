import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../hooks/redux';
import { Worker } from '../type/workers';
import { AddWorker } from '../store/workerSlice';

function AddWorkerForm(): JSX.Element {
  const { companies } = useAppSelector((state) => state.companiesReducer);
  const { workers } = useAppSelector((state) => state.workerReducer);
  const dispatch = useDispatch();
  const [newWorker, setNewWorker] = useState<Worker>({
    id: 0,
    name: '',
    surname: '',
    parentId: 0,
    selected: false,
    post: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewWorker({
      ...newWorker,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddCompany = () => {
    const WorkerId = workers.length + 1;
    const WorkerToAdd: Worker = {
      ...newWorker,
      id: WorkerId,
      parentId: companies.filter((e) => e.selected === true)[0].id,
      selected: false,
    };
    dispatch(AddWorker(WorkerToAdd));
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Имя сотрудника"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="surname"
        placeholder="Фамилия"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="post"
        placeholder="Должность"
        onChange={handleInputChange}
      />
      <button onClick={handleAddCompany}>Добавить</button>
    </div>
  );
}

export default AddWorkerForm;
