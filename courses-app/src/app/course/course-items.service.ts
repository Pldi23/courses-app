import { Injectable } from '@angular/core';
import {CourseItem} from './course-item';

@Injectable({
  providedIn: 'root',
})
export class CourseItemsService {

  private courses: CourseItem[] = [
		{id: 1, title: 'Angular lessons', creationDate: new Date(2020, 2, 2), duration: 90, description: 'Very long description for this course'},
		{id: 2, title: 'React lessons', creationDate: new Date(2020, 2, 2), duration: 95, description: 'Very long description for this course'},
		{id: 3, title: 'TypeScript lessons', creationDate: new Date(2020, 2, 2), duration: 29, description: 'Very long description for this course'},
		{id: 4, title: 'JavaScript lessons', creationDate: new Date(2019, 2, 2), duration: 50, description: 'Very long description for this course'},
		{id: 5, title: 'Java lessons', creationDate: new Date(2018, 2, 2), duration: 95, description: 'Very long description for this course'},
		{id: 6, title: 'Python lessons', creationDate: new Date(2020, 5, 2), duration: 91, description: 'Very long description for this course'},
		{id: 7, title: 'NodeJs lessons', creationDate: new Date(2020, 2, 8), duration: 70, description: 'Very long description for this course'},
  ];

  constructor() { }

  public fetchAll(): CourseItem[] {
	return this.courses;
  }
}
