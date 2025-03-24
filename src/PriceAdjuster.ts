import { FoodItem } from "./FoodItem";

export class PriceAdjuster {
    
    shouldUpdatePrice(date1: Date, date2: Date, daysInBetween: number) {
        const differenceInTime = date1.getTime() - date2.getTime();
        const differenceInDays = differenceInTime / (1000 * 3600 * 24);

        return differenceInDays <= daysInBetween && differenceInDays >= 0;
    }
    
    logReducedPrice(chickenWing: FoodItem) {
        console.log(`${chickenWing.item} has a reduced price of $${chickenWing.price.toFixed(2)}.`)
    }
    
    checkPrice(foodItems: FoodItem[]) {
        const today = new Date('2024-06-10')
        foodItems = foodItems.slice(1)

        for (let i = 0; i < foodItems.length; i++) {
            const foodItem = foodItems[i]
            const expiryDate = new Date(foodItem.expiry_date)

            if (expiryDate < today) {
                console.log(`${foodItem.item} is expired and must be thrown out!`)
                continue
            }
            if (foodItem.category === 'Dairy') {
                if (this.shouldUpdatePrice(foodItem.expiry_date, new Date('2024-06-10'), 4)) {
                    foodItem.price *= 0.5
                    this.logReducedPrice(foodItem)
                }   
            } else if (foodItem.category === 'Vegetables') {
                if (this.shouldUpdatePrice(foodItem.expiry_date, new Date('2024-06-10'), 3)) {
                    foodItem.price *= 0.6
                    this.logReducedPrice(foodItem)
                }    
            } else if (foodItem.category === 'Canned Goods') {
                const expiryDate = new Date(foodItem.expiry_date)
                const threeMonthsFromNow = new Date(today)
                threeMonthsFromNow.setMonth(today.getMonth() + 3)
                if (expiryDate < threeMonthsFromNow) {
                    foodItem.price *= 0.75
                    this.logReducedPrice(foodItem)
                } 
            } else {
                console.log('We do not recognize that food item category.', foodItem.item)
            } 
        }
    }
}