import { Component, ViewChild, ElementRef } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms';
//import { } from '../../../assets/js/kotlin.js'
//import { KotlinMppTest, EpcQrCodeCreator, CreatorParam } from '../../../assets/js/KotlinMppTest.js'
import { BrowserQRCodeSvgWriter } from '@zxing/library'

@Component({
  selector: 'app-epc-qr-code-generator',
  templateUrl: './epc-qr-code-generator.component.html',
  styleUrls: ['./epc-qr-code-generator.component.scss']
})
export class EpcQrCodeGeneratorComponent {

  createEpcQrCodeForm: FormGroup

  @ViewChild('qrCodeView') qrCodeView: ElementRef


  constructor(
      private formBuilder: FormBuilder,
  ) {
    this.createEpcQrCodeForm = this.formBuilder.group({
      receiverName: '',
      iban: '',
      bic: '',
      amount: 0.0,
      reference: ''
    });
  }


  ensureCorrectNumberFormat(event: KeyboardEvent) {
    let input = event.target as HTMLInputElement

    let isNumberOrDot = Number.isInteger(parseInt(event.key)) || event.key == "."

    if (isNumberOrDot == false) {
      // TODO: JavaScript cannot convert strings with comma as decimal separator to number so i replace commas with dots. Get rid of this and let user enter commas.
      if (event.key == ",") {
        input.value = input.value + "."
      }

      // don't block control keys like Tab or Enter or arrow keys. For these 'key' contains its name which is always longer than 1 character
      let isControlKey = event.key.length > 1
      if (isControlKey == false) {
        event.preventDefault()
      }
    }
  }


  onSubmit(epcQrCodeData) {
    this.generateQrCode(epcQrCodeData.receiverName, epcQrCodeData.iban, epcQrCodeData.bic, epcQrCodeData.amount, epcQrCodeData.reference)
  }

  generateQrCode(receiverName: string, iban: string, bic: string, amount: number, reference: string) {

    // TODO: generate qrCodeContent with EpcQrCodeCreator
    // let creator = new EpcQrCodeCreator()
    // let param = new CreatorParam(receiverName, iban, bic, amount, reference)
    // this.qrCodeContent = creator.generateAsString(param)

    const qrCodeContent = "BCD" + "\n" + "002" + "\n" + this.map("Utf-8") + "\n" + "SCT" + "\n" +
        bic + "\n" + receiverName + "\n" + iban + "\n" + "EUR" + this.format(amount) + "\n" +
        "CHAR" + "\n" + "" + "\n" + reference

    const codeWriter = new BrowserQRCodeSvgWriter()
    const svgElement = codeWriter.write(qrCodeContent, 500, 500)

    this.qrCodeView.nativeElement.textContent = "" // clear current children

    this.qrCodeView.nativeElement.appendChild(svgElement)
  }

  map(encoding: String): number {
    // TODO
    switch (encoding) {
      case "Utf-8":
        return 1
      default:
        return 1
    }
  }

  format(amount: number): string {
    return amount.toString() // TODO
  }

}
