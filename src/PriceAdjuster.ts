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
                console.log(`The ${foodItem.item} has a reduced price of $${foodItem.price.toFixed(2)}.`)
            } else if (foodItem.category === 'Vegetables' && this.shouldUpdatePrice(foodItem.expiry_date, new Date('2024-06-10'), 3)) {
                foodItem.price *= 0.6
                console.log(`The ${foodItem.item} has a reduced price of $${foodItem.price.toFixed(2)}.`)
            } else if (foodItem.category === 'Canned Goods') {
                const expiryDate = new Date(foodItem.expiry_date)
                const threeMonthsFromNow = new Date(today)
                threeMonthsFromNow.setMonth(today.getMonth() + 3)
                if (expiryDate < threeMonthsFromNow) {
                    foodItem.price *= 0.75
                    console.log(`The ${foodItem.item} has a reduced price of $${foodItem.price.toFixed(2)}.`)
                } 
            } else if ((foodItem.category === 'Dairy' || 'Canned Goods' || 'Vegetables') && foodItem.expiry_date  ) {
                console.log (`The ${foodItem.item} has expired and needs to be thrown out.`)
            } else {
                console.log('We do not recognize that food item category.')
            }
        }
        return
    }
}