import { FoodItem } from "./FoodItem"
import { InventoryReader } from "./InventoryReader"

async function run() {
    const inventoryReader = new InventoryReader()
    const actualProducts = await inventoryReader.main()
    console.log(actualProducts)
}

run()