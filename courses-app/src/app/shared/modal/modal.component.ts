import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

	@Input() public isShown: boolean;

	constructor() { }
	public ngOnInit(): void {
		this.close();
	}

	public close(): void {
		this.isShown = false;
	}
}
