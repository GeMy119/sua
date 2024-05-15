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
  inquiryResult: boolean = false

  constructor(private formBuilder: FormBuilder, private SponsorService: SponsorService, private router: Router) {
    this.estalamForm = this.formBuilder.group({
      sponsorId: ['', Validators.required],
      sourceNumber: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.estalamForm.valid) {
      const sponsorId = this.estalamForm.get('sponsorId')!.value;
      const sourceNumber = this.estalamForm.get('sourceNumber')!.value;
      console.log(sponsorId)
      this.SponsorService.getSingleSponsor(sponsorId, sourceNumber)
        .subscribe(
          (response) => {
            console.log('Response:', response);
            if (response && response.data) {
              this.router.navigate(['/ardestalam'], { state: { data: response.data } });
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
    this.estalamForm.reset();
  }

}
