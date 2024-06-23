import { ProductQueryDto } from "@/generated/dto/product-query-dto";
import { ProductsService } from "@/lib/api/products";
import { useQuery } from "@tanstack/react-query";

const productsService = new ProductsService();

export const useShopProducts = (id: string, query?: ProductQueryDto) => {
  return useQuery({
    queryKey: ["GET_SHOP_PRODUCTS", id, query],
    queryFn: async () => await productsService.getShopProducts(id, query),
  });
};
