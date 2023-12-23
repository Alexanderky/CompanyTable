
import companiesReducer from './companySlice';
import workerReducer from './workerSlice';

import { combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit';


const rootReducer = combineReducers({companiesReducer, workerReducer})


const store = ()=>{
  return configureStore({reducer: rootReducer})
}
  
  export type RootState = ReturnType<typeof rootReducer>;
  export type AppStore = ReturnType<typeof store>
  export type AppDispatch= AppStore['dispatch']
export default store;