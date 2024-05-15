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
  inquiryResult: any = false


  constructor(
    private formBuilder: FormBuilder,
    private mariagePermitService: MariagePermitService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.marriageForm = this.formBuilder.group({
      idNumber: ['', Validators.required],
      issueNumber: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.marriageForm.valid) {
      const idNumber = this.marriageForm.get('idNumber')!.value;
      const issueNumber = this.marriageForm.get('issueNumber')!.value;
      console.log(idNumber)
      this.mariagePermitService.findMariagePermit(idNumber, issueNumber)
        .subscribe(
          (response) => {
            console.log('Response:', response);
            if (response && response.data) {
              this.router.navigate(['/ardmarri'], { state: { data: response.data } });
            } else {
              console.log('Document not found');
            }
          },
          (error) => {
            if (error.status === 404) {
              console.log("Document not found");
              // Display "Document not found" message
              this.inquiryResult = true; // Reset the inquiryResult to trigger the message display in the template
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
    this.marriageForm.reset();
  }
}
