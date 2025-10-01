import React, { use, useState } from "react";
import Card from "./Card";
import OrderCard from "./OrderCrad";
import CookingCard from "./CookingCard";
import Ready from "./Ready";

const OrderContainer = ({ orderPromise }) => {
  // console.log(orderPromise);
  // use er kaj holo kono promise dile data dekhano
  // 4 no process
  const data = use(orderPromise);
    // console.log(orders);
    const[orders,setOrders] = useState(data);

  // usesate click korele chnage
  const [cookingItems, setCookingItems] = useState([]);
  const handleOrder = (order) => {
    // console.log(order);
    // ekbar i add korbo card ke 2 bar korle alert dibe
    const isExist = cookingItems.find((item)=> item.id == order.id);
    if(isExist){
      alert('Already cooking');
      return
    }



    // cookingt items er vitore click kora order ke add korbp
    const newCookingItems = [...cookingItems, order];
    setCookingItems(newCookingItems);
  };
  // console.log(cookingItems);

// cokked button e click korle order ready te jabe
const [readyItems, setReadyItems] = useState([]);
const handleCooking = (readyItem) => {
  // console.log(readyItem);
  const newReadyItems = [...readyItems, readyItem];
  setReadyItems(newReadyItems);
  // 2. cooking item theke remove korbo
  const remainingCooking = cookingItems.filter((item)=> item.id !== readyItem.id);
  // console.log(remainingCooking);
  setCookingItems(remainingCooking);

  // 3. orders thekeo remove korbo
  const remainingOrders = orders.filter((item)=> item.id !== readyItem.id);
  setOrders(remainingOrders);
}
  return (
    <div>
      <Card readyTotal= {readyItems.length} cookingTotal={cookingItems.length} orderTotal={orders.length}>
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
              <CookingCard key={cookingItem.id} cookingItem={cookingItem} handleCooking={handleCooking}>  </CookingCard>
            ))}
              
              <h2 className="font-bold text-4xl"> Ready Now</h2>
              <div className="shadow p-10 space-y-5">
                {readyItems.map((readyItem) =>(
                <Ready key={readyItem.id} readyItem={readyItem}>  </Ready>
              ))} 

              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderContainer;
