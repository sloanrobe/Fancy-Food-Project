import fs from 'fs'

export class Inventory {
    filePath = './data/inventory.csv'

    async main() {
        await this.readFile()
    }

    async readFile() {
        fs.readFile(this.filePath, 'utf-8', (err, fileContent) => {
            if (err) {
                console.log(err)
            } else {
                const lines = fileContent.split('\r\n')
                console.log(lines)
            }
        })
    }
}

const inventory = new Inventory()
inventory.main()

// Which one to use:  Inventory or FoodItem?
// I wanted to use inventoryData.ts as a landing spot for 