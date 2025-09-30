import { ScrollText } from "lucide-react";
import React from "react";

const Card = ({orderTotal, cookingTotal }) => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:justify-between items-center " >
      <div className="border-4 border-dotted rounded-2xl border-primary p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <ScrollText className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Current Orders
            <h2 className="text-6xl font-bold">{orderTotal}</h2>
          </div>
        </div>
      </div>

      <div className="border-4 border-dotted rounded-2xl border-primary p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <ScrollText className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Current Orders
            <h2 className="text-6xl font-bold">{cookingTotal }</h2>
          </div>
        </div>
      </div>

      <div className="border-4 border-dotted rounded-2xl border-primary p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <ScrollText className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Current Orders
            <h2 className="text-6xl font-bold">0</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
