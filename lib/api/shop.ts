import { Shop } from "@/generated/dto/shop";
import { APIService } from "./client";

export class ShopService extends APIService {
  constructor() {
    super();
  }

  public async getAllShops(): Promise<Shop[]> {
    return this.get("/shops").then((res) => res.data);
  }

  public async getShop(id: string): Promise<Shop> {
    return this.get(`/shops/${id}`).then((res) => res.data);
  }
}
