import { ProductQueryDto } from "@/generated/dto/product-query-dto";
import { APIService } from "./client";
import { Product } from "@/generated/dto/product";

export class ProductsService extends APIService {
  public async getShopProducts(
    shopId: string,
    params?: ProductQueryDto
  ): Promise<Product[]> {
    return this.get(`/products/shop/${shopId}`, { params }).then(
      (res) => res.data
    );
  }
}
