import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ngx-figma',
  template: `
    <iframe
      [height]="height"
      [width]="width"
      [src]="src"
      allowFullScreen>
    </iframe>`,
  styles: []
})
export class NgxFigmaComponent  {

  @Input() url: string;
  @Input() height = '450';
  @Input() width = '800';

  get src() {
      return this.sanitizer
        .bypassSecurityTrustResourceUrl(`https://www.figma.com/embed?embed_host=astra&url=${this.url}`);
  }

  constructor(private sanitizer: DomSanitizer) {

  }

}
