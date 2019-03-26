import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import HotelList from './components/List/HotelList';
import RoomList from './components/List/RoomList';
import Checkout from './components/Checkout/Checkout';
import Profile from './components/Profile/UserProfile/Profile';
import Owner from './components/Profile/Owner/Owner';
import Authorization from './Authorization';
const guest = Authorization(['guest', 'user', 'admin']);
const owner = Authorization(['admin']);
const user = Authorization(['user']);

export default (
	<Switch>
		<Route path="/Profile" component={user(Profile)} />
		<Route path="/Owner" component={owner(Owner)} />
		<Route path="/Checkout" component={guest(Checkout)} />
		<Route path="/Roomlist/:id" component={guest(RoomList)} />
		<Route path="/Hotellist" component={guest(HotelList)} />
		<Route exact path="/" component={HomePage} />
	</Switch>
);

// Line 11 - Checkout Page Page with other CreditInfo and UserInfo components rendered in there
// Line 12 - After a room is selected it will be directed to that room through match.params
// Line 13 - List of Rooms available after Hotel is clicked
// Line 14 - List of Hotels in the Area
// Line 15 - Direct HomePage that user begins their search
