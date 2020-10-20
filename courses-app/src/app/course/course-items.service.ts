import { Injectable } from '@angular/core';
import { CourseItem } from './course-item';

@Injectable({
  providedIn: 'root',
})
export class CourseItemsService {

	public courses: CourseItem[] = [
		{id: 1, title: 'Angular lessons', creationDate: new Date(2020, 2, 2), duration: 90, description: 'ENGL 254. Popular Literary Genres (3)Introduction to the study of one or more popular literary genres, such as mystery, crime fiction, urban romance, fantasy, science fiction, horror, gothic, western, thriller, spy fiction, etc. Analysis of generic conventions and how these conventions reflect sociocultural concerns over time. Focus on skills requisite for thinking and writing critically about literary works within their historical contexts. Critical writing is an integral part of the course. (Available for General Education, C2 Humanities.)'},
		{id: 2, title: 'React lessons', creationDate: new Date(2020, 2, 2), duration: 95, description: 'ENGL 254. Popular Literary Genres (3)\nIntroduction to the study of one or more popular literary genres, such as mystery, crime fiction, urban romance, fantasy, science fiction, horror, gothic, western, thriller, spy fiction, etc. Analysis of generic conventions and how these conventions reflect sociocultural concerns over time. Focus on skills requisite for thinking and writing critically about literary works within their historical contexts. Critical writing is an integral part of the course. (Available for General Education, C2 Humanities.)'},
		{id: 3, title: 'TypeScript lessons', creationDate: new Date(2020, 2, 2), duration: 29, description: 'ENGL 254. Popular Literary Genres (3)\nIntroduction to the study of one or more popular literary genres, such as mystery, crime fiction, urban romance, fantasy, science fiction, horror, gothic, western, thriller, spy fiction, etc. Analysis of generic conventions and how these conventions reflect sociocultural concerns over time. Focus on skills requisite for thinking and writing critically about literary works within their historical contexts. Critical writing is an integral part of the course. (Available for General Education, C2 Humanities.)'},
		{id: 4, title: 'JavaScript lessons', creationDate: new Date(2019, 2, 2), duration: 50, description: 'ENGL 254. Popular Literary Genres (3)\nIntroduction to the study of one or more popular literary genres, such as mystery, crime fiction, urban romance, fantasy, science fiction, horror, gothic, western, thriller, spy fiction, etc. Analysis of generic conventions and how these conventions reflect sociocultural concerns over time. Focus on skills requisite for thinking and writing critically about literary works within their historical contexts. Critical writing is an integral part of the course. (Available for General Education, C2 Humanities.)'},
		{id: 5, title: 'Java lessons', creationDate: new Date(2018, 2, 2), duration: 95, description: 'ENGL 254. Popular Literary Genres (3)\nIntroduction to the study of one or more popular literary genres, such as mystery, crime fiction, urban romance, fantasy, science fiction, horror, gothic, western, thriller, spy fiction, etc. Analysis of generic conventions and how these conventions reflect sociocultural concerns over time. Focus on skills requisite for thinking and writing critically about literary works within their historical contexts. Critical writing is an integral part of the course. (Available for General Education, C2 Humanities.)'},
		{id: 6, title: 'Python lessons', creationDate: new Date(2020, 5, 2), duration: 91, description: 'ENGL 254. Popular Literary Genres (3)\nIntroduction to the study of one or more popular literary genres, such as mystery, crime fiction, urban romance, fantasy, science fiction, horror, gothic, western, thriller, spy fiction, etc. Analysis of generic conventions and how these conventions reflect sociocultural concerns over time. Focus on skills requisite for thinking and writing critically about literary works within their historical contexts. Critical writing is an integral part of the course. (Available for General Education, C2 Humanities.)'},
		{id: 7, title: 'NodeJs lessons', creationDate: new Date(2020, 2, 8), duration: 70, description: 'ENGL 254. Popular Literary Genres (3)\nIntroduction to the study of one or more popular literary genres, such as mystery, crime fiction, urban romance, fantasy, science fiction, horror, gothic, western, thriller, spy fiction, etc. Analysis of generic conventions and how these conventions reflect sociocultural concerns over time. Focus on skills requisite for thinking and writing critically about literary works within their historical contexts. Critical writing is an integral part of the course. (Available for General Education, C2 Humanities.)'},
  	];

  	constructor() { }

  	public fetchAll(): CourseItem[] {
		return this.courses;
  	}

  	public fetch(start: number, end: number): CourseItem[] {
		return this.courses.slice(start, end);
  	}

  	public fetchByFilter(searchText: string, start: number, end: number): CourseItem[] {
		return this.courses.filter((course: CourseItem): boolean => course.title.toLowerCase().includes(searchText.trim().toLowerCase()))
			.slice(start, end);
  	}
}
