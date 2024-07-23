import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-ard-visit',
  templateUrl: './ard-visit.component.html',
  styleUrls: ['./ard-visit.component.css']
})
export class ArdVisitComponent implements OnInit {
  data: any = {}; // Initialize data as an empty object
  images: string[] = [];

  print() {
    window.print();
  }

  ngOnInit(): void {
    this.data = history.state.data || {}; // Ensure data is not undefined
    this.fetchImagesFromDatabase();
  }

  fetchImagesFromDatabase() {
    if (this.data && this.data.image && this.data.barcodeImage) {
      this.images = [
        this.data.image,
        this.data.barcodeImage
      ];
    } else {
      console.warn('Image paths are missing in data:', this.data);
    }
  }

  async downloadPDF() {
    const element = document.getElementById('visa-container');
    if (element) {
      try {
        // Ensure images are loaded
        await this.preloadImages();

        // Render the page into a canvas
        const canvas = await html2canvas(element, {
          scale: 2,
          useCORS: true // Enable CORS if images are from a different origin
        });
        const imgData = canvas.toDataURL('image/png');

        // Create a PDF document
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'px',
          format: [canvas.width, canvas.height]
        });

        // Add the canvas image to the PDF
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);

        // Save the PDF
        pdf.save(`visa-details-${this.data.name}.pdf`);
      } catch (error) {
        console.error('Error in generating PDF:', error);
      }
    } else {
      console.error('Element not found');
    }
  }

  preloadImages(): Promise<void> {
    const imagePromises = this.images.map((imgUrl) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous'; // Handle CORS issues
        img.src = imgUrl;
        img.onload = () => resolve();
        img.onerror = (err) => reject(err);
      });
    });

    return Promise.all(imagePromises).then(() => {
      console.log('All images loaded');
    }).catch((error) => {
      console.error('Error preloading images:', error);
    });
  }
}
