import * as fs from 'fs'

class Symbolization {
  private originalFile: string = ''

  public convertion() {
    this.originalFile = fs.readFileSync('./test.js', 'utf-8')
  }

}

const symbolization = new Symbolization()
symbolization.convertion()
