import Typography from "@/components/ui/Typography";
import AppLayout from "@/layout/AppLayout";
import { useRouter } from "next/router";
import React, { ReactElement, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import FoodCard from "@/components/FoodCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CoffeeIcon, GlassWater, HandPlatter } from "lucide-react";
import {
  cardVariants,
  categoryVariants,
  cn,
  containerVariants,
} from "@/lib/utils";
import { useShop } from "@/hooks/shops/shop";
import { useShopProducts } from "@/hooks/shops/products";
import { CategoryEnum } from "@/generated/dto/product-query-dto";
import SkeletonFoodCard from "@/components/skeletons/FoodCardSkeleton";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const Page = () => {
  const router = useRouter();
  const name = router.query.name?.toString();
  const { data: shop } = useShop(name!);
  const [activeCategory, setActiveCategory] = useState(CategoryEnum.Coffee);
  const { data: categoryProducts } = useShopProducts(shop?._id!, {
    category: activeCategory,
  });

  const handleCategoryClick = (category: CategoryEnum) => {
    setActiveCategory(category);
  };

  return (
    <div className="container flex flex-col gap-2 mx-auto px-4 py-8 max-w-[800px]">
      <div>
        <Typography className="text-primary font-extrabold" variant="h2">
          {shop?.name}
        </Typography>
      </div>
      <div>
        <Carousel>
          <CarouselContent>
            {shop?.images.map((image) => (
              <CarouselItem>
                <img
                  className="w-full h-48 object-cover rounded-lg"
                  src={image}
                  alt={"image"}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="my-4 flex gap-4">
        <motion.div
          onClick={() => handleCategoryClick(CategoryEnum.Coffee)}
          className={`flex flex-col items-center rounded-xl p-4 w-max h-auto cursor-pointer ${
            activeCategory === CategoryEnum.Coffee
              ? "bg-primary text-white"
              : "bg-gray-100 text-primary"
          }`}
          whileHover="hover"
          variants={categoryVariants}
        >
          <CoffeeIcon className="h-6 w-6" />
          <Typography variant="h4">Coffee</Typography>
        </motion.div>

        <motion.div
          onClick={() => handleCategoryClick(CategoryEnum.Drinks)}
          className={`flex flex-col items-center rounded-xl p-4 w-max h-auto cursor-pointer ${
            activeCategory === CategoryEnum.Drinks
              ? "bg-primary text-white"
              : "bg-gray-100 text-primary"
          }`}
          whileHover="hover"
          variants={categoryVariants}
        >
          <GlassWater className="h-6 w-6" />
          <Typography variant="h4">Drinks</Typography>
        </motion.div>

        <motion.div
          onClick={() => handleCategoryClick(CategoryEnum.Foods)}
          className={`flex flex-col items-center rounded-xl p-4 w-max h-auto cursor-pointer ${
            activeCategory === CategoryEnum.Foods
              ? "bg-primary text-white"
              : "bg-gray-100 text-primary"
          }`}
          whileHover="hover"
          variants={categoryVariants}
        >
          <HandPlatter className="h-6 w-6" />
          <Typography variant="h4">Foods</Typography>
        </motion.div>
      </div>

      <Separator />

      <motion.div
        className="grid grid-cols-2 justify-center items-center gap-4 mt-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {categoryProducts
          ? categoryProducts?.map((food) => (
              <motion.div
                key={shop?._id}
                className="w-full bg-white rounded-lg shadow-md overflow-hidden"
                variants={cardVariants}
              >
                <FoodCard {...food} key={food.name} />
              </motion.div>
            ))
          : Array(10)
              .fill(0)
              .map(() => <SkeletonFoodCard />)}
      </motion.div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default Page;
