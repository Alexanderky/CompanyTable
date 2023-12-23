import { Company } from './type/company';
import { Worker } from './type/workers';

export const Ccompany: Company[] = [
  {
    id: 1,
    name: 'Яндекс',
    address: 'первый дом, 2 этаж',
    selected: false
  },
  {
    id: 2,
    name: 'Google',
    address: 'gte to',
    selected:false
  },
  {
    id: 3,
    name: 'Adept',
    address: 'Нижний новгород',
    selected: false
  },
];

export const Wworker: Worker[] = [
  { id: 1, name: 'Пётр', surname: 'Медведев', parentId: 1, selected:false, post: 'Работяга' },
  { id: 2, name: 'Ваня', surname: 'Иванов', parentId: 1, selected:false, post: 'Работяга' },
  {id: 3, name: 'Сергей', surname: 'Петров', parentId: 2, selected:false, post: 'Работяга'},
  {id: 4, name: 'Александр', surname: 'Сидоров', parentId: 1, selected:false, post: 'Работяга'},
  {id: 5, name: 'Николай', surname: 'Медведев', parentId: 3, selected:false, post: 'Работяга'},
  {id: 6, name: 'Лика', surname: 'Медведев', parentId: 3, selected:false, post: 'Работяга'},
  {id: 7, name: 'Настя', surname: 'Медведев', parentId: 2, selected:false, post: 'Работяга'},
  {id: 8, name: 'Варя', surname: 'Медведев', parentId: 2, selected:false, post: 'Работяга'},
];
