import { Component, OnInit, ElementRef, ViewChild, AfterContentInit, AfterViewChecked } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
  selector: 'mgsn-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, AfterViewChecked {
  

  loginForm: FormGroup;
  @ViewChild('userNameInput', {static: false}) 
  userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    
  }

  ngAfterViewChecked(): void {
    this.platformDetectorService.isPlatformBrowser &&
              this.userNameInput.nativeElement.focus();
  }

  login() {
    
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;
    this.authService
      .authenticate(userName, password)
      .subscribe(
        () => this.router.navigate(['/u']),
        err => {
            console.log(err);
            this.loginForm.reset();
            
            this.platformDetectorService.isPlatformBrowser &&
              this.userNameInput.nativeElement.focus();

            alert('Usuário ou senha invalida!');
        }
      );
  }
}
