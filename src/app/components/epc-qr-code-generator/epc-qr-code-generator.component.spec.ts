import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpcQrCodeGeneratorComponent } from './epc-qr-code-generator.component';

describe('EpcQrCodeGeneratorComponent', () => {
  let component: EpcQrCodeGeneratorComponent;
  let fixture: ComponentFixture<EpcQrCodeGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpcQrCodeGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpcQrCodeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
