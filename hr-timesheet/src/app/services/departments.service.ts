import { Injectable } from '@angular/core';
import { Department } from '../interfaces/department';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  departments: Department[];

  constructor() {}
}
