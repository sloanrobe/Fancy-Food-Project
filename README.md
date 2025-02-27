Convert inventory.csv to objects

Convert supplierQuality.csv to objects

Search Supplier Quality list:

    If item has quality of 'OK', adjust the expiry date:
        Dairy - reduce by 2 days
        Canned Goods - reduce by 1 month
        Vegetables - reduce by 1 day

Search Item Inventory list:

    Throw out all expired items.

    Reduce item price based on following parameters:
        For Dairy, reduce price by 50% is expiry < 4 days
        For Canned Goods, reduce price by 25% is expiry < 3 months
        For Vegetables, reduce price by 40% is expiry < 3 days

<!-- 1.  Search current inventory list
    a. Check expiration dates

2.  Search supplier quality list
    a. Check item quality

    
    a.  Divide list into categories
        1.  Dairy
        2.  Canned Goods
        3.  Vegetables
    b.  Check quality level of items
        1.  If OK, reduce Dairy by 2 days, Canned Goods by 1 month, and Vegetables by 1 day
    c.  Check expiration date
        1.  If Expired, item must be removed
        2.  If Not Expired...
        2.  Items expiring in less than 4 days
        3.  Items expiring 

2.  Search Supplier Quality list 

 -->