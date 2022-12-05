# Branded Things Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `POST /package`
- `GET /package`
- `DELETE /package/:id`
- `PUT /package/:id`
- `POST /order`
- `GET /history`




&nbsp;

## 1. POST /register

Description : Register user account

Request:
TypeUser
1 = user biasa
2 = super user
```json
{
  "Name": "string",
  "Email": "string",
  "Phone": "string",
  "Address": "string",
  "TypeUser": "string",
  "Password": "string"
}

```


_Response (200 - OK)_

```json
{
  "Name": "string",
  "Email": "string",
  "Phone": "string",
  "Address": "string",
  "TypeUser": "string",
  "Password": "string"
}

```

_Response (500 - Bad Request)_

```json
{
  "message" : "Validation error"
}
{
  "message": "Invalid Server error"
}
```

## 2. POST /login

Description : Login user

Request:
```json
{
  "email": "string",
  "password": "string",
}

```


_Response (200 - OK)_

```json
{
  "message": "string",
  "access_token": "string",
}

```

_Response (401 - Unauthorized)_

```json
{
  "message" : "Email/password Invalid"
}
```


_Response (404 - Unauthorized)_

```json
{
  "message" : "Id not found"

```

_Response (500 - Bad Request)_

```json
{
  "message" : "Validation error"
}
{
  "message": "Invalid Server error"
}
```


&nbsp;

## 3. POST /package

Request:
- headers : access_token

- body:

```json
{
  "Name": "string",
  "Description": "string",
  "Price": "integer",
  "Image": file,
}
```

_Response (201 - Created)_

```json
{
  "id" : "integer",
  "Name": "string",
  "Description": "string",
  "Price": "integer",
  "Image": "string",
  "createdAt": "date",
  "updatedAt": "date",
}
```

_Response (400 - Validation Error)_

```json
{
  "message": "Name cant be empty"
}
OR
{
  "message": "Description cant be empty"
}
OR
{
  "message": "Price cant below 100000"
}
OR
{
  "message": "Image cant be empty"
}
```

_Response (403 - Unauthorized)_

```json
{
  "message": "Your account is unauthorized'"
}
```

_Response (403 - Forbidden Error)_

```json
{
  "message": "You cant access"
}
```

&nbsp;

## 4. GET /package

Description : Get All Package from database

Request:


_Response (200 - OK)_

```json
[
  {
    "PackageId": 1,
    "Name": "Labuan bajo",
    "Description": "Bajo mantep",
    "Price": 15000,
    "Image": "image link",
    "createdAt" : "2021-10-25 20:04:54.579 +0700",
    "updatedAt" : "2021-10-25 20:04:54.579 +0700"
  },
  {
    "PackageId": 2,
    "Name": "MEdan",
    "Description": "Medan mantap",
    "Price": 50000,
    "Image": "image link",
    "createdAt" : "2021-10-25 20:04:54.579 +0700",
    "updatedAt" : "2021-10-25 20:04:54.579 +0700"
  }
  ...
]

```

_Response (500 - Bad Request)_

```json
{
  "message": "Invalid"
}
```

&nbsp;

## 5. DELETE /package/:id

Description:
- Delete package from database who has same id

Request:

- params id: 

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
{
    "message": "Delete Success"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Your account is unauthorized'"
}

_Response (403 - OK)_

```json
{
    "message": "You cant access"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Package travel dengan id ${PackageId} tidak ditemukan"
}
```

_Response (500 - Bad Request)_

```json
{
  "message": "Internal server error"
}
```

&nbsp;

## 6. PUT /package/:id

Description:
- Update package by id

Request:
- headers : access_token
- params id:
```json
{
  "id": "integer"
}
```


- body:
```json
{
    "Name": "string",
    "Description": "string",
    "Price": "integer",
    "Image": file,
  }
```

_Response (200 - OK)_

```json
{
    "PackageId": 1,
    "Name": "Labuan bajo",
    "Description": "Bajo mantep",
    "Price": 15000,
    "Image": "image link",
    "createdAt" : "2021-10-25 20:04:54.579 +0700",
    "updatedAt" : "2021-10-25 20:04:54.579 +0700"
  }
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Your account is unauthorized"
}

_Response (404 - Not Found)_

```json
{
  "message": "Package not found"
}
```
_Response (400 - Validation Error)_

```json
{
  "message": "Name cant be empty"
}
OR
{
  "message": "Description cant be empty"
}
OR
{
  "message": "Price cant below 100000"
}
OR
{
  "message": "Image cant be empty"
}
```

_Response (500 - Not Found)_

```json
{
  "message": "Internal server error"
}
```

&nbsp;

## 7. GET /history

Description:
- Get history by id

Request:

- headers : access_token


_Response (200 - OK)_

```json
[
    {
        "DetaiId": 8,
        "PackageId": 4,
        "OrderId": 12,
        "qty": 2,
        "createdAt": "2022-12-04T15:22:02.914Z",
        "updatedAt": "2022-12-04T15:22:02.914Z",
        "Package": {
            "PackageId": 4,
            "Name": "Jalan2 bali",
            "Description": "Hayu jalan2 bali",
            "Price": 4000000,
            "Image": "image",
            "createdAt": "2022-12-04T15:21:57.023Z",
            "updatedAt": "2022-12-04T15:35:00.893Z"
        },
        "Order": {
            "OrderId": 12,
            "OrderNumber": 2,
            "CustomerId": 3,
            "TotalPrice": 8000000,
            "createdAt": "2022-12-04T15:22:02.908Z",
            "updatedAt": "2022-12-04T15:22:02.908Z"
        }
    }
]
```

_Response (403 - Unauthorized)_

```json
{
  "message": "Your account is unauthorized'"
}


_Response (500 - Not Found)_

```json
{
  "message": "Internal server error"
}
```

&nbsp;


## 8. POST /order

Description : Order package

Request:
- headers : access_token

```json
{
    "OrderNumber" : 1,
    "qty" : 2,
    "PackageId" : 1
}
```



_Response (200 - OK)_

```json
{
    "DetaiId": 9,
    "PackageId": 4,
    "OrderId": 13,
    "qty": 2,
    "createdAt": "2022-12-05T17:46:15.934Z",
    "updatedAt": "2022-12-05T17:46:15.934Z",
    "Package": {
        "PackageId": 4,
        "Name": "Jalan2 bali",
        "Description": "Hayu jalan2 bali",
        "Price": 4000000,
        "Image": "image",
        "createdAt": "2022-12-04T15:21:57.023Z",
        "updatedAt": "2022-12-04T15:35:00.893Z"
    },
    "Order": {
        "OrderId": 13,
        "OrderNumber": 3,
        "CustomerId": 3,
        "TotalPrice": 8000000,
        "createdAt": "2022-12-05T17:46:15.893Z",
        "updatedAt": "2022-12-05T17:46:15.893Z"
    }
}

```
_Response (403 - Unauthorized)_

```json
{
  "message": "Your account is unauthorized'"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Package travel dengan id ${PackageId} tidak ada"
}
```

_Response (500 - Bad Request)_

```json
{
  "message": "Internal Server Error"
}
```

