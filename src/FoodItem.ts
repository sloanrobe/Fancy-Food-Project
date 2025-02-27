export class FoodItem {
    category: string;
    item: string;
    expiry_date: string;
    price: number;
    supplier: string;

    constructor(category: string, item: string, expiry_date: string, price: number, supplier: string) {
        this.category = category,
        this.item = item,
        this.expiry_date = expiry_date,
        this.price = price,
        this.supplier = supplier

    
    
    }
}

// Should I use Class or Type?

