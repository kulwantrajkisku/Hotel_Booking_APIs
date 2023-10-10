# Hotel_Booking_APIs
This is a Hotel Booking APIs. Using which you can create a hotel, create a room along with it you can perform all the CRUD operation on the Hotel / Room / User.

# CRUD OPERATIONS
Register:  POST: localhost:8000/api/auth/register
Login:     POST: localhost:8000/api/auth/login

Create Hotel: POST: localhost:8000/api/hotels/
Update Hotel: PUT:  localhost:8000/api/hotels/find/:hotel_ID
Get Hotel:    GET:  localhost:8000/api/hotels/find/:hotel_ID
Get All Hotel:GET:  localhost:8000/api/hotels/
Delete Hotel: DELETE: localhost:8000/api/hotels/find/:hotel_ID

Create Room:  POST: localhost:8000/api/rooms/:hotel_ID
Update Room:  PUT:  localhost:8000/api/rooms/:Room_ID
Delete Room:  DELETE: localhost:8000/api/rooms/:Room_ID/:Hotel_ID
Get By Id Room: GET: localhost:8000/api/rooms/:Room_ID
Get All Room: Get:  localhost:8000/api/rooms/

Update User: PUT: localhost:8000/api/users/:userId
Delete User: DELETE: localhost:8000/api/users/:userId
Single User: GET: localhost:8000/api/users/:userId
All user:    GET: localhost:8000/api/users/







