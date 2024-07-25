import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionService } from './services/transaction.service';

@Component({
  selector: 'app-moamla',
  templateUrl: './moamla.component.html',
  styleUrls: ['./moamla.component.css']
})
export class MoamlaComponent implements OnInit {
  moamlaForm: FormGroup;
  captchaText: { char: string, color: string }[] = [];
  colors: string[] = [
    '#000000', '#330000', '#660000', '#990000', '#CC0000', '#FF0000', // درجات الأسود والأحمر
  ];
  inquiryResult: string | null = null;
  captchaString: string = ''

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private transactionService: TransactionService
  ) {
    this.moamlaForm = this.formBuilder.group({
      transactionNumber: ['', Validators.required],
      captcha: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.generateCaptcha();
  }

  inquireAboutTransaction(transactionNumber: string) {
    return this.transactionService.inquireAboutTransaction(transactionNumber);
  }

  submitForm() {
    if (this.moamlaForm.valid) {
      const captchaValue = this.moamlaForm.get('captcha')?.value;
      const transactionNumber = this.moamlaForm.get('transactionNumber')?.value;
      if (captchaValue === this.captchaString) {
        if (transactionNumber) {
          this.inquireAboutTransaction(transactionNumber).subscribe(
            (response) => {
              if (response && response.data) {
                this.router.navigate(['/ardmoamla'], { state: { data: response.data } });
              } else {
                this.inquiryResult = "لم نعثر علي هذا الرقم الرجاء المحاولة مرة اخري";
              }
            },
            (error) => {
              if (error.status === 404) {
                this.inquiryResult = "لم نعثر علي هذا الرقم الرجاء المحاولة مرة اخري";
              } else {
                this.inquiryResult = "حدث خطأ. يرجى المحاولة مرة أخرى لاحقًا.";
                console.error('Error inquiring about transaction:', error);
              }
            }
          );
        } else {
          this.inquiryResult = 'الرجاء ادخال رقم المعاملة';
        }
      } else {
        this.inquiryResult = 'كلمة التحقق غير صحيحة. حاول مرة اخرى.';
      }
    } else {
      this.inquiryResult = 'النموذج غير صالح. يرجى ملء جميع الحقول المطلوبة.';
    }
  }

  clearForm() {
    this.moamlaForm.reset();
    this.generateCaptcha();
    this.inquiryResult = null;
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
