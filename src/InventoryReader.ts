import fs from 'fs'
import { FoodItem } from './FoodItem'

export class InventoryReader {
    filePath = './data/inventory.csv'

    async main() {
        return await this.readFile()
    }

    async readFile() {
        return new Promise<FoodItem[]>((resolve, reject) => {
            fs.readFile(this.filePath, 'utf-8', (err, fileContent) => {
                const foodItems: FoodItem[] = []
                if (err) {
                    console.log(err)
                    reject(err)
                } else {
                    const lines = fileContent.split('\r\n')
                    for (let i = 0; i < lines.length; i++) {
                        const productString = lines[i];  
                        const values = productString.split(',')
                        const priceSplit = values[3].split('$')
                        const product = new FoodItem(values[0], values[1], new Date(values[2]), Number(priceSplit[1]), values[4])
                        foodItems.push(product)
                    }
                }
                resolve(foodItems)
            })
        })
    }
}