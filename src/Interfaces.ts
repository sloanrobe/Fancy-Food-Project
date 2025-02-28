export interface FoodItem {
    category: 'Dairy' | 'Canned Goods' | 'Vegetables';
    item: string;
    expiryDate: Date;
    price: number;
    supplierId: string;
  }
  
  export interface Supplier {
    supplier: string;
    quality_score: 'Ok' | 'Good' | 'Superb';
  }