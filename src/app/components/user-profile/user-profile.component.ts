import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  name = "Sonal"
  age = 24
  status = "Single"
  isButtonDisabled = false
  inputValue = "test"

  // onChange(e:Event) {
  //   const value = (e.target as HTMLInputElement).value;
  //   // console.log(value);
  //   // console.log("I am working....")
  //   this.inputValue =value
  // }
}