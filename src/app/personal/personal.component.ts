import {Component, OnInit} from '@angular/core';
import {Personal} from '../data/formData.model';
import {Router} from '@angular/router';
import {FormDataService} from '../data/form-data.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  title = 'Please tell us about yourself.';
  personal: Personal;
  form: any;
  personalForm;

  constructor(private router: Router, private formDataService: FormDataService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.personalForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
    });
    //this.personal = this.formDataService.getPersonal();
    this.personalForm.setValue(this.formDataService.getPersonal());
  }

  save(form: any): boolean {
    if (!form) {
      return false;
    }
    this.formDataService.setPersonal(form);
    return true;
  }

  goToNext(form: any) {
    if (this.save(form)) {
      //navigate to the work
      this.router.navigate(['/work']);
    }
  }
}
