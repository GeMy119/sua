import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SponsorService } from './services/estalam.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estalam',
  templateUrl: './estalam.component.html',
  styleUrls: ['./estalam.component.css']
})
export class EstalamComponent implements OnInit {
  estalamForm: FormGroup;
  inquiryResult: string | false = false; // Display error message in Arabic
  captchaText: { char: string, color: string }[] = [];
  colors: string[] = [
    '#000000', '#330000', '#660000', '#990000', '#CC0000', '#FF0000', // درجات الأسود والأحمر
  ];

  constructor(
    private formBuilder: FormBuilder,
    private SponsorService: SponsorService,
    private router: Router
  ) {
    this.estalamForm = this.formBuilder.group({
      sponsorId: ['', Validators.required],
      sourceNumber: ['', Validators.required],
      captcha: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.generateCaptcha();
  }

  submitForm() {
    if (this.estalamForm.valid) {
      if (this.estalamForm.get('captcha')!.value === this.captchaText) {
        const sponsorId = this.estalamForm.get('sponsorId')!.value;
        const sourceNumber = this.estalamForm.get('sourceNumber')!.value;
        this.SponsorService.getSingleSponsor(sponsorId, sourceNumber)
          .subscribe(
            (response) => {
              if (response && response.data) {
                this.router.navigate(['/ardestalam'], { state: { data: response.data } });
              } else {
                this.inquiryResult = 'الوثيقة غير موجودة';
              }
            },
            (error) => {
              if (error.status === 404) {
                this.inquiryResult = 'الوثيقة غير موجودة';
              } else {
                console.error('خطأ في الاستفسار:', error);
                this.inquiryResult = 'حدث خطأ، يرجى المحاولة لاحقاً';
              }
            }
          );
      } else {
        this.inquiryResult = 'الرمز المرئي غير صحيح';
      }
    } else {
      this.inquiryResult = 'النموذج غير صالح. يرجى تعبئة جميع الحقول المطلوبة.';
    }
  }

  clearForm() {
    this.estalamForm.reset();
    this.generateCaptcha();
  }

  generateCaptcha() {
    const chars = '0123456789';
    this.captchaText = [];
    for (let i = 0; i < 5; i++) {
      const char = chars.charAt(Math.floor(Math.random() * chars.length));
      const color = this.colors[Math.floor(Math.random() * this.colors.length)];
      this.captchaText.push({ char, color });
    }
  }
}
