# BrandClothesShop

### Concept
The project is a demo version of an online clothing store without the possibility of real purchases and without conducting any transactions. The server side representts the API for interacting with application resources through the MS SQL SERVER database (localdb). The interaction between code and database is being implemented using Entity Framewrok Core (Code First).
### Functionality
##### The website realizes:
- The possibility to browse the catalog, which is devided into some sections according to the type of clothes
- JWT Tokens/Refresh-Tokens User Authentication
- The possibility to ***add/delete*** products into/from cart and to check out the products in user's cart
- The imitation of purchase (the item is added into the database) and the possibility to check out user's ***Order List***
### API Documentation
###### The API Documentation is represented by Swagger UI:
![image](https://user-images.githubusercontent.com/75939461/148089373-7f922115-573b-404e-970f-7a799caecf89.png)
That's why it's easy to check out all the methods and their signature as soon as you run the project.
### Database (Local SQL Server DB)
##### The DB path in the repository: ***\BrandClothesShop\BrandClothesShopAPI\DataStore\ClothesShopDB.mdf***.
#### **!!! To make the project and the DB interract correctly copy the '.mdf' and '.ldf' files and paste them into ***C:\\Users\PC***.**
###### The DB has the tables which match the model classes in the code. So, it has such tables, as:
1. Clothes Items
2. Users
3. Refresh Tokens
4. Cart Items
5. Order List
6. Photos (which are connected with *Clothes Items* using foreign key)
### Authentication
JWT Tokens/Refresh-Tokens technology was used to realize the authentication on the website. In order to crrate an account, user fills the form with basic fields:
- E-mail
- Password
- Username *(optional)*

If the e-mail and password are valid, the account is created and the user can log in. In case of successful authentication the server generates ***Access JWT-token*** (lifetime = 5 minutes) + ***Refresh Token***. The JWT Token consists of three parts, which include:
1. Header
2. Payload
3. Signature

###### You can find some more information there: [site]:https://auth0.com/docs/security/tokens/json-web-tokens/json-web-token-structure
When the access token is expired, the client needs to send the request with EXPIRED token and refresh token. Then, server regenerates a new pair of tokens. The Refresh Token limits:
- lifetime = 2 months
- it can be used only once

### Application interface
UI of web application implements most of all opportunities provided by backend API. The implementation of some features and the adjustment of existing ones to improve the user experience will be made in new versions of the application.

##### Application client implements:
- Authorization
- Mock product ordering
- Adding to cart
- Viewing products added in cart
- Viewing product showcase

###### Application client:
------IMAGE
