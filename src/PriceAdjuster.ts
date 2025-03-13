// Purpose of this file is to implement functionality to reduce food item price
// based on how close current date is to expiry date

import { FoodItem } from "./FoodItem";

export class PriceAdjuster {
    
    shouldUpdatePrice(date1: Date, date2: Date, daysInBetween: Number) {
        return true
    }
    
    checkPrice(foodItems: FoodItem[]) {
        for (let i = 0; i < foodItems.length; i++) {
            const foodItem = foodItems[i];

            if (foodItem.category === 'Dairy' && this.shouldUpdatePrice(foodItem.expiry_date, new Date('2024-06-10'), 4)) {
                foodItem.price. reduce by 50%
            } else if (foodItem.category === 'Canned Goods') {
    
            } else if (foodItem.category === 'Vegetables') {

            }
            
        }
    }
}

//This is the strategy for price reduction: For Dairy products the price should be reduced 
// by 50% when the expiry date is less than 4 days into the future. For Canned goods 
// the price should be reduced by 25% when the expiry date is less than 3 months into 
// the future. For Vegetables the price should be reduced by 40% when the expiry date 
// is less than 3 days into the future.