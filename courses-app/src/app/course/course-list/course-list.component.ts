import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FilterByTitlePipe } from '../../pipe/filter/filter-by-title.pipe';
import { CourseItem } from '../course-item';
import { CourseItemsService } from '../course-items.service';

@Component({
   	selector: 'app-courses-list',
   	templateUrl: './course-list.component.html',
   	styleUrls: ['./course-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent implements OnInit {

  	public coursesList: CourseItem[];
  	@Input() public searchText: string;

  	constructor(private readonly courseService: CourseItemsService) { }

  	public ngOnInit(): void {
		console.log('Courses List on init');
		this.coursesList = this.courseService.fetch(0, DEFAULT_LIST_SIZE);
  	}

  	public fetchMore(): void {
		console.log('load more click');
		const size: number = this.coursesList.length;
		const courseItems: CourseItem[] = this.courseService
			.fetch(size, size + DEFAULT_LIST_SIZE);
		this.coursesList = this.coursesList.concat(courseItems);
  	}

  	public search(): void {
		console.log('search click');
		if (this.searchText != undefined) {
			const filterByTitlePipe: FilterByTitlePipe = new FilterByTitlePipe();
			const items: CourseItem[] = this.courseService.getList();
			this.coursesList = filterByTitlePipe.transform(items, this.searchText);
			this.searchText = null;
		}
  	}

  	public handleDelete(course: CourseItem): void {
		console.log('delete click');
		this.courseService.remove(course);
		this.coursesList = this.courseService.fetch(0, DEFAULT_LIST_SIZE);
  	}
}

const DEFAULT_LIST_SIZE: number = 3;
