import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-ard-visit',
  templateUrl: './ard-visit.component.html',
  styleUrls: ['./ard-visit.component.css']
})
export class ArdVisitComponent implements OnInit {
  data: any
  print() {
    window.print();
  }
  ngOnInit(): void {
    // Retrieve the state data from the ActivatedRoute
    this.data = history.state.data;
    console.log(this.data); // For debugging
  }

  downloadPDF() {
    const element = document.getElementById('visa-container');
    if (element) {
      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('visa-details.pdf');
      });
    } else {
      console.error('Element not found');
    }
  }
}
