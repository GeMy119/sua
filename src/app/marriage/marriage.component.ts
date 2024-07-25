import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MariagePermitService } from './services/mariage-permit.service';

@Component({
  selector: 'app-marriage',
  templateUrl: './marriage.component.html',
  styleUrls: ['./marriage.component.css']
})
export class MarriageComponent implements OnInit {
  marriageForm!: FormGroup;
  inquiryResult: string | false = false;
  captchaText: { char: string, color: string }[] = [];
  captchaString: string = ''
  colors: string[] = [
    '#000000', '#330000', '#660000', '#990000', '#CC0000', '#FF0000', // درجات الأسود والأحمر
  ];
  constructor(
    private formBuilder: FormBuilder,
    private mariagePermitService: MariagePermitService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.generateCaptcha();
    this.marriageForm = this.formBuilder.group({
      idNumber: ['', Validators.required], // Example pattern for 10-digit number
      issueNumber: ['', Validators.required], // Example pattern for 6-digit number
      captcha: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.marriageForm.valid) {
      if (this.marriageForm.get('captcha')!.value === this.captchaString) {
        const idNumber = this.marriageForm.get('idNumber')!.value;
        const issueNumber = this.marriageForm.get('issueNumber')!.value;
        this.mariagePermitService.findMariagePermit(idNumber, issueNumber)
          .subscribe(
            (response) => {
              if (response && response.data) {
                this.router.navigate(['/ardmarri'], { state: { data: response.data } });
              } else {
                this.inquiryResult = 'لم يتم العثور على الوثيقة الرجاء التأكد من رقم الهوية و رقم الاصدار';
              }
            },
            (error) => {
              if (error.status === 404) {
                this.inquiryResult = 'لم يتم العثور على الوثيقة';
              } else {
                console.error('خطأ في الاستفسار عن التصريح:', error);
                this.inquiryResult = 'حدث خطأ، يرجى المحاولة لاحقاً';
              }
            }
          );
      }
      else {
        this.inquiryResult = 'الرمز المرئي غير صحيح';
      }
    }
    else {
      this.inquiryResult = 'النموذج غير صالح. يرجى تعبئة جميع الحقول المطلوبة.';
    }
  }

  clearForm() {
    this.marriageForm.reset();
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
