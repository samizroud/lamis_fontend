import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfileService } from '../../../../services/profile.service';
import { UsersService } from '../../../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrl: './ajouter.component.css',
  changeDetection: ChangeDetectionStrategy.Default
})
export class AjouterComponent implements OnInit,AfterViewInit {
  @ViewChild('container', { static: true, read: ViewContainerRef }) container!: ViewContainerRef
  @ViewChild('addUser', { static: true, read: TemplateRef }) addUser!: TemplateRef<any>
  @ViewChild('addProfile', { static: true, read: TemplateRef }) addProfile!: TemplateRef<any>

  addUserForm: FormGroup
  addProfileForm: FormGroup
  addedUser: any
  constructor(private userS: UsersService, private root: Router, private profileS: ProfileService) {
    this.addUserForm = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      role: new FormControl(''),
      password: new FormControl(''),
      passwordConfirm: new FormControl(''),
    })
    this.addProfileForm = new FormGroup({
      user: new FormControl(''),
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
    })
  }

  ngOnInit(): void {

  }
  submit() {
    let data = this.addUserForm.getRawValue()
    if (data.password == data.passwordConfirm) {
      this.userS.signUp(data).subscribe((res: any) => {
        console.log(res)
        this.addedUser = res.data.user
        this.container.clear()
        this.container?.createEmbeddedView(this.addProfile).detectChanges()
        this.root.navigateByUrl('/admin/gestiondeprofile')
      })
    } else {
      alert('les mots de passe ne sont pas identiques')
    }

  }

  submitProfile() {
    this.addProfileForm.setControl('user', this.addedUser._id)
    let data = this.addProfileForm.getRawValue()
    this.profileS.createProfile(data).subscribe((res: any) => {
      console.log(res)
      this.root.navigateByUrl('/admin/gestiondeprofile')
    })
  }

  ngAfterViewInit(){
    this.container?.createEmbeddedView(this.addUser).detectChanges();
  }

}
