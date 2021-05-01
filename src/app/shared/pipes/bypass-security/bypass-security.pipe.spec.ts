import { TestBed } from '@angular/core/testing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

import { BypassSecurityPipe } from './bypass-security.pipe';

describe('BypassSecurityPipe', () => {
  let pipe: BypassSecurityPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BypassSecurityPipe],
      imports: [BrowserModule],
      providers: [
        BypassSecurityPipe,
        {
          provide: DomSanitizer,
          useValue: {
            sanitize: (ctx: any, val: string) => val,
            bypassSecurityTrustHtml: (val: string) => val,
            bypassSecurityTrustStyle: (val: string) => val,
            bypassSecurityTrustScript: (val: string) => val,
            bypassSecurityTrustUrl: (val: string) => val,
            bypassSecurityTrustResourceUrl: (val: string) => val,
          },
        },
      ],
    });
    pipe = TestBed.inject(BypassSecurityPipe);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
