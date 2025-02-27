import { InventoryReader } from "./InventoryReader"

async function run() {
    const inventoryReader = new InventoryReader()
    const actualProducts = await inventoryReader.main()
    console.log(actualProducts)
}

run()

// Which one to use:  Inventory or FoodItem?
// I wanted to use inventoryData.ts as a landing spot for 