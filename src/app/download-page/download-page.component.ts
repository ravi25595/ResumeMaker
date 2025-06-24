import { Component, Injector } from '@angular/core';
import { Template1Component } from "../Templates/template1/template1.component";
import { NgComponentOutlet } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Template3Component } from '../Templates/template3/template3.component';
import { Template2Component } from '../Templates/template2/template2.component';
import * as htmlDocx from 'html-docx-js-typescript';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-download-page',
  imports: [NgComponentOutlet, MatIconModule, MatButtonModule],
  templateUrl: './download-page.component.html',
  styleUrl: './download-page.component.scss'
})
export class DownloadPageComponent {
  resume: any;
  template: any = null;
  templateIndex: number = 0;
  injector: Injector | undefined;
  templates = [
    { component: Template1Component },
    { component: Template2Component },
    { component: Template3Component },
    { component: Template1Component },
    { component: Template1Component }
  ];
  get customInjector(): Injector {
    return Injector.create({
      providers: [
        { provide: 'templateData', useValue: this.resume }
      ],
      parent: this.injector  // Use the injected instance
    });
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const tempString = localStorage.getItem('selectedTemplate')
    if (tempString)
      this.templateIndex = parseInt(tempString)
    const resumeString = localStorage.getItem('resume')
    if (resumeString) {
      this.resume = JSON.parse(resumeString)
    }
  }
  async downloadDocx() {
    const content = document.getElementById('pdf-content');
    if (!content) {
      console.log('dowload-docs' + content)
      return;
    }
    const html = `
       <!DOCTYPE html>
      <html>
        <head><meta charset="utf-8"></head>
        <body>${content.outerHTML}</body>
      </html>
    `
    const result = await htmlDocx.asBlob(html);
    let blob: Blob;
    if (result instanceof Blob) {
      blob = result;
    } else if (result instanceof ArrayBuffer) {
      blob = new Blob([result], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    } else if (result instanceof Uint8Array) {
      blob = new Blob([result], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    } else {
      // Fallback: try to convert Buffer (Node.js) to Blob
      blob = new Blob([result]);
    }
    saveAs(blob, 'resume-document.docx');
  }
  downloadPDF(): void {
    const content = document.getElementById('pdf-content');
    if (!content) {
      console.log('dowload-pdf' + content)
      return;
    }
    html2canvas(content, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('resume.pdf');
      console.log('dowload-pdf')
    });
  }
}
