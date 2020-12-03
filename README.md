    *** README ***

My Application's Architecture:

I edited five files:
-App.js : contains the product list for the 12 products and 
-FilteredList.js : contains all filtering, sorting and aggregator methods
-DisplayList.js : maps each of the twelve products in the product list from App.js to a react-bootstrap-Card element. It also contains onclick logic for my aggregator buttons 'add to Cart' and 'remove from cart'

-App.css : contains all of the styling information for App.js 
-index.css : contains all of the styling information for FilteredList.js and DisplayList.js


How Data is Passed Down Through My Components: 

-I pass my aggregator functions(onAggregatorAdd and onAggregatorRemove) down from the FilteredList component to the DisplayList component
-I pass my product list down from App.js to my FilteredList component
-I create two instances of the DisplayList component in the render function of my FilteredList component. One of these instances of DisplayList models my product list and the other instance models my aggregator list (shopping cart)

How user interactions can trigger changes in the state of components:

-Users can filter by size and colour, and they can sort price from highest to lowest and from lowest to highest. They are able to perform these actions by selecting the appropriate filters at the top of the screen. 
On hover, each of these filter/sort options are highlighted so that the user knows that an action can be taken by clicking.

-Each cart contains an 'Add to Cart' button and a 'Remove from Cart' button. By clicking on these buttons, the total price of items in the shopping cart adjusts accordingly. The Shopping cart at the bottom of the page also adjusts in size and contents in accordance with the action(s) taken.


