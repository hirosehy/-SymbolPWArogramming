import * as fs from 'fs'

class Symbolization {
  private originalFile: string = ''

  public convertion() {
    this.originalFile = fs.readFileSync('./test.js', 'utf-8')
  }

  private toSymbol(char:string):string {
    if (char.length > 1) throw new Error('Only one character can be used for the argument.')
    const code: string = this.zeroPadding(4, char.charCodeAt(0).toString(16))
    
    const symbol = '[]' +
    '[([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]'+ // [constructor]
    '[([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]'+ // [constructor]
    '(' +
    '(!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+' + // return 
    '(/"/+[])[-~[]]+ (/\\/+[])[-~[]]+([][[]]+[])[+[]]+' + // \"\\u
    code.split("").map( n => {
      return this.numberToSymbol(Number(n))
    }).join('') +
    '(/"/+[])[-~[]]' + // \"
    ')' +
    '()'

    return symbol
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
