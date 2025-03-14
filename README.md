Fancy Food is a supermarket that sells fancy food. Currently the administration has some trouble with the inventory, particularly that they have some food items that are getting too old before they are sold. In order to tackle this problem and avoid throwing out food they want to implement a computer system that helps them find the products that are close to their expiry date. The program should read the files that contain the current inventory and then output a list of the items that are about to expire. Using the list the staff will be able to put a reduced price on the items to hopefully sell before they expire.

Details

The customers of the supermarket tend to be very fancy people, and the supermarket does not wish to let them down. It is important for the supermarket that it does not sell expired items to it's customers, so anything that is already expired should be thrown out immediately. Additionally, the supermarket has learned from experience that the quality of the products from the different suppliers is not always that good. Because of the varying level of quality, the supermarket also has a rule that if a product comes from a supplier whose quality has a level of 'Ok', then the expiry date is not to be trusted. For those suppliers' items the lifetime of the product needs to be reduced by 2 days for 'Dairy' products, 1 month for 'Canned goods', and 1 day for 'Vegetables'. This has to be taken into consideration when deciding to throw away a product or to reduce its price.

This is the strategy for price reduction: For Dairy products the price should be reduced by 50% when the expiry date is less than 4 days into the future. For Canned goods the price should be reduced by 25% when the expiry date is less than 3 months into the future. For Vegetables the price should be reduced by 40% when the expiry date is less than 3 days into the future.


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