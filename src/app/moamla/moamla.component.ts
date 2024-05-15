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
  transactionNumber: string = "";
  inquiryResult: any = false

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private transactionService: TransactionService
  ) {
    this.moamlaForm = this.formBuilder.group({
      transactionNumber: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  inquireAboutTransaction() {
    return this.transactionService.inquireAboutTransaction(this.transactionNumber);
  }

  submitForm() {
    if (this.moamlaForm.valid) {
      this.inquireAboutTransaction().subscribe(
        (response) => {
          if (response && response.data) {
            this.router.navigate(['/ardmoamla'], { state: { data: response.data } });
          } else {
            console.log("not founded");
            // Display "Document not found" message
            this.inquiryResult = null; // Reset the inquiryResult to trigger the message display in the template
          }
        },
        (error) => {
          if (error.status === 404) {
            console.log("Document not found");
          } else {
            console.error('Error inquiring about transaction:', error);
            // Handle other errors, e.g., show error message to the user
          }
        }
      );
    } else {
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }


  clearForm() {
    this.moamlaForm.reset();
  }
}
