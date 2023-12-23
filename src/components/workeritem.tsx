import { useDispatch, useSelector } from 'react-redux';
import { Worker } from '../type/workers';
import { useEffect, useState } from 'react';
import './table.css';
import { editWork, removeWorker, selectWorker } from '../store/workerSlice';
import { RootState } from '../store/storeReducer';

function WorkerItem({ worker }: { worker: Worker }): JSX.Element {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const works = useSelector((state: RootState) =>
    state.workerReducer.workers.find((work) => work.id === worker.id)
  );
  const [editedCompany, setEditedCompany] = useState<Worker | null>(null);
  useEffect(() => {
    if (works) {
      setEditedCompany({ ...works });
    }
  }, [works]);
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
      dispatch(editWork(editedCompany));
      setOpen(!open);
    }
  };
  return (
    <>
      {open ? (
        <div
          className={worker.selected ? 'CompanyCardSelected' : 'CompanyCard'}
          onDoubleClick={() => setOpen(!open)}
        >
          <h3 className="namework">
            <div>
              {worker.name} {worker.surname}
            </div>
          </h3>
          <div>Должность: {worker.post}</div>

          <div className="chekANDDelite">
            <input
              type="checkbox"
              checked={worker.selected}
              onChange={() => dispatch(selectWorker(worker.id))}
            />
            <button onClick={() => dispatch(removeWorker(worker.id))}>🗑</button>
            <button onClick={() => setOpen(!open)}>✏️</button>
          </div>
        </div>
      ) : (
        <div className="EditCard">
          <div className="editInput">
            <input
              type="text"
              name="name"
              placeholder="Название компании"
              value={editedCompany?.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="surname"
              placeholder="Адрес"
              value={editedCompany?.surname}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="post"
              placeholder="должность"
              value={editedCompany?.post}
              onChange={handleInputChange}
            />
            <button onClick={handleEditCompany}>Сохранить</button>\
          </div>
        </div>
      )}
    </>
  );
}

export default WorkerItem;
