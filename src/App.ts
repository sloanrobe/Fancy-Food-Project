import { ExpirationAdjuster } from "./ExpirationAdjuster"
import { PriceAdjuster } from "./PriceAdjuster";
import { FoodItem } from "./FoodItem"
import { InventoryReader } from "./InventoryReader"
import { QualityReader } from "./QualityReader"


async function runQuality() {
    const inventoryReader = new InventoryReader()  // this is an instantiation of InventoryReader (calling the constructor); inventoryReader is holding the instance
    const actualProducts = await inventoryReader.main()  // calling the main function from instance of the InventoryReader class
    
    const qualityReader = new QualityReader()
    const actualQuality = await qualityReader.main()
    
    const myExpirationAdjuster = new ExpirationAdjuster()
    const adjustedProducts = myExpirationAdjuster.checkQuality(actualQuality, actualProducts)

    const myPriceAdjuster = new PriceAdjuster()
    myPriceAdjuster.checkPrice(adjustedProducts)

    /* for (let i = 0; i < adjustedProducts.length; i++) {
        const product = adjustedProducts[i]
        const today = new Date(2024-6-10)
        const expiryDate = new Date(product.expiry_date)

        if (expiryDate < today) {
            console.log(`The ${product} has expired and must be thrown out.`)
        } else {
            console.log(`The new reduced price of ${adjustedProducts[i]} is &{}`)
        } 
    } */
    
    //console.log("Adjusted Products After Expiration Adjustment:", adjustedProducts)
    return adjustedProducts
}

/* async function runPrice(adjustedProducts) {
    const priceAdjuster = new PriceAdjuster()
} */

runQuality()
//runPrice()