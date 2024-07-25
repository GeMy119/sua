import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FindVisitService } from './services/find-visit.service';

@Component({
  selector: 'app-find-visit',
  templateUrl: './find-visit.component.html',
  styleUrls: ['./find-visit.component.css']
})
export class FindVisitComponent implements OnInit {
  visitForm: FormGroup;
  inquiryResult: string | false = false; // Display error message in Arabic
  captchaText: { char: string, color: string }[] = [];
  captchaString: string = ''; // متغير لتخزين نص الكابتشا بدون ألوان
  colors: string[] = [
    '#000000', '#330000', '#660000', '#990000', '#CC0000', '#FF0000', // درجات الأسود والأحمر
  ];

  constructor(
    private formBuilder: FormBuilder,
    private findVisitService: FindVisitService,
    private router: Router
  ) {
    this.visitForm = this.formBuilder.group({
      visaNo: ['', Validators.required], // Example pattern for numbers
      captcha: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.generateCaptcha();
  }

  submitForm() {
    if (this.visitForm.valid) {
      if (this.visitForm.get('captcha')!.value === this.captchaString) {
        const visaNo = this.visitForm.get('visaNo')!.value;
        this.findVisitService.getVisit(visaNo)
          .subscribe(
            (response) => {
              if (response && response.data) {
                this.router.navigate(['/visit-show'], { state: { data: response.data } });
              } else {
                this.inquiryResult = 'لم يتم العثور على التأشيره';
              }
            },
            (error) => {
              if (error.status === 404) {
                this.inquiryResult = 'لم يتم العثور على التأشيره';
              } else {
                console.error('خطأ في الاستفسار عن التأشيره:', error);
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
    this.visitForm.reset();
    this.generateCaptcha();
  }

  generateCaptcha() {
    const chars = '0123456789';
    this.captchaText = [];
    this.captchaString = ''; // إعادة تعيين النص بدون ألوان
    for (let i = 0; i < 5; i++) {
      const char = chars.charAt(Math.floor(Math.random() * chars.length));
      const color = this.colors[Math.floor(Math.random() * this.colors.length)];
      this.captchaText.push({ char, color });
      this.captchaString += char; // تجميع النص بدون ألوان
    }
  }
}