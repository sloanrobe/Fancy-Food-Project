// Purpose of this file is to implement functionality to reduce food item price
// based on how close current date is to expiry date

import { FoodItem } from "./FoodItem";

export class PriceAdjuster {
    
    shouldUpdatePrice(date1: Date, date2: Date, daysInBetween: Number) {
       return true
    }
    
    checkPrice(foodItems: FoodItem[]) {
        const today = new Date('2024-06-10')
        
        for (let i = 0; i < foodItems.length; i++) {
            const foodItem = foodItems[i];

            if (foodItem.category === 'Dairy' && this.shouldUpdatePrice(foodItem.expiry_date, new Date('2024-06-10'), 4)) {
                foodItem.price *= 0.5
            } else if (foodItem.category === 'Vegetables' && this.shouldUpdatePrice(foodItem.expiry_date, new Date('2024-06-10'), 3)) {
                foodItem.price *= 0.6
            } else if (foodItem.category === 'Canned Goods') {
                const expiryDate = new Date(foodItem.expiry_date)
                const threeMonthsFromNow = new Date(today)
                threeMonthsFromNow.setMonth(today.getMonth() + 3)
                if (expiryDate < threeMonthsFromNow) {
                    foodItem.price *= 0.75
                } 
            } else {
                console.log('We do not recognize that food item category.')
            }
        }
        return
    }
}