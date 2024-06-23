import { ShopService } from "@/lib/api/shop";
import { useQuery } from "@tanstack/react-query";

const shopService = new ShopService();

export const useShops = () => {
  const query = useQuery({
    queryKey: ["GET_ALL_SHOPS"],
    queryFn: async () => await shopService.getAllShops(),
  });
  return query;
};

export const useShop = (id: string) => {
  return useQuery({
    queryKey: ["GET_SHOP", id],
    queryFn: async () => await shopService.getShop(id),
  });
};
