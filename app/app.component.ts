import { Component } from "@angular/core";
import { UserService } from "./shared/user/user.service";
import { User } from "./shared/user/user";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class AppComponent {
  user: User;
  isLoggingIn = true;

  constructor(private userService: UserService) {
    this.user = new User();
  }
  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }
  login() {
    // TODO: Define
  }
  signUp() {
    this.userService.register(this.user);
  }
  
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}