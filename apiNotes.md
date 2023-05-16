With Steam DB 
* when a user is adding a new "product" for steam (or any other site), you can have an optional field of "storeId"
* for steam, you can automatically crawl the steamDB page using that storeId, then use cheerio/got to grab the price from the page




## Important DB Tables 
Game - game title in general (title, publisher, developer, etc)
Product - an record of that game existing on some store (storeId, gameId)
Offer - the current price of the game at a store (or historical price at that store in the past) (price, offerStartDate, offerEndState, etc)

E.g.
- your user fills out a New Game form that will create a game record (Borderlands)
- on the game show show page you can fill out an offer form with price of the game, and the store that it is available on,
    - the form will make a post with that data
    - on the backend, you will create a product record for that game/store if it does NOT exist already
        - otherwise you will grab the existing product if it does exist already
            -and then create an offer record with the price, and associate it to the product 


## Plan 
- build out without an API this week