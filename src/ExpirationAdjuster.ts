// Purpose of this file is to implement functionality to adjust expiration dates for
// every food item that has quality of 'Ok'

import { FoodItem } from "./FoodItem"
import { InventoryReader } from "./InventoryReader"
import { QualityReader } from "./QualityReader"
import { Supplier } from "./Supplier"


export class ExpirationAdjuster {

    checkQuality(suppliers: Supplier[], foodItems: FoodItem[]) {
        for (let i = 0; i < suppliers.length; i++) {
            const element = suppliers[i];
            element.quality_score
            
            if (element.quality_score === 'Ok') {
                for (let j = 0; j < foodItems.length; j++) {
                    const foodItem = foodItems[j];

                    if (foodItem.supplier === element.supplier) {
                        let expiryDate = new Date(foodItem.expiry_date);
                        if (foodItem.category === 'Dairy') {
                            expiryDate.setDate(expiryDate.getDate() - 2)
                        } else if (foodItem.category === 'Vegetables') {
                            expiryDate.setDate(expiryDate.getDate() - 1)
                        } else if (foodItem.category === 'Canned Goods') {
                            expiryDate.setMonth(expiryDate.getMonth() - 1)
                        }
                    }
                }   
            }
        }
    }
}