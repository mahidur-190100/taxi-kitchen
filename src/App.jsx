import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Card from "./Components/Card";
import OrderContainer from "./Components/OrderContainer";
// data load er process 3 ta 
// use()hook use kore data fetch korle varibale e call kore rakhte hou
// process 1: data load korar jonno ekta function create kora
const loadOrders = () => fetch("/orders.json").then((res) => res.json());
// loadOrders ekta promise return korbe
function App() {
  //2. shei promise ta ekta variable e rakhbo mane app er moddhe vangabo
  const orderPromise = loadOrders();
  // console.log(orderPromise);
  return (
    <>
      <section>
        <Navbar> </Navbar>
      </section>
      <section>
        <Body>Kitchen Room</Body>
      </section>
      <Suspense fallback={<h1>Loading...</h1>}>
      {/* 3 no jekhane dekhabo datat okhane pathabo props hishbae suspense die wrap kore */}
        {/* use bebohar kore dtata dekhale suspnse use krte hoy component er moddhe */}
        {/* ordercontainer e data dekhabo tai ekhnae props akare pathai disi */}
        {/* 4 holo user maddhome props ta kaj korabo */}
        <OrderContainer orderPromise={orderPromise}> </OrderContainer>
      </Suspense>

      <section></section>
    </>
  );
}

export default App;
