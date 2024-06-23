import { Product } from "@/generated/dto/product";
import { PaymentService } from "@/lib/api/payment";
import { PlusCircle } from "lucide-react";
import React, { useState } from "react";
import RenderRazorpay from "./Razorpay";
import { OrderResponseDto } from "@/generated/dto/order-response-dto";

const paymentService = new PaymentService();

const FoodCard = ({ images, name, description, price, _id }: Product) => {
  const [order, setOrder] = useState<OrderResponseDto | null>(null);
  const handlePayment = async () => {
    const order = await paymentService.createOrder({
      product_id: _id,
      quantity: 1,
    });
    setOrder(order);
  };
  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 flex items-center">
        <img
          className="w-24 h-24 object-cover rounded-lg"
          src={images[0]}
          alt={name}
        />
        <div className="ml-4 flex-grow">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-600 text-sm ">{description}</p>

          <p className="text-gray-800 font-bold mt-2">
            <span className=" font-bold ">&#x20B9;</span>
            {price}
          </p>
        </div>
        <div className="ml-4">
          <button
            onClick={handlePayment}
            className="bg-teal-700 text-white p-2 rounded-full shadow-lg"
          >
            <PlusCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
      {order && (
        <RenderRazorpay
          amount={order.amount}
          currency={order.currency}
          orderId={order.id}
        />
      )}
    </div>
  );
};

export default FoodCard;
