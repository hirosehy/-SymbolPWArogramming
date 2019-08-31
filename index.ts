import * as fs from 'fs'

const program = require('commander')

program
  .version('0.0.1', '-v, --version')
  .option('-c, --convetion <n>', 'Convertion file path')
  .option('-o, --output <n>', 'Converted file output path')
  .parse(process.argv)

class Symbolization {
  private originalFile: string = ''
  private convertedFile: string = ''


  constructor() {
    if (
      program.output === 'index.js' ||
      program.output === './index.js' ||
      program.output === 'index.ts' ||
      program.output === 'index.ts'
    ) {
      throw new Error('Output path name cannot be used.')
    }
  }

  public convertion() {
    this.originalFile = fs.readFileSync(program.convetion, 'utf-8')
    this.convertedFile = this.originalFile.split('').map((s, index) => {
      if (index === this.originalFile.length - 1) {
        return this.toSymbol(s)
      } else {
        return this.toSymbol(s) + '+'
      }
    }).join('')

    this.convertedFile = '_=[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]](' + this.convertedFile + ')()'

    this.outputFile(this.convertedFile)
  }

  private outputFile(text: string): void {
    fs.writeFileSync(program.output, text);
  }

  private toSymbol(char:string):string {
    if (char.length > 1) throw new Error('Only one character can be used for the argument.')
    const code: string = this.zeroPadding(4, char.charCodeAt(0).toString(16))
    
    // []['constructor']['constructor']('return "\u{code}"')()
    const symbol = '[]' +
    '[([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]' +
    '[([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]' +
    '(' +
    '(!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+' + // return 
    '(/"/+[])[-~[]]+(/\\\\/+[])[-~[]]+([][[]]+[])[+[]]+' + // \"\\u
    code.split("").map( n => {
      return this.numberToSymbol(parseInt(n, 16)) + '+'
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
    switch(true) {
      case number === 0:
        return '-[]'
      case number > 0 && number < 10:
        return '-~'.repeat(number) + '[]'
      case number === 10:
        return '(![]+[])[-~[]]'
      case number === 11:
        return '([]+{})[-~-~[]]'
      case number === 12:
        return '([]+{})[-~-~-~-~-~[]]'
      case number === 13:
        return '([][[]]+[])[-~-~[]]'
      case number === 14:
        return '(!![]+[])[-~-~-~[]]'
      case number === 15:
        return '(![]+[])[+[]]'
      default:
        throw new Error('Number must be between 0 and 15')
    }
  }
}

const symbolization = new Symbolization()
symbolization.convertion()
