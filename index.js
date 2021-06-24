/**
 * @api {post} /api/register Register
 * @apiGroup User
 * @apiParam {String} name Name(required)
 * @apiParam {String} email Email(required)
 * @apiParam {String} password Password(required)
 * @apiParam {String} deviceType Device Type(required, 1=Android, 2=IOS)
 * @apiParam {String} deviceToken Device Token(required)
 * @apiParam {String} phoneNumber Phone Number(required)
 * @apiSuccess {Boolean} success {1:success, 0:fail}
 * @apiSuccess {String} message {message:'User registered successfully'}
 * @apiSuccess {Object} result  User object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 *{
 *    "success": 1,
 *    "message": "User registered successfully",
 *    "result": {
 *        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9oYXJtaXN0ZWNobm9sb2d5LmNvbVwvcmVhbGVzdGF0ZV9hcGlcL2FwaVwvcmVnaXN0ZXIiLCJpYXQiOjE2MjM5MzM3NDUsImV4cCI6MTYyMzkzNzM0NSwibmJmIjoxNjIzOTMzNzQ1LCJqdGkiOiIzSUtQSUpXMUsyVmFiUkxDIiwic3ViIjozNywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.gdxJyf32GIk11kd3DhXU-MLnD4SoIQhZPpiNoeZyBRM"
 *        "first_name": "test",
 *        "email": "test@gmail.com",
 *        "device_type": "1",
 *        "device_token": "1",
 *        "phone_number": "123456",
 *        "id": 37,
 *        "name": "test"
 *    },
 *}
 * @apiErrorExample {json} Name Missing error
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "Name is Required."
 *}
 * @apiErrorExample {json} Password Missing error
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "Password is Required."
 *}
 * @apiErrorExample {json} Email Missing error
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "Email is Required."
 *}
  * @apiErrorExample {json} Device type Missing error
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "Device type is Required."
 *}
 * @apiErrorExample {json} Device token Missing error
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "Device token is Required."
 *}
 * @apiErrorExample {json} Phone number Missing error
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "Phone number is Required."
 *}
 * @apiErrorExample {json} Email exists
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "This Email Already Exists"
 *}
 */

/**
 * @api {post} /api/login Login
 * @apiGroup User
 * @apiParam {String} email Email(required)
 * @apiParam {String} password Password(If loginType=0 This field required)
 * @apiParam {String} loginType Login Type(Normal login = 0, Google login = 1,Facebook login = 2, required)
 * @apiParam {String} deviceType Device Type(required, 1=Android, 2=IOS)
 * @apiParam {String} deviceToken Device Token(required)
 * @apiParam {String} name Name
 * @apiParam {String} image Image Link
 * @apiParam {String} socialId Social Id
 * @apiSuccess {Boolean} success {1:success, 0:fail}
 * @apiSuccess {String} message {message:'Login Successfully.'}
 * @apiSuccess {Object} result  User object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "success": 1,
 *      "message": "Login Successfully.",
 *      "result": {
 *          "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9oYXJtaXN0ZWNobm9sb2d5LmNvbVwvcmVhbGVzdGF0ZV9hcGlcL2FwaVwvcmVnaXN0ZXIiLCJpYXQiOjE2MjM5MzM3NDUsImV4cCI6MTYyMzkzNzM0NSwibmJmIjoxNjIzOTMzNzQ1LCJqdGkiOiIzSUtQSUpXMUsyVmFiUkxDIiwic3ViIjozNywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.gdxJyf32GIk11kd3DhXU-MLnD4SoIQhZPpiNoeZyBRM"
 *          "name": "test",
 *          "email": "test@gmail.com",
 *          "phoneNumber": "123456",
 *          "address": ""
 *      }
 *}
 * @apiErrorExample {json} Email Missing error
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "Email Required."
 *}
 * @apiErrorExample {json} Device type missing error
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "Device type is Required."
 *}
 * @apiErrorExample {json} Device token is missing error
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "Device token is Required."
 *}
 * @apiErrorExample {json} Login type is missing error
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "Login type Required."
 *}
 * @apiErrorExample {json} Email not registered
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "This email is not registered"
 *}
 * @apiErrorExample {json} Password missing
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "Password must be Required"
 *}
 * @apiErrorExample {json} Credential not match
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "Invalid email or password."
 *}
 */

/**
 * @api {post} /api/userDetails User Details
 * @apiGroup User
 * @apiParam {String} token Authorization Token(required in header)
 * @apiSuccess {Boolean} success {1:success, 0:fail}
 * @apiSuccess {String} message {message:'User detail retrived successfully'}
 * @apiSuccess {Object} result  User object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 *{
 *      "success": 1,
 *      "message": "User detail retrived successfully",
 *      "result": {
 *          "name": "",
 *          "email": "test@gmail.com",
 *          "address": "harmis gujrat",
 *          "phoneNumber": "1234567",
 *          "image": ""
 *      }
 *}
 * @apiErrorExample {json} Token Missing error
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": "Authorization Token not found"
 *}
 */

/**
 * @api {post} /api/updateProfile Update Profile(FORM DATA)
 * @apiGroup User
 * @apiParam {String} token Authorization Token(required in header)
 * @apiParam {String} email Email(required)
 * @apiParam {String} name Name(required)
 * @apiParam {String} address Address(required)
 * @apiParam {String} phoneNumber Phone number(required)
 * @apiParam {File} image Image
 * @apiSuccess {Boolean} success {1:success, 0:fail}
 * @apiSuccess {String} message {message:'Profile Updated successfully.'}
 * @apiSuccess {Object} result  User object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 *{
 *      "success": 1,
 *      "message": "Profile Updated successfully.",
 *      "result": {
 *          "name": "",
 *          "email": "test@gmail.com",
 *          "address": "harmis gujrat",
 *          "phoneNumber": "1234567",
 *          "image": ""
 *      }
 *}
 * @apiErrorExample {json} Token Missing error
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": "Authorization Token not found"
 *}
 * @apiErrorExample {json} Name missing
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "Name must be Required"
 *}
 * @apiErrorExample {json} Email missing
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "Email must be Required"
 *}
 * @apiErrorExample {json} Phone number missing
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "Phone number must be Required"
 *}
 * @apiErrorExample {json} Email already exists
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "This email already exists"
 *}
 */

/**
 * @api {post} /api/forgotPassword Forgot Password
 * @apiGroup User
 * @apiParam {String} email Email(required)
 * @apiSuccess {Boolean} success {1:success, 0:fail}
 * @apiSuccess {String} message {message:'Forgot password Link sent successfully.'}
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 *{
 *      "success": 1,
 *      "message": "Forgot password Link sent successfully."
 *}
 * @apiErrorExample {json} Email missing
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "Email must be Required"
 *}
 * @apiErrorExample {json} Email not registered
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "This email is not registered"
 *}
 */

/**
 * @api {post} /api/getCategories Get Category List
 * @apiGroup Category
 * @apiParam {String} token Authorization Token(required in header)
 * @apiSuccess {Boolean} success {1:success, 0:fail}
 * @apiSuccess {String} message {message:'Category list created successfully.'}
 * @apiSuccess {Array} result  Categories Array object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 *{
 *   "success": 1,
 *   "message": "Category list created successfully",
 *   "result": [
 *       {
 *           "id": 1,
 *           "name": "Commerical",
 *           "image": "https://harmistechnology.com/realestate/pictures/category/cat-1.png",
 *           "subCategories": [
 *               {
 *                   "id": 4,
 *                   "name": "Residential",
 *                   "image": "https://harmistechnology.com/realestate/pictures/category/cat-4.png"
 *               },
 *               {
 *                   "id": 5,
 *                   "name": "Commerical",
 *                   "image": "https://harmistechnology.com/realestate/pictures/category/cat-5.png"
 *               }
 *           ]
 *       },
 *       {
 *           "id": 2,
 *           "name": "Industrial",
 *           "image": "https://harmistechnology.com/realestate/pictures/category/cat-2.png",
 *           "subCategories": [
 *               {
 *                   "id": 8,
 *                   "name": "Residential",
 *                   "image": "https://harmistechnology.com/realestate/pictures/category/cat-8.png"
 *               }
 *           ]
 *       }
 *   ]
 *}
 * @apiErrorExample {json} No category found
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "No category found."
 *}
 */

/**
 * @api {post} /api/addProperty Add Property(FORM DATA)
 * @apiGroup Property
 * @apiParam {String} token Authorization Token(required in header)
 * @apiParam {String} categoryId Category Id(required)
 * @apiParam {String} subCategoryId Sub Category Id(required)
 * @apiParam {String} title Property Title(required)
 * @apiParam {String} areaSize Area Size(required)
 * @apiParam {String} propertyType Property Type(required, ex.For Sale or For Rent)
 * @apiParam {String} address Address(required)
 * @apiParam {String} email Email(required)
 * @apiParam {String} lat Lat(required)
 * @apiParam {String} long Long(required)
 * @apiParam {String} price Price(required)
 * @apiParam {File} images Array Of Images(required)
 * @apiParam {String} description Description
 * @apiParam {String} bedRooms Bed Rooms
 * @apiParam {String} bathRooms Bath rooms
 * @apiSuccess {Boolean} success {1:success, 0:fail}
 * @apiSuccess {String} message {message:'Property added successfully.'}
 * @apiSuccess {Object} result  Property Object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 *{
 *    "success": 1,
 *    "message": "Property added successfully.",
 *    "result": {
 *        "propertyId": 400,
 *        "userId": "",
 *        "lat": "23.07462100",
 *        "long": "72.51202400",
 *        "title": "Unique Kamshet Dome with Breathtaking Views",
 *        "price": 1500,
 *        "address": "Dome house hosted by Sapna",
 *        "email": "",
 *        "description": "The white bougainvillea climbs over the cotton tree and hangs like a veil covering the sun at day and dances by night. The lily’s tucked away in the corner sing with the birds and the Jackman’s Clematis welcomes you at the front gate swaying with the wind.\n\nThe land changes with every season. From a lush neon green landscape in monsoon to a dry cherry blossomed bouquet in the winter.\n\nDon't come here to find yourself, Instead to lose yourself!\nThe space\nThis beautiful space is approx 350 sq foot and perfect for a couple or a group of 2. It comes with private enclosed handmade bath tub (pool) which is covered with glass all around and perfect for star gazing. The ensuite bathroom is fitted with a hot water geyser. This eco friendly dome is nestled between 2 Gulmohar trees. Please see the photos to get a better idea :)\n\nEvery single corner of this land has been handmade. From the Glass House to the Dome Huts to the Yoga Platform, every bit with love and care. There is a spectacular view from every corner and a different bird on every tree.\nThere are many spaces to read and sun bathe in our garden and not to mention our meditation hill.\n\nSince we are in located in a very remote area, the phone network and electricity come and go. This might be a problem for some, but we consider it our USP. We have a generator but we refrain from using it for long hours as it is loud and not so good for the environment. On Thursdays there is no electricity in the day everywhere in Kamshet.\n\nWe serve vegetarian food but you are free to order non veg ahead of time for an extra fee. Please enquire for the rates (subject to change.)\n\nIf you are coming here to get entertained by me please understand that I am here for the same reason as you - To Switch Off.\nGuest access\nBesides your own private Dome House, you are welcome to access the garden and the yoga terrace.\n\nSince the meals (vegetarian) are included in the tariff we ask to refrain from using our kitchen. We have set timings for breakfast, lunch and dinner.\n\nFeel free to carry your own alcoholic beverages / mixers / soft drinks as we do not stock them. We have a fridge where you can chill them. We have no problems you drinking / smoking in the garden as long as your'e courteous and our other guests are not affected by it :)\n\nThank you.\nOther things to note\nThe price includes vegetarian Lunch and Dinner on day of arrival and breakfast on departure. In case of multiple days then all 3 meals per day :) Tea/Coffee is served in the morning with breakfast and in the evening with biscuits. There is a A La Carte Menu if you would like to order anything else. We are a small AirBnB however and not a restaurant so please understand that we don't serve all day long and the kitchen shuts at 10pm.\n\nOn Thursdays there is no electricity in the entire area. We have a generator but we try not to use it all day and night as it’s really loud and scares away the birds and disturbs the ambience of the land.",
 *        "subCategory": "Building",
 *        "category": "Commerical",
 *        "bathRooms": "5",
 *        "bedRooms": "4",
 *        "propertyType": "For Rent",
 *        "areaSize": "30000",
 *        "image": [
 *            "https://harmistechnology.com/realestate/pictures/listing-thumb/1/21-06-23 12:24-1624451094.b5540b03-6cfb-4681-a1c7-764f3442414b.jpeg.jpeg",
 *            "https://harmistechnology.com/realestate/pictures/listing-thumb/1/21-06-23 12:24-1624451094.6fee1716-e452-47a8-9788-5106d231b2bc.jpg.jpg",
 *            "https://harmistechnology.com/realestate/pictures/listing-thumb/1/21-06-23 12:24-1624451094.d4f00000-2619-430d-bdcd-f651c0a24df1.jpg.jpg"
 *        ]
 *    }
 *}
* @apiErrorExample {json} Token Missing error
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": "Authorization Token not found"
 *}
 * @apiErrorExample {json} Category missing
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "Category is Required"
 *}
 * @apiErrorExample {json} Sub Category missing
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "Sub Category is Required"
 *}
 * @apiErrorExample {json} Property Title missing
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "Title is Required"
 *}
 *}
 * @apiErrorExample {json} Area Size missing
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "Area Size is Required"
 *}
 *}
 * @apiErrorExample {json} Property Type missing
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "Property Type is Required"
 *}
 *}
 * @apiErrorExample {json} Address missing
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "Address is Required"
 *}
 *}
 * @apiErrorExample {json} Address missing
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "Address is Required"
 *}
 * @apiErrorExample {json} Latitude missing
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "Latitude is Required"
 *}
 *}
 * @apiErrorExample {json} Longitude missing
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "Longitude is Required"
 *}
 *}
 * @apiErrorExample {json} Price missing
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "Price is Required"
 *}
 *}
 * @apiErrorExample {json} Images missing
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "Images is Required"
 *}
 */

/**
 * @api {post} /api/propertyType Property Type List
 * @apiGroup Property
 * @apiParam {String} token Authorization Token(required in header)
 * @apiSuccess {Boolean} success {1:success, 0:fail}
 * @apiSuccess {String} message {message:'Property Type  successfully'}
 * @apiSuccess {Array} result  Property Type Array
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 *{
 *    "success": 1,
 *    "message": "Property Type  successfully",
 *    "result": [
 *        "For Sale",
 *        "For Rent"
 *    ]
 *}
 * @apiErrorExample {json} Token Missing error
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": "Authorization Token not found"
 *}
 */

 /**
 * @api {post} /api/propertyList Property List
 * @apiGroup Property
 * @apiParam {String} token Authorization Token(required in header)
 * @apiParam {String} offset Start Limit
 * @apiParam {String} categoryId Category Id
 * @apiParam {String} subCategoryId Sub Category Id
 * @apiParam {String} priceMin Minimum Price
 * @apiParam {String} priceMax Minimum price
 * @apiParam {String} noOfbedroom No Of bed rooms using comma separated (Ex.1,2)
 * @apiParam {String} noOfBathroom No Of Bath rooms using comma separated (Ex.1,2)
 * @apiParam {String} propertyType Property Type
 * @apiParam {String} keyword Search by name, description, address
 * @apiSuccess {Boolean} success {1:success, 0:fail}
 * @apiSuccess {String} message {message:'Propertylist successfully'}
 * @apiSuccess {Array} result  Property List
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 *{
 *    "success": 1,
 *    "message": "Propertylist successfully",
 *    "result": [
 *        {
 *            "id": 399,
 *            "price": 1500,
 *            "address": "Dome house hosted by Sapna",
 *            "lat": "23.07462100",
 *            "long": "72.51202400",
 *            "isFavorite": false,
 *            "subCategory": "",
 *            "category": "",
 *            "bathRooms": "5",
 *            "bedRooms": "4",
 *            "propertyType": "For Rent",
 *            "areaSize": "30000",
 *            "image": ""
 *        },
 *        {
 *            "id": 398,
 *            "price": 1500,
 *            "address": "Dome house hosted by Sapna",
 *            "lat": "23.07462100",
 *            "long": "72.51202400",
 *            "isFavorite": false,
 *            "subCategory": "Building",
 *            "category": "Commerical",
 *            "bathRooms": "5",
 *            "bedRooms": "4",
 *            "propertyType": "For Rent",
 *            "areaSize": "30000",
 *            "image": "https://harmistechnology.com/realestate/pictures/listing-thumb/1/21-06-22 10:21-1624357265.1d6426ed-d429-424b-a846-a181f83bf709.jpeg.jpeg"
 *        }
 *    ],
 *    "total": 4
 *}
 * @apiErrorExample {json} Token Missing error
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": "Authorization Token not found"
 *}
 * @apiErrorExample {json} Property not found error
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "No Property  found."
 *}
 */

/**
 * @api {post} /api/addWishlist Property Type List
 * @apiGroup Wishlist
 * @apiParam {String} token Authorization Token(required in header)
 * @apiParam {String} propertyId Property Id (required)
 * @apiSuccess {Boolean} success {1:success, 0:fail}
 * @apiSuccess {String} message (Note:If wishlist in already exist product so Product will remove to wishlist to call this api){message:'Wishlist in added  successfully'}
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 *{
 *   "success": 1,
 *   "message": "Wishlist in added  successfully"
 *}
 * @apiErrorExample {json} Token Missing error
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": "Authorization Token not found"
 *}
 */

/**
 * @api {post} /api/propertyDetail Property Detail
 * @apiGroup Property
 * @apiParam {String} token Authorization Token(required in header)
 * @apiParam {String} propertyId Property Id (required)
 * @apiSuccess {Boolean} success {1:success, 0:fail}
 * @apiSuccess {String} message {message:'Property detail retrived successfully'}
 * @apiSuccess {Object} result Property Detail Object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 *{
 *    "success": 1,
 *    "message": "Property detail retrived successfully",
 *    "result": {
 *        "propertyId": 395,
 *        "userId": "",
 *        "lat": "23.07462100",
 *        "long": "72.51202400",
 *        "title": "Seaesta LuX",
 *        "price": 15000,
 *        "address": "A/26, Nalanda Society, B/h Namrata Soceity,",
 *        "email": "",
 *        "description": "It's a beautiful sea facing spacious bedroom .It has one double bed & clean bathroom. Comfortable for 2 adults . Not suitable for more than 2 people . Breath taking sea view from the room . Guest can use the outside Veranda and terrace as well . Care taker on call for any help if needed . Total privacy in the room as well as balcony & Terrace . Suitable for couples only . Beautiful quite location\r\nThe space\r\nBedroom\r\nVerandah\r\nTerrace\r\nGuest access\r\nGuest can access Verandah, Terrace and the Bedroom .\r\nOther things to note\r\nNo Drugs or any Illegal things allowed .",
 *        "subCategory": "Land",
 *        "category": "Residential",
 *        "bathRooms": "3",
 *        "bedRooms": "3",
 *        "propertyType": "For Rent",
 *        "areaSize": "2000",
 *        "image": [
 *            "https://harmistechnology.com/realestate/pictures/listing-thumb/1/21-06-21 10:57-1624273077.c2fae39e-f99b-4085-8b67-ca1dc9d4a228.jpg.jpg",
 *            "https://harmistechnology.com/realestate/pictures/listing-thumb/1/21-06-21 10:57-1624273077.182815b8-b9cf-4599-9598-6d657b724642.jpg.jpg",
 *            "https://harmistechnology.com/realestate/pictures/listing-thumb/1/21-06-21 10:57-1624273077.ea1e4249-4ca1-4ac5-900d-e2edd5c18d87.jpg.jpg"
 *        ]
 *    }
 *}
 * @apiErrorExample {json} Token Missing error
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": "Authorization Token not found"
 *}
 * @apiErrorExample {json} Property Id Missing
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "Property id is Required"
 *}
 * @apiErrorExample {json} Property not found error
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "No Property  found."
 *}
 */

/**
 * @api {post} /api/myProperty My Property
 * @apiGroup Property
 * @apiParam {String} token Authorization Token(required in header)
 * @apiSuccess {Boolean} success {1:success, 0:fail}
 * @apiSuccess {String} message {message:'My property list successfully'}
 * @apiSuccess {Array} result  Array Of Property List
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 {
    "success": 1,
    "message": "My property list successfully",
    "result": [
        {
            "id": 398,
            "propertyName": "Unique Kamshet Dome with Breathtaking Views",
            "price": 1500,
            "address": "Dome house hosted by Sapna",
            "isFavorite": false,
            "image": "https://harmistechnology.com/realestate/pictures/listing-thumb/1/21-06-22 10:21-1624357265.1d6426ed-d429-424b-a846-a181f83bf709.jpeg.jpeg"
        },
        {
            "id": 396,
            "propertyName": "Unique Kamshet Dome with Breathtaking Views",
            "price": 1500,
            "address": "Dome house hosted by Sapna",
            "isFavorite": true,
            "image": "https://harmistechnology.com/realestate/pictures/listing-thumb/1/21-06-21 10:59-1624273187.1d6426ed-d429-424b-a846-a181f83bf709.jpeg.jpeg"
        }
    ],
    "total": 2
}
 * @apiErrorExample {json} Token Missing error
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": "Authorization Token not found"
 *}
 *}
 * @apiErrorExample {json} Property not found error
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "No Property  found."
 *}
 */

/**
 * @api {post} /api/wishlist Wishlist
 * @apiGroup Wishlist
 * @apiParam {String} token Authorization Token(required in header)
 * @apiSuccess {Boolean} success {1:success, 0:fail}
 * @apiSuccess {String} message {message:'Wishlist successfully'}
 * @apiSuccess {Array} result  Array Of Property List
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 *{
 *    "success": 1,
 *    "message": "Wishlist successfully",
 *    "result": [
 *        {
 *            "id": 398,
 *            "propertyName": "Unique Kamshet Dome with Breathtaking Views",
 *            "price": 1500,
 *            "address": "Dome house hosted by Sapna",
 *            "isFavorite": false,
 *            "image": "https://harmistechnology.com/realestate/pictures/listing-thumb/1/21-06-22 10:21-1624357265.1d6426ed-d429-424b-a846-a181f83bf709.jpeg.jpeg"
 *        }
 *    ],
 *    "total": 1
 *}
 * @apiErrorExample {json} Token Missing error
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": "Authorization Token not found"
 *}
 *}
 * @apiErrorExample {json} Property not found error
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *       "status": 0,
 *		 "error": "No Property  found."
 *}
 */