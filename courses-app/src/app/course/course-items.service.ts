import { Injectable } from '@angular/core';
import { CourseItem } from './course-item';

@Injectable({
  	providedIn: 'root',
})
export class CourseItemsService {

	private readonly courses: CourseItem[] = [
		{id: 1, title: 'Angular lessons', creationDate: new Date(2020, 9, 26), duration: 90, description: 'ENGL 254. Popular Literary Genres (3)Introduction to the study of one or more popular literary genres, such as mystery, crime fiction, urban romance, fantasy, science fiction, horror, gothic, western, thriller, spy fiction, etc. Analysis of generic conventions and how these conventions reflect sociocultural concerns over time. Focus on skills requisite for thinking and writing critically about literary works within their historical contexts. Critical writing is an integral part of the course. (Available for General Education, C2 Humanities.)', topRated: true},
		{id: 2, title: 'React lessons', creationDate: new Date(2020, 9, 30), duration: 95, description: 'ENGL 254. Popular Literary Genres (3)\nIntroduction to the study of one or more popular literary genres, such as mystery, crime fiction, urban romance, fantasy, science fiction, horror, gothic, western, thriller, spy fiction, etc. Analysis of generic conventions and how these conventions reflect sociocultural concerns over time. Focus on skills requisite for thinking and writing critically about literary works within their historical contexts. Critical writing is an integral part of the course. (Available for General Education, C2 Humanities.)', topRated: false},
		{id: 3, title: 'TypeScript lessons', creationDate: new Date(2020, 9, 2), duration: 29, description: 'ENGL 254. Popular Literary Genres (3)\nIntroduction to the study of one or more popular literary genres, such as mystery, crime fiction, urban romance, fantasy, science fiction, horror, gothic, western, thriller, spy fiction, etc. Analysis of generic conventions and how these conventions reflect sociocultural concerns over time. Focus on skills requisite for thinking and writing critically about literary works within their historical contexts. Critical writing is an integral part of the course. (Available for General Education, C2 Humanities.)', topRated: true},
		{id: 4, title: 'JavaScript lessons', creationDate: new Date(2019, 2, 2), duration: 50, description: 'ENGL 254. Popular Literary Genres (3)\nIntroduction to the study of one or more popular literary genres, such as mystery, crime fiction, urban romance, fantasy, science fiction, horror, gothic, western, thriller, spy fiction, etc. Analysis of generic conventions and how these conventions reflect sociocultural concerns over time. Focus on skills requisite for thinking and writing critically about literary works within their historical contexts. Critical writing is an integral part of the course. (Available for General Education, C2 Humanities.)', topRated: false},
		{id: 5, title: 'Java lessons', creationDate: new Date(2018, 2, 2), duration: 95, description: 'ENGL 254. Popular Literary Genres (3)\nIntroduction to the study of one or more popular literary genres, such as mystery, crime fiction, urban romance, fantasy, science fiction, horror, gothic, western, thriller, spy fiction, etc. Analysis of generic conventions and how these conventions reflect sociocultural concerns over time. Focus on skills requisite for thinking and writing critically about literary works within their historical contexts. Critical writing is an integral part of the course. (Available for General Education, C2 Humanities.)', topRated: true},
		{id: 6, title: 'Python lessons', creationDate: new Date(2020, 5, 2), duration: 91, description: 'ENGL 254. Popular Literary Genres (3)\nIntroduction to the study of one or more popular literary genres, such as mystery, crime fiction, urban romance, fantasy, science fiction, horror, gothic, western, thriller, spy fiction, etc. Analysis of generic conventions and how these conventions reflect sociocultural concerns over time. Focus on skills requisite for thinking and writing critically about literary works within their historical contexts. Critical writing is an integral part of the course. (Available for General Education, C2 Humanities.)', topRated: false},
		{id: 7, title: 'NodeJs lessons', creationDate: new Date(2020, 2, 8), duration: 70, description: 'ENGL 254. Popular Literary Genres (3)\nIntroduction to the study of one or more popular literary genres, such as mystery, crime fiction, urban romance, fantasy, science fiction, horror, gothic, western, thriller, spy fiction, etc. Analysis of generic conventions and how these conventions reflect sociocultural concerns over time. Focus on skills requisite for thinking and writing critically about literary works within their historical contexts. Critical writing is an integral part of the course. (Available for General Education, C2 Humanities.)', topRated: false},
  	];

  	public getList(): CourseItem[] {
		return this.courses;
  	}
  	public create(course: CourseItem): void {
  		this.courses.push(course);
	}
	public getById(id: number): CourseItem {
  		return this.courses.find((course: CourseItem): boolean => course.id === id);
	}
	public update(course: CourseItem, id: number): CourseItem {
  		const index: number = this.courses.findIndex((c: CourseItem): boolean => c.id === id);
  		course.id = id;
  		this.courses[index] = course;
  		return course;
	}
	public remove(course: CourseItem): void {
		const index: number = this.courses.indexOf(course, 0);
		if (index > -1) {
			this.courses.splice(index, 1);
		}
	}

  	public fetch(start: number, end: number): CourseItem[] {
		return this.courses.slice(start, end);
  	}
}
