import { MapPinIcon } from "lucide-react";
import React, { useState } from "react";
import { SearchBox } from "@mapbox/search-js-react";

const SearchBar = () => {
  const [value, setValue] = useState("Kerala");
  return (
    <div className="flex items-center justify-center bg-white shadow-md rounded-full p-2 w-max max-w-2xl mx-auto mt-4">
      <div className="flex items-center p-2">
        <MapPinIcon className="text-primary" />
        <div className="border-l border-gray-300 h-6 mx-4"></div>
      </div>
      <form action="">
        <SearchBox
          marker={true}
          onRetrieve={(res) => {
            setValue(res.features[0].properties.name);
          }}
          value={value}
          theme={{
            variables: { boxShadow: "none" },
          }}
          accessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY!}
        />
      </form>
    </div>
  );
};

export default SearchBar;
