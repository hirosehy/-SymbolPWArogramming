import * as fs from 'fs'

class Symbolization {
  private originalFile: string = ''

  public convertion() {
    this.originalFile = fs.readFileSync('./test.js', 'utf-8')
  }

  private zeroPadding(digits: number, number: string): string {
    if (digits < number.length) throw new Error('The given number is greater than the specified number of digits')
    return ('0'.repeat(digits) + number).slice(-digits)
  }

  private numberToSymbol(number: number): string {
    if (number === 0) {
      return '+[]'
    } else if (number < 10 && number > 0) {
      return '-~'.repeat(number) + '[]'
    } else {
      throw new Error('Number must be between 0 and 9')
    }
  }
}

const symbolization = new Symbolization()
symbolization.convertion()
