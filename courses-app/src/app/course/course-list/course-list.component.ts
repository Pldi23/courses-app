import {
  	AfterContentChecked,
  	AfterContentInit, AfterViewChecked,
  	AfterViewInit,
  	Component,
  	DoCheck,
  	Input,
  	OnChanges, OnDestroy,
  	OnInit,
} from '@angular/core';
import { CourseItem } from '../course-item';
import { CourseItemsService } from '../course-items.service';

@Component({
   selector: 'app-courses-list',
   templateUrl: './course-list.component.html',
   styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
	AfterViewInit, AfterViewChecked, OnDestroy {

  	public readonly DEFAULT_LIST_SIZE: number = 3;

  	public coursesList: CourseItem[];
  	@Input() public searchText: string;

  	constructor(public courseService: CourseItemsService) { }

  	public ngOnInit(): void {
		console.log('Courses List on init');
		this.coursesList = this.courseService.fetch(0, this.DEFAULT_LIST_SIZE);
  	}

  	public ngDoCheck(): void {
		console.log('Courses List do check');
  	}

  	public ngAfterContentInit(): void {
		console.log('Courses List after content init');
  	}

  	public ngAfterContentChecked(): void {
		console.log('Course List after content checked');
  	}

  	public ngAfterViewInit(): void {
		console.log('Courses List after view init');
  	}

  	public ngAfterViewChecked(): void {
		console.log('Courses List after view check');
  	}

  	public ngOnDestroy(): void {
		console.log('Courses List on destroy');
  	}

  	public ngOnChanges(): void {
  		console.log('Courses List on changes');
  	}

  	public fetchMore(): void {
		console.log('load more click');
		const size: number = this.coursesList.length;
		const courseItems: CourseItem[] = this.courseService
			.fetch(size, size + this.DEFAULT_LIST_SIZE);
		this.coursesList = this.coursesList.concat(courseItems);
  	}

  	public search(): void {
		console.log('search click');
		if (this.searchText != undefined) {
		this.coursesList = this.courseService.fetchAll()
			.filter((course: CourseItem): boolean => course.title.toLowerCase().includes(this.searchText.trim().toLowerCase()));
		this.searchText = null;
		}
  	}

  	public handleDelete(course: CourseItem): void {
		console.log('delete click');
		const index: number = this.coursesList.indexOf(course, 0);
		if (index > -1) {
			this.coursesList.splice(index, 1);
		}
  	}
}
