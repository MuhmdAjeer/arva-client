import { useEffect, useRef } from "react";
import Axios from "axios";
import { toast } from "sonner";

const loadScript = (src: string) =>
  new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      console.log("razorpay loaded successfully");
      resolve(true);
    };
    script.onerror = () => {
      console.log("error in loading razorpay");
      resolve(false);
    };
    document.body.appendChild(script);
  });

interface IProps {
  orderId: string;
  currency: string;
  amount: string;
}

const RenderRazorpay = ({ orderId, currency, amount }: IProps) => {
  const displayRazorpay = async (options: {}) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      console.log("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const rzp1 = (window as any).Razorpay(options);

    rzp1.open();
  };

  const options = {
    key: process.env.KEY_ID,
    amount,
    currency,
    name: "Coffee Shop Finder",
    order_id: orderId,
    modal: {
      confirm_close: true,
    },
    handler: function (response: any) {
      toast.success("Product added successfully");
    },

    retry: {
      enabled: false,
    },
    timeout: 900,
    theme: {
      color: "#16A34A",
    },
  };

  useEffect(() => {
    displayRazorpay(options);
  }, []);

  return null;
};

export default RenderRazorpay;
