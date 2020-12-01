import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBreadCrumb } from './breadcrumb';

@Component({
  	selector: 'app-breadcrumbs',
  	templateUrl: './breadcrumb.component.html',
  	styleUrls: ['./breadcrumb.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent implements OnInit {
	public breadcrumb: IBreadCrumb;
	@Input() public title: string;

	constructor(private readonly router: Router,
				private readonly route: ActivatedRoute) {
	}

	public ngOnInit(): void {
		this.breadcrumb = this.buildBreadCrumb();
	}

	private buildBreadCrumb(): IBreadCrumb {
		const path: string = this.router.url;
		const paths: string[] = path.split('/');
		let label: string = paths.pop();
		const key: string = this.getKey();
		label = this.mapLabel(key, label);
		return {
			label: label,
			links: paths
				.filter((part: string): boolean => part !== ''),
		};
	}

	private mapLabel(key: string, label: string): string {
		if (key === 'courseId') {
			if (this.title !== null) {
				label = this.title;
			}
		}
		return label;
	}

	private getKey(): string {
		return this.route.routeConfig && this.route.routeConfig.data
				? this.route.routeConfig.data.breadcrumb
				: '';
	}
}
