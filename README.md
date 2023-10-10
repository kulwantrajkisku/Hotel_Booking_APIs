# Hotel_Booking_APIs
This is a Hotel Booking APIs. Using which you can create a hotel, create a room along with it you can perform all the CRUD operation on the Hotel / Room / User.

### CRUD OPERATIONS
1. **Register**:  POST: localhost:8000/api/auth/register
2. **Login**:     POST: localhost:8000/api/auth/login

***

1. **Create Hotel**: POST: localhost:8000/api/hotels/
2. **Update Hotel**: PUT:  localhost:8000/api/hotels/find/:hotel_ID
3. **Get Hotel**:    GET:  localhost:8000/api/hotels/find/:hotel_ID
4. **Get All Hotel**:GET:  localhost:8000/api/hotels/
5. **Delete Hotel**: DELETE: localhost:8000/api/hotels/find/:hotel_ID

***

1. **Create Room**:  POST: localhost:8000/api/rooms/:hotel_ID
2. **Update Room**:  PUT:  localhost:8000/api/rooms/:Room_ID
3. **Delete Room**:  DELETE: localhost:8000/api/rooms/:Room_ID/:Hotel_ID
4. **Get By Id Room**: GET: localhost:8000/api/rooms/:Room_ID
5. **Get All Room**: Get:  localhost:8000/api/rooms/
***
1. **Update User**: PUT: localhost:8000/api/users/:userId
2. **Delete User**: DELETE: localhost:8000/api/users/:userId
3. **Single User**: GET: localhost:8000/api/users/:userId
4. **All user**:    GET: localhost:8000/api/users/







