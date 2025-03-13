import { ExpirationAdjuster } from "./ExpirationAdjuster"
import { FoodItem } from "./FoodItem"
import { InventoryReader } from "./InventoryReader"
import { QualityReader } from "./QualityReader"


async function runQuality() {
    const inventoryReader = new InventoryReader()  // this is an instantiation of InventoryReader (calling the constructor); inventoryReader is holding the instance
    const actualProducts = await inventoryReader.main()  // calling the main function from instance of the InventoryReader class
    //console.log("Actual Products Before:", actualProducts)
    const qualityReader = new QualityReader()
    const actualQuality = await qualityReader.main()
    const myExpirationAdjuster = new ExpirationAdjuster()
    const adjustedProducts = myExpirationAdjuster.checkQuality(actualQuality, actualProducts);
    //myExpirationAdjuster.checkQuality(actualQuality, actualProducts)
    console.log("Adjusted Products After Expiration Adjustment:", adjustedProducts)
    //console.log(actualQuality)
}

runQuality()