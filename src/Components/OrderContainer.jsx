import React, { use } from "react";
import Card from "./Card";

const OrderContainer = ({ orderPromise }) => {
  // console.log(orderPromise);
  // use er kaj holo kono promise dile data dekhano
  // 4 no process
  const orders = use(orderPromise);
  console.log(orders);
  return (
    <div>
      <Card> </Card>
      <section className="w-11/12 mx-auto py-10 grid grid-cols-1
       lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7">
            
            </div>
        <div className="lg:col-span-5 ">Cooking + Ready Food</div>
      </section>
    </div>
  );
};

export default OrderContainer;
