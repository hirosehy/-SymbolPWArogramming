'use strict';
var __importStar = (this && this.__importStar) || function (mod) {
  if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k]
    result['default'] = mod
    return result
};
Object.defineProperty(exports, '__esModule', { value: true })
var fs = __importStar(require('fs'))
var program = require('commander')
program
  .version('0.0.1', '-v, --version')
  .option('-c, --convetion <n>', 'Convertion file path')
  .option('-o, --output <n>', 'Converted file output path')
  .parse(process.argv)
var Symbolization = /** @class */ (function () {
  function Symbolization () {
    this.originalFile = ''
        this.convertedFile = ''
        if (program.output === 'index.js' ||
            program.output === './index.js' ||
            program.output === 'index.ts' ||
            program.output === 'index.ts') {
      throw new Error(program.output + ' is is a name that cannot be used as an output path.')
        }
  }
  Symbolization.prototype.convertion = function () {
    var _this = this
        this.originalFile = fs.readFileSync(program.convetion, 'utf-8')
        this.convertedFile = this.originalFile.split('').map(function (s, index) {
      if (index === _this.originalFile.length - 1) {
        return _this.toSymbol(s)
            } else {
        return _this.toSymbol(s) + '+'
            }
    }).join('')
        this.convertedFile = '_=[][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]][([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]](' + this.convertedFile + ')()'
        this.outputFile(this.convertedFile)
    };
  Symbolization.prototype.outputFile = function (text) {
    fs.writeFileSync(program.output, text)
    };
  Symbolization.prototype.toSymbol = function (char) {
    var _this = this
        if (char.length > 1)
      {throw new Error('Only one character can be used for the argument.');}
    var code = this.zeroPadding(4, char.charCodeAt(0).toString(16))
        // []['constructor']['constructor']('return "\u{code}"')()
        var symbol = '[]' +
            '[([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]' +
            '[([]+{})[-~-~-~-~-~[]]+([]+{})[-~[]]+([][[]]+[])[-~-~-~-~-~-~[]]+(![]+[])[-~-~-~[]]+(!![]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[+[]]+([]+{})[-~-~-~-~-~[]]+(!![]+[])[+[]]+([]+{})[-~[]]+(!![]+[])[-~[]]]' +
            '(' +
            '(!![]+[])[-~[]]+(!![]+[])[-~-~-~[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[-~[]]+([][[]]+[])[-~[]]+(/ /+[])[-~[]]+' + // return
            '(/"/+[])[-~[]]+(/\\\\/+[])[-~[]]+([][[]]+[])[+[]]+' + // \"\\u
            code.split('').map(function (n) {
              return _this.numberToSymbol(parseInt(n, 16)) + '+'
            }).join('') +
            '(/"/+[])[-~[]]' + // \"
            ')' +
            '()'
        return symbol
    };
  Symbolization.prototype.zeroPadding = function (digits, number) {
    if (digits < number.length)
      {throw new Error('The given number is greater than the specified number of digits');}
    return ('0'.repeat(digits) + number).slice(-digits)
    };
  Symbolization.prototype.numberToSymbol = function (number) {
    switch (true) {
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
    return Symbolization
}())
var symbolization = new Symbolization()
symbolization.convertion()
