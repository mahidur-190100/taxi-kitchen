import React, { use, useState } from "react";
import Card from "./Card";
import OrderCard from "./OrderCrad";
import CookingCard from "./CookingCard";

const OrderContainer = ({ orderPromise }) => {
  // console.log(orderPromise);
  // use er kaj holo kono promise dile data dekhano
  // 4 no process
  const orders = use(orderPromise);
  //   console.log(orders);

  // usesate click korele chnage
  const [cookingItems, setCookingItems] = useState([]);
  const handleOrder = (order) => {
    console.log(order);
    // cookingt items er vitore click kora order ke add korbp
    const newCookingItems = [...cookingItems, order];
    setCookingItems(newCookingItems);
  };
  console.log(cookingItems);
  return (
    <div>
      <Card cookingTotal={cookingItems.length} orderTotal={orders.length}>
        {" "}
      </Card>
      <section
        className="w-11/12 mx-auto py-10 grid grid-cols-1
       lg:grid-cols-12 gap-5"
      >
        <div className="lg:col-span-7">
          <h2 className="font-bold text-4xl"> Current Orders</h2>
          <div className=" space-y-5">
            {
              //oders ke map korlam item dara
              orders.map((item) => (
                <OrderCard
                  handleOrder={handleOrder}
                  key={item.id}
                  order={item}
                ></OrderCard>
              ))
            }
          </div>
        </div>
        <div className="lg:col-span-5 ">
          <h2 className="font-bold text-4xl"> Cooking Now</h2>
          <div className="shadow p-10 space-y-5">
            {cookingItems.map((cookingItem) => (
              <CookingCard key={cookingItem.id} cookingItem={cookingItem}>  </CookingCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderContainer;
