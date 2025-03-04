/* import fs from 'fs'
import { Supplier } from './Supplier'

export class QualityReader {
    filePath = './data/supplierQuality.csv'

    async main() {
        return await this.readFile()
    }

    async readFile() {
        const suppliers: Supplier[] = []
        fs.readFile(this.filePath, 'utf-8', (err, fileContent) => {
            if (err) {
                console.log(err)
            } else {
                const lines = fileContent.split('\r\n')
                for (let i = 0; i < lines.length; i++) {
                    const productString = lines[i];  
                    const values = productString.split(',')
                    const priceSplit = values[3].split('$')
                    const product = new Supplier(values[0], values[1])
                    suppliers.push(product)
                }
            }
        }) 
        return suppliers  
    }
} */

import fs from 'fs'
import { Supplier } from './Supplier'

export class QualityReader {
    filePath = './data/supplierQuality.csv'

    async main() {
        return await this.readFile()
    }

    async readFile() {
       return new Promise<Supplier[]>((resolve, reject) => { 
            fs.readFile(this.filePath, 'utf-8', (err, fileContent) => {
                const suppliers: Supplier[] = []
                if (err) {
                    console.log(err)
                    reject(err)
                } else {
                    const lines = fileContent.split('\r\n')
                    for (let i = 0; i < lines.length; i++) {
                        const productString = lines[i];  
                        const values = productString.split(',')
                        //const priceSplit = values[3].split('$')
                        const product = new Supplier(values[0], values[1])
                        suppliers.push(product)
                    }
                }
                resolve(suppliers)
            }) 
              
        })
    }
}