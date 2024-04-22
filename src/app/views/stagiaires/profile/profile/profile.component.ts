import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfileService } from '../../../../services/profile.service';
import { CvService } from '../../../../services/cv.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profileForm: FormGroup;
  experienceForm: FormGroup;
  projectForm: FormGroup;
  skilsForm: FormGroup;
  certificationForm: FormGroup;
  educationForm: FormGroup;
  cvForm: FormGroup;
  constructor(private profileS: ProfileService, private cvS: CvService) {
    this.profileForm = new FormGroup({
      fullName: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      role: new FormControl(''),
      image: new FormControl(''),
      nationality: new FormControl(''),
      dateOfBirth: new FormControl(''),
      address: new FormControl(''),
      department: new FormControl(''),
      gender: new FormControl(''),
      isEnabled: new FormControl(''),
      cv: new FormControl(''),
      creationDate: new FormControl(''),

    });
    this.cvForm = new FormGroup({
      education: new FormControl(''),
      experience: new FormControl(''),
      project: new FormControl(''),
      skill: new FormControl(''),
      certification: new FormControl(''),
    });
    this.experienceForm = new FormGroup({})
    this.projectForm = new FormGroup({})
    this.skilsForm = new FormGroup({})
    this.certificationForm = new FormGroup({})
    this.educationForm = new FormGroup({})
  }

  addProfile() {
    let cv = this.cvForm.getRawValue()
    this.cvS.create(cv).subscribe((res: any) => {
      console.log(res)
      let profile = this.profileForm.getRawValue();
      profile.cv = res._id
      this.profileS.createProfile(profile).subscribe(result => {
        console.log(result)
      })
    })

  }

  addexperience() { }
  addproject() { }
  addskils() { }
  addcertification() { }
  addeducation() { }
}
