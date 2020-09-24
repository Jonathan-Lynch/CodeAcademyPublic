import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  formUserProfile: FormGroup;
  lastName: FormControl;
  validAges: number[] = [...Array(100).keys()];
  readonly MAX_LENGTH = 25;

  constructor(private formBuilder: FormBuilder ) {
    this.lastName = new FormControl('', Validators.maxLength(this.MAX_LENGTH));
    this.formUserProfile = this.formBuilder.group({
      firstName: ['', Validators.maxLength(this.MAX_LENGTH)],
      lastName: this.lastName,
      age: ['', ],
      isAdmin: ['', ],
      profileImageUrl: ['', ]
    });

    // remove the first element from the array since 0 isn't an age
    this.validAges.shift();
  }

  get firstNameError() {
    return !this.formUserProfile.controls.firstName.valid && this.formUserProfile.controls.firstName.touched;
  }

  get lastNameError() {
    return !this.lastName.valid && this.lastName.touched;
  }
  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formUserProfile.value);
  }
}
