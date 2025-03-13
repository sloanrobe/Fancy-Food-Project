/* import fs from 'fs'
import { FoodItem } from './FoodItem'

export class InventoryReader {
    filePath = './data/inventory.csv'

    async main() {
        return await this.readFile()
    }

    readFile() {
        const foodItems: FoodItem[] = []
        fs.readFile(this.filePath, 'utf-8', (err, fileContent) => {
            if (err) {
                console.log(err)
            } else {
                const lines = fileContent.split('\r\n')
                for (let i = 0; i < lines.length; i++) {
                    const productString = lines[i];  
                    const values = productString.split(',')
                    const priceSplit = values[3].split('$')
                    const product = new FoodItem(values[0], values[1], values[2], Number(priceSplit[1]), values[4])
                    foodItems.push(product)
                }
            }
        }) 
        return foodItems  
    }
} */

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

/* 
    import fs from 'fs/promises'
    import { FoodItem } from './FoodItem'
    
    export class InventoryReader {
        filePath = './data/inventory.csv'
    
        async main(): Promise<FoodItem[]> {
            return await this.readFile()
        }
    
        async readFile(): Promise<FoodItem[]> {
            try {
                const fileContent = await fs.readFile(this.filePath, 'utf-8')
                const lines = fileContent.split('\r\n')
    
                const foodItems = lines.map((line) => {
                    const values = line.split(',')
                    const priceSplit = values[3].split('$')
                    return new FoodItem(values[0], values[1], values[2], Number(priceSplit[1]), values[4])
                });
    
                return foodItems
            } catch (error) {
                console.error('Error reading file:', error)
                return []
            }
        }
    } */