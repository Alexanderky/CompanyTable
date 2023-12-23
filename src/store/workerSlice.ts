import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateWorker, Worker, WorkerId } from '../type/workers';
import { Wworker as initialWorker } from '../list';
import { RootState } from './storeReducer';

const initialState: StateWorker = {
  workers: initialWorker,
};

const workerSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    selectWorker: (state, action: PayloadAction<WorkerId>) => {
      const selectedWorked = state.workers.find(
        (worke) => worke.id === action.payload
      );
      if (selectedWorked) {
        selectedWorked.selected = !selectedWorked.selected;
      }
    },
    removeWorker: (state, action: PayloadAction<WorkerId>) => {
      state.workers = state.workers.filter(
        (com) => com.id !== action.payload
      );
    },
    selectAllWorker: (state) => {
      state.workers.forEach((work) => (work.selected = !work.selected));
    },
    removeSelectedWorker: (state) => {
      state.workers = state.workers.filter((w) => !w.selected);
    },
    AddWorker:(state, action: PayloadAction<Worker>) =>{
      state.workers.push(action.payload)
    },
    editWork: (state, action: PayloadAction<Worker>) => {
      const editedCompanyIndex = state.workers.findIndex(company => company.id === action.payload.id);
      if (editedCompanyIndex !== -1) {
        state.workers[editedCompanyIndex] = action.payload;
      }
    },
  },
});

export const { selectWorker,removeWorker, selectAllWorker, removeSelectedWorker, AddWorker, editWork } =
  workerSlice.actions;

export const selectCompanies = (state: RootState) =>
  state.workerReducer.workers;

export default workerSlice.reducer;
