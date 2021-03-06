define({ "api": [
  {
    "type": "post",
    "url": "/api/getCategories",
    "title": "Get Category List",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authorization Token(required in header)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>{1:success, 0:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>{message:'Category list created successfully.'}</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "result",
            "description": "<p>Categories Array object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": 1,\n  \"message\": \"Category list created successfully\",\n  \"result\": [\n      {\n          \"id\": 1,\n          \"name\": \"Commerical\",\n          \"image\": \"https://harmistechnology.com/realestate/pictures/category/cat-1.png\",\n          \"subCategories\": [\n              {\n                  \"id\": 4,\n                  \"name\": \"Residential\",\n                  \"image\": \"https://harmistechnology.com/realestate/pictures/category/cat-4.png\"\n              },\n              {\n                  \"id\": 5,\n                  \"name\": \"Commerical\",\n                  \"image\": \"https://harmistechnology.com/realestate/pictures/category/cat-5.png\"\n              }\n          ]\n      },\n      {\n          \"id\": 2,\n          \"name\": \"Industrial\",\n          \"image\": \"https://harmistechnology.com/realestate/pictures/category/cat-2.png\",\n          \"subCategories\": [\n              {\n                  \"id\": 8,\n                  \"name\": \"Residential\",\n                  \"image\": \"https://harmistechnology.com/realestate/pictures/category/cat-8.png\"\n              }\n          ]\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "No category found",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"No category found.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Category",
    "name": "PostApiGetcategories"
  },
  {
    "type": "post",
    "url": "/api/addProperty",
    "title": "Add Property(FORM DATA)",
    "group": "Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authorization Token(required in header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": "<p>Category Id(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subCategoryId",
            "description": "<p>Sub Category Id(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Property Title(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "areaSize",
            "description": "<p>Area Size(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "propertyType",
            "description": "<p>Property Type(required, ex.For Sale or For Rent)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": "<p>Lat(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "long",
            "description": "<p>Long(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Price(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "images",
            "description": "<p>Array Of Images(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bedRooms",
            "description": "<p>Bed Rooms</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bathRooms",
            "description": "<p>Bath rooms</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>{1:success, 0:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>{message:'Property added successfully.'}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Property Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": 1,\n   \"message\": \"Property added successfully.\",\n   \"result\": {\n       \"propertyId\": 400,\n       \"userId\": \"\",\n       \"lat\": \"23.07462100\",\n       \"long\": \"72.51202400\",\n       \"title\": \"Unique Kamshet Dome with Breathtaking Views\",\n       \"price\": 1500,\n       \"address\": \"Dome house hosted by Sapna\",\n       \"email\": \"\",\n       \"description\": \"The white bougainvillea climbs over the cotton tree and hangs like a veil covering the sun at day and dances by night. The lily???s tucked away in the corner sing with the birds and the Jackman???s Clematis welcomes you at the front gate swaying with the wind.\\n\\nThe land changes with every season. From a lush neon green landscape in monsoon to a dry cherry blossomed bouquet in the winter.\\n\\nDon't come here to find yourself, Instead to lose yourself!\\nThe space\\nThis beautiful space is approx 350 sq foot and perfect for a couple or a group of 2. It comes with private enclosed handmade bath tub (pool) which is covered with glass all around and perfect for star gazing. The ensuite bathroom is fitted with a hot water geyser. This eco friendly dome is nestled between 2 Gulmohar trees. Please see the photos to get a better idea :)\\n\\nEvery single corner of this land has been handmade. From the Glass House to the Dome Huts to the Yoga Platform, every bit with love and care. There is a spectacular view from every corner and a different bird on every tree.\\nThere are many spaces to read and sun bathe in our garden and not to mention our meditation hill.\\n\\nSince we are in located in a very remote area, the phone network and electricity come and go. This might be a problem for some, but we consider it our USP. We have a generator but we refrain from using it for long hours as it is loud and not so good for the environment. On Thursdays there is no electricity in the day everywhere in Kamshet.\\n\\nWe serve vegetarian food but you are free to order non veg ahead of time for an extra fee. Please enquire for the rates (subject to change.)\\n\\nIf you are coming here to get entertained by me please understand that I am here for the same reason as you - To Switch Off.\\nGuest access\\nBesides your own private Dome House, you are welcome to access the garden and the yoga terrace.\\n\\nSince the meals (vegetarian) are included in the tariff we ask to refrain from using our kitchen. We have set timings for breakfast, lunch and dinner.\\n\\nFeel free to carry your own alcoholic beverages / mixers / soft drinks as we do not stock them. We have a fridge where you can chill them. We have no problems you drinking / smoking in the garden as long as your'e courteous and our other guests are not affected by it :)\\n\\nThank you.\\nOther things to note\\nThe price includes vegetarian Lunch and Dinner on day of arrival and breakfast on departure. In case of multiple days then all 3 meals per day :) Tea/Coffee is served in the morning with breakfast and in the evening with biscuits. There is a A La Carte Menu if you would like to order anything else. We are a small AirBnB however and not a restaurant so please understand that we don't serve all day long and the kitchen shuts at 10pm.\\n\\nOn Thursdays there is no electricity in the entire area. We have a generator but we try not to use it all day and night as it???s really loud and scares away the birds and disturbs the ambience of the land.\",\n       \"subCategory\": \"Building\",\n       \"category\": \"Commerical\",\n       \"bathRooms\": \"5\",\n       \"bedRooms\": \"4\",\n       \"propertyType\": \"For Rent\",\n       \"areaSize\": \"30000\",\n       \"image\": [\n           \"https://harmistechnology.com/realestate/pictures/listing-thumb/1/21-06-23 12:24-1624451094.b5540b03-6cfb-4681-a1c7-764f3442414b.jpeg.jpeg\",\n           \"https://harmistechnology.com/realestate/pictures/listing-thumb/1/21-06-23 12:24-1624451094.6fee1716-e452-47a8-9788-5106d231b2bc.jpg.jpg\",\n           \"https://harmistechnology.com/realestate/pictures/listing-thumb/1/21-06-23 12:24-1624451094.d4f00000-2619-430d-bdcd-f651c0a24df1.jpg.jpg\"\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Token Missing error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": \"Authorization Token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Category missing",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"Category is Required\"\n}",
          "type": "json"
        },
        {
          "title": "Sub Category missing",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"Sub Category is Required\"\n}",
          "type": "json"
        },
        {
          "title": "Property Title missing",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"Title is Required\"\n}\n}",
          "type": "json"
        },
        {
          "title": "Area Size missing",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"Area Size is Required\"\n}\n}",
          "type": "json"
        },
        {
          "title": "Property Type missing",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"Property Type is Required\"\n}\n}",
          "type": "json"
        },
        {
          "title": "Address missing",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"Address is Required\"\n}\n}",
          "type": "json"
        },
        {
          "title": "Address missing",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"Address is Required\"\n}",
          "type": "json"
        },
        {
          "title": "Latitude missing",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"Latitude is Required\"\n}\n}",
          "type": "json"
        },
        {
          "title": "Longitude missing",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"Longitude is Required\"\n}\n}",
          "type": "json"
        },
        {
          "title": "Price missing",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"Price is Required\"\n}\n}",
          "type": "json"
        },
        {
          "title": "Images missing",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"Images is Required\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Property",
    "name": "PostApiAddproperty"
  },
  {
    "type": "post",
    "url": "/api/myProperty",
    "title": "My Property",
    "group": "Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authorization Token(required in header)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>{1:success, 0:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>{message:'My property list successfully'}</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "result",
            "description": "<p>Array Of Property List</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": 1,\n   \"message\": \"My property list successfully\",\n   \"result\": [\n       {\n           \"id\": 399,\n           \"propertyName\": \"Unique Kamshet Dome with Breathtaking Views\",\n           \"price\": 1500,\n           \"address\": \"Dome house hosted by Sapna\",\n           \"lat\": \"23.07462100\",\n           \"long\": \"72.51202400\",\n           \"isFavorite\": false,\n           \"subCategory\": \"\",\n           \"category\": \"\",\n           \"bathRooms\": \"5\",\n           \"bedRooms\": \"4\",\n           \"propertyType\": \"For Rent\",\n           \"areaSize\": \"30000\",\n           \"image\": \"\"\n       },\n       {\n           \"id\": 398,\n           \"propertyName\": \"Unique Kamshet Dome with Breathtaking Views\",\n           \"price\": 1500,\n           \"address\": \"Dome house hosted by Sapna\",\n           \"lat\": \"23.07462100\",\n           \"long\": \"72.51202400\",\n           \"isFavorite\": false,\n           \"subCategory\": \"Building\",\n           \"category\": \"Commerical\",\n           \"bathRooms\": \"5\",\n           \"bedRooms\": \"4\",\n           \"propertyType\": \"For Rent\",\n           \"areaSize\": \"30000\",\n           \"image\": \"https://harmistechnology.com/realestate/pictures/listing-thumb/1/21-06-22 10:21-1624357265.1d6426ed-d429-424b-a846-a181f83bf709.jpeg.jpeg\"\n       }\n   ],\n   \"total\": 2\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Token Missing error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": \"Authorization Token not found\"\n}\n}",
          "type": "json"
        },
        {
          "title": "Property not found error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"No Property  found.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Property",
    "name": "PostApiMyproperty"
  },
  {
    "type": "post",
    "url": "/api/propertyDetail",
    "title": "Property Detail",
    "group": "Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authorization Token(required in header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "propertyId",
            "description": "<p>Property Id (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>{1:success, 0:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>{message:'Property detail retrived successfully'}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Property Detail Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": 1,\n   \"message\": \"Property detail retrived successfully\",\n   \"result\": {\n       \"propertyId\": 395,\n       \"userId\": \"\",\n       \"lat\": \"23.07462100\",\n       \"long\": \"72.51202400\",\n       \"title\": \"Seaesta LuX\",\n       \"price\": 15000,\n       \"address\": \"A/26, Nalanda Society, B/h Namrata Soceity,\",\n       \"email\": \"\",\n       \"description\": \"It's a beautiful sea facing spacious bedroom .It has one double bed & clean bathroom. Comfortable for 2 adults . Not suitable for more than 2 people . Breath taking sea view from the room . Guest can use the outside Veranda and terrace as well . Care taker on call for any help if needed . Total privacy in the room as well as balcony & Terrace . Suitable for couples only . Beautiful quite location\\r\\nThe space\\r\\nBedroom\\r\\nVerandah\\r\\nTerrace\\r\\nGuest access\\r\\nGuest can access Verandah, Terrace and the Bedroom .\\r\\nOther things to note\\r\\nNo Drugs or any Illegal things allowed .\",\n       \"subCategory\": \"Land\",\n       \"category\": \"Residential\",\n       \"bathRooms\": \"3\",\n       \"bedRooms\": \"3\",\n       \"propertyType\": \"For Rent\",\n       \"areaSize\": \"2000\",\n       \"image\": [\n           \"https://harmistechnology.com/realestate/pictures/listing-thumb/1/21-06-21 10:57-1624273077.c2fae39e-f99b-4085-8b67-ca1dc9d4a228.jpg.jpg\",\n           \"https://harmistechnology.com/realestate/pictures/listing-thumb/1/21-06-21 10:57-1624273077.182815b8-b9cf-4599-9598-6d657b724642.jpg.jpg\",\n           \"https://harmistechnology.com/realestate/pictures/listing-thumb/1/21-06-21 10:57-1624273077.ea1e4249-4ca1-4ac5-900d-e2edd5c18d87.jpg.jpg\"\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Token Missing error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": \"Authorization Token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Property Id Missing",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"Property id is Required\"\n}",
          "type": "json"
        },
        {
          "title": "Property not found error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"No Property  found.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Property",
    "name": "PostApiPropertydetail"
  },
  {
    "type": "post",
    "url": "/api/propertyList",
    "title": "Property List",
    "group": "Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authorization Token(required in header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "offset",
            "description": "<p>Start Limit</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": "<p>Category Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subCategoryId",
            "description": "<p>Sub Category Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "priceMin",
            "description": "<p>Minimum Price</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "priceMax",
            "description": "<p>Minimum price</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "noOfbedroom",
            "description": "<p>No Of bed rooms using comma separated (Ex.1,2)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "noOfBathroom",
            "description": "<p>No Of Bath rooms using comma separated (Ex.1,2)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "propertyType",
            "description": "<p>Property Type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Search by name, description, address</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>{1:success, 0:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>{message:'Propertylist successfully'}</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "result",
            "description": "<p>Property List</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": 1,\n   \"message\": \"Propertylist successfully\",\n   \"result\": [\n       {\n           \"id\": 399,\n           \"propertyName\": \"Unique Kamshet Dome with Breathtaking Views\",\n           \"price\": 1500,\n           \"address\": \"Dome house hosted by Sapna\",\n           \"lat\": \"23.07462100\",\n           \"long\": \"72.51202400\",\n           \"isFavorite\": false,\n           \"subCategory\": \"\",\n           \"category\": \"\",\n           \"bathRooms\": \"5\",\n           \"bedRooms\": \"4\",\n           \"propertyType\": \"For Rent\",\n           \"areaSize\": \"30000\",\n           \"image\": \"\"\n       },\n       {\n           \"id\": 398,\n           \"propertyName\": \"Unique Kamshet Dome with Breathtaking Views\",\n           \"price\": 1500,\n           \"address\": \"Dome house hosted by Sapna\",\n           \"lat\": \"23.07462100\",\n           \"long\": \"72.51202400\",\n           \"isFavorite\": false,\n           \"subCategory\": \"Building\",\n           \"category\": \"Commerical\",\n           \"bathRooms\": \"5\",\n           \"bedRooms\": \"4\",\n           \"propertyType\": \"For Rent\",\n           \"areaSize\": \"30000\",\n           \"image\": \"https://harmistechnology.com/realestate/pictures/listing-thumb/1/21-06-22 10:21-1624357265.1d6426ed-d429-424b-a846-a181f83bf709.jpeg.jpeg\"\n       }\n   ],\n   \"total\": 2\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Token Missing error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": \"Authorization Token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Property not found error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"No Property  found.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Property",
    "name": "PostApiPropertylist"
  },
  {
    "type": "post",
    "url": "/api/propertyType",
    "title": "Property Type List",
    "group": "Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authorization Token(required in header)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>{1:success, 0:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>{message:'Property Type  successfully'}</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "result",
            "description": "<p>Property Type Array</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": 1,\n   \"message\": \"Property Type  successfully\",\n   \"result\": [\n       \"For Sale\",\n       \"For Rent\"\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Token Missing error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": \"Authorization Token not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Property",
    "name": "PostApiPropertytype"
  },
  {
    "type": "post",
    "url": "/api/forgotPassword",
    "title": "Forgot Password",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>{1:success, 0:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>{message:'Forgot password Link sent successfully.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n     \"success\": 1,\n     \"message\": \"Forgot password Link sent successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Email missing",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"Email must be Required\"\n}",
          "type": "json"
        },
        {
          "title": "Email not registered",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"This email is not registered\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User",
    "name": "PostApiForgotpassword"
  },
  {
    "type": "post",
    "url": "/api/login",
    "title": "Login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password(If loginType=0 This field required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "loginType",
            "description": "<p>Login Type(Normal login = 0, Google login = 1,Facebook login = 2, required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>Device Type(required, 1=Android, 2=IOS)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceToken",
            "description": "<p>Device Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image Link</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "socialId",
            "description": "<p>Social Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>{1:success, 0:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>{message:'Login Successfully.'}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>User object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n     \"success\": 1,\n     \"message\": \"Login Successfully.\",\n     \"result\": {\n         \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9oYXJtaXN0ZWNobm9sb2d5LmNvbVwvcmVhbGVzdGF0ZV9hcGlcL2FwaVwvcmVnaXN0ZXIiLCJpYXQiOjE2MjM5MzM3NDUsImV4cCI6MTYyMzkzNzM0NSwibmJmIjoxNjIzOTMzNzQ1LCJqdGkiOiIzSUtQSUpXMUsyVmFiUkxDIiwic3ViIjozNywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.gdxJyf32GIk11kd3DhXU-MLnD4SoIQhZPpiNoeZyBRM\"\n         \"name\": \"test\",\n         \"email\": \"test@gmail.com\",\n         \"phoneNumber\": \"123456\",\n         \"address\": \"\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Email Missing error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"Email Required.\"\n}",
          "type": "json"
        },
        {
          "title": "Device type missing error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"Device type is Required.\"\n}",
          "type": "json"
        },
        {
          "title": "Device token is missing error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"Device token is Required.\"\n}",
          "type": "json"
        },
        {
          "title": "Login type is missing error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"Login type Required.\"\n}",
          "type": "json"
        },
        {
          "title": "Email not registered",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"This email is not registered\"\n}",
          "type": "json"
        },
        {
          "title": "Password missing",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"Password must be Required\"\n}",
          "type": "json"
        },
        {
          "title": "Credential not match",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"Invalid email or password.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User",
    "name": "PostApiLogin"
  },
  {
    "type": "post",
    "url": "/api/register",
    "title": "Register",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>Device Type(required, 1=Android, 2=IOS)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceToken",
            "description": "<p>Device Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Phone Number(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>{1:success, 0:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>{message:'User registered successfully'}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>User object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": 1,\n   \"message\": \"User registered successfully\",\n   \"result\": {\n       \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9oYXJtaXN0ZWNobm9sb2d5LmNvbVwvcmVhbGVzdGF0ZV9hcGlcL2FwaVwvcmVnaXN0ZXIiLCJpYXQiOjE2MjM5MzM3NDUsImV4cCI6MTYyMzkzNzM0NSwibmJmIjoxNjIzOTMzNzQ1LCJqdGkiOiIzSUtQSUpXMUsyVmFiUkxDIiwic3ViIjozNywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.gdxJyf32GIk11kd3DhXU-MLnD4SoIQhZPpiNoeZyBRM\"\n       \"first_name\": \"test\",\n       \"email\": \"test@gmail.com\",\n       \"device_type\": \"1\",\n       \"device_token\": \"1\",\n       \"phone_number\": \"123456\",\n       \"id\": 37,\n       \"name\": \"test\"\n   },\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Name Missing error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"Name is Required.\"\n}",
          "type": "json"
        },
        {
          "title": "Password Missing error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"Password is Required.\"\n}",
          "type": "json"
        },
        {
          "title": "Email Missing error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"Email is Required.\"\n}",
          "type": "json"
        },
        {
          "title": "Device type Missing error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"Device type is Required.\"\n}",
          "type": "json"
        },
        {
          "title": "Device token Missing error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"Device token is Required.\"\n}",
          "type": "json"
        },
        {
          "title": "Phone number Missing error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"Phone number is Required.\"\n}",
          "type": "json"
        },
        {
          "title": "Email exists",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"This Email Already Exists\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User",
    "name": "PostApiRegister"
  },
  {
    "type": "post",
    "url": "/api/updateProfile",
    "title": "Update Profile(FORM DATA)",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authorization Token(required in header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Phone number(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image",
            "description": "<p>Image</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>{1:success, 0:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>{message:'Profile Updated successfully.'}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>User object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n     \"success\": 1,\n     \"message\": \"Profile Updated successfully.\",\n     \"result\": {\n         \"name\": \"\",\n         \"email\": \"test@gmail.com\",\n         \"address\": \"harmis gujrat\",\n         \"phoneNumber\": \"1234567\",\n         \"image\": \"\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Token Missing error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": \"Authorization Token not found\"\n}",
          "type": "json"
        },
        {
          "title": "Name missing",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"Name must be Required\"\n}",
          "type": "json"
        },
        {
          "title": "Email missing",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"Email must be Required\"\n}",
          "type": "json"
        },
        {
          "title": "Phone number missing",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"Phone number must be Required\"\n}",
          "type": "json"
        },
        {
          "title": "Email already exists",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"This email already exists\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User",
    "name": "PostApiUpdateprofile"
  },
  {
    "type": "post",
    "url": "/api/userDetails",
    "title": "User Details",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authorization Token(required in header)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>{1:success, 0:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>{message:'User detail retrived successfully'}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>User object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n     \"success\": 1,\n     \"message\": \"User detail retrived successfully\",\n     \"result\": {\n         \"name\": \"\",\n         \"email\": \"test@gmail.com\",\n         \"address\": \"harmis gujrat\",\n         \"phoneNumber\": \"1234567\",\n         \"image\": \"\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Token Missing error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": \"Authorization Token not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User",
    "name": "PostApiUserdetails"
  },
  {
    "type": "post",
    "url": "/api/addWishlist",
    "title": "Property Type List",
    "group": "Wishlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authorization Token(required in header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "propertyId",
            "description": "<p>Property Id (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>{1:success, 0:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>(Note:If wishlist in already exist product so Product will remove to wishlist to call this api){message:'Wishlist in added  successfully'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": 1,\n  \"message\": \"Wishlist in added  successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Token Missing error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": \"Authorization Token not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Wishlist",
    "name": "PostApiAddwishlist"
  },
  {
    "type": "post",
    "url": "/api/wishlist",
    "title": "Wishlist",
    "group": "Wishlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authorization Token(required in header)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>{1:success, 0:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>{message:'Wishlist successfully'}</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "result",
            "description": "<p>Array Of Property List</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": 1,\n   \"message\": \"Wishlist successfully\",\n   \"result\": [\n       {\n           \"id\": 396,\n           \"propertyName\": \"Unique Kamshet Dome with Breathtaking Views\",\n           \"price\": 1500,\n           \"address\": \"Dome house hosted by Sapna\",\n           \"lat\": \"23.07462100\",\n           \"long\": \"72.51202400\",\n           \"isFavorite\": true,\n           \"subCategory\": \"\",\n           \"category\": \"Residential\",\n           \"bathRooms\": \"5\",\n           \"bedRooms\": \"4\",\n           \"propertyType\": \"For Rent\",\n           \"areaSize\": \"30000\",\n           \"image\": \"https://harmistechnology.com/realestate/pictures/listing-thumb/1/21-06-21 10:59-1624273187.1d6426ed-d429-424b-a846-a181f83bf709.jpeg.jpeg\"\n       }\n   ],\n   \"total\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Token Missing error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": \"Authorization Token not found\"\n}\n}",
          "type": "json"
        },
        {
          "title": "Property not found error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"status\": 0,\n\t\t \"error\": \"No Property  found.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Wishlist",
    "name": "PostApiWishlist"
  }
] });
