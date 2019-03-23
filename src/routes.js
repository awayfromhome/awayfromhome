import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import HotelList from './components/List/HotelList';
import RoomList from './components/List/RoomList';
import Room from './components/Room/Room';
import Checkout from './components/Checkout/Checkout';
import Profile from './components/Profile/Profile';
import Owner from './components/Profile/Owner/Owner';

export default (
   <Switch>
      <Route path="/Profile" component={Profile} />
      <Route path="/Owner" component={Owner} />
      <Route path="/Checkout" component={Checkout} />
      <Route path="/Room/:id" component={Room} />
      <Route path="/Roomlist/:id" component={RoomList} />
      <Route path="/Hotellist" component={HotelList} />
      <Route exact path="/" component={HomePage} />
   </Switch>
);

// Line 11 - Checkout Page Page with other CreditInfo and UserInfo components rendered in there
// Line 12 - After a room is selected it will be directed to that room through match.params
// Line 13 - List of Rooms available after Hotel is clicked
// Line 14 - List of Hotels in the Area
// Lne 15 - Direct HomePage that user begins their search
