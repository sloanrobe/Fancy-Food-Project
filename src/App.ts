import { FoodItem } from "./FoodItem"
import { InventoryReader } from "./InventoryReader"
import { QualityReader } from "./QualityReader"

async function runInventory() {
    const inventoryReader = new InventoryReader()
    const actualProducts = await inventoryReader.main()
    console.log(actualProducts)
}

async function runQuality() {
    const qualityReader = new QualityReader()
    const actualQuality = await qualityReader.main()
    console.log(actualQuality)
}

runInventory()
runQuality()