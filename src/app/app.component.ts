import {Component, OnInit} from '@angular/core';
import {FormDataService} from './data/form-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'multi-step-angular';
  formData: any;

  constructor(private formDataService: FormDataService) {
  }

  ngOnInit(): void {
    this.formData = this.formDataService.getFormData();

  }
}
