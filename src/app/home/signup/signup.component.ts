import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { EmailNotTakenValidatorService } from './email-not-taken.validator.service';
import { NovoUsuario } from './novo-usuario';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
  selector: 'mgsn-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, AfterViewChecked {
  
  signupForm: FormGroup;
  @ViewChild('emailInput', {static: false}) emailImput: ElementRef<HTMLInputElement>;

  constructor(
      private formBuilder: FormBuilder,
      private emailNotTakenValidatorServices: EmailNotTakenValidatorService,
      private signupService: SignupService,
      private router: Router,
      private platformDetectorService: PlatformDetectorService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', 
        [
          Validators.required,
          Validators.email
        ],
        this.emailNotTakenValidatorServices.checkEmailTaken()
      ],
      nome: ['', 
        [
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30)
        ]
      ],
      nomeCompleto: ['', 
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40)
      ]
    ],
      senha: ['', 
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14)
        ]
      ]
    });
    
  }

  ngAfterViewChecked(): void {
    this.platformDetectorService.isPlatformBrowser &&
              this.emailImput.nativeElement.focus();
  }

  signup() {
    const novoUsuario = this.signupForm.getRawValue() as NovoUsuario;
    this.signupService
      .signup(novoUsuario)
      .subscribe(
        () => this.router.navigate(['']),
        err => console.log(err));
  }

}
