# Project Shopping Cart

This project simulates an e-commerce using the API from _Mercado Livre_. You can select the products you want and they will apear on the cart section. All the products you put on the prices sum automatically. You can remove an item from the cart by clicking on it and it's price will be subtracted from the subtotal. You can empty your cart by clicking the _empty cart_ button. Your shopping list will be saved automatically.

This project was developed following the instructions below.

1. Create a list of products using the enpoint given.

> This step was developed along with the step 8 using the TDD method.

2. Add the product to the shopping cart using the second given endpoint.

> This step was developed along with the step 9 using the TDD method.

3. Remove an item from the shopping cart when you click on it.

4. Save the shopping cart in `localStorage` so it's loaded with the page.

> This step waas developed along with steps 10 and 11 using the TDD method.

5. Sum the total value of the items on the shipping cart.

6. Implement the logic of hte button _Empty cart_.

7. Add a loading text to be shown while the API requisitions isn't complete.

8. Develop the tests to the function `fetchProducts` to cover 100% of it.

9. Develop the tests to the function `fetchItem` to cover 100% of it.

10. Develop the tests to the function `saveCartItems` to cover 100% of it.

11. Develop the tests to the function `fetchGetSavedCartItems` to cover 100% of it.
