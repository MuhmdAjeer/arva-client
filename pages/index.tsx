import ShopCard from "@/components/ShopCard";
import SkeletonShopCard from "@/components/skeletons/ShopCardSkeleton";
import Typography from "@/components/ui/Typography";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useShops } from "@/hooks/shops/shop";
import AppLayout from "@/layout/AppLayout";
import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { cardVariants, containerVariants } from "@/lib/utils";

const SearchBar = dynamic(() => import("@/components/searchbar"), {
  ssr: false,
});

const Page = () => {
  const { data: shops } = useShops();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-3 ">
        <div className="grid grid-cols-2 items-center mt-8">
          <Typography variant="h1" className="text-primary">
            Find a <br /> coffee shop <br /> anywhere
          </Typography>
          <AspectRatio ratio={16 / 6}>
            <Image
              sizes="100vw"
              height={0}
              width={0}
              alt="cover image"
              className="w-full h-full rounded  object-cover"
              src="https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?q=80&w=1974"
            />
          </AspectRatio>
        </div>

        <div className="flex flex-col gap-4">
          <SearchBar />
          <Typography className="text-primary" variant="h2">
            Featured coffee shops
          </Typography>
          <motion.div
            className="grid gap-4 my-8 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {shops
              ? shops.map((shop, index) => (
                  <motion.div
                    key={shop._id}
                    className="w-full bg-white rounded-lg shadow-md overflow-hidden"
                    variants={cardVariants}
                  >
                    <Link href={`/shop/${shop._id}`} key={index}>
                      <ShopCard
                        image={shop.images[0]}
                        name={shop.name}
                        rating={4.3}
                        reviews={5193}
                      />
                    </Link>
                  </motion.div>
                ))
              : Array(6)
                  .fill(0)
                  .map(() => <SkeletonShopCard />)}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default Page;
