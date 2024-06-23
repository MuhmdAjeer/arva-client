import { OrderDto } from "@/generated/dto/order-dto";
import { APIService } from "./client";
import { OrderResponseDto } from "@/generated/dto/order-response-dto";

export class PaymentService extends APIService {
  public async createOrder(order: OrderDto): Promise<OrderResponseDto> {
    return this.post("/order", order).then((res) => res.data);
  }
}
