export interface FoodItem {
    category: 'Dairy' | 'Canned Goods' | 'Vegetables';
    item: string;
    expiryDate: Date;
    price: number;
    supplierId: string;
  }