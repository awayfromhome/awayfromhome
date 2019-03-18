import React from "react";
import CreditInfo from "./CreditInfo";
import UserInfo from "./UserInfo";
import HotelInfo from "../List/HotelInfo";
import RoomInfo from "../List/RoomInfo";

export default function Checkout() {
  return (
    <div>
      <CreditInfo />
      <UserInfo />
      <HotelInfo />
      <RoomInfo />
    </div>
  );
}
