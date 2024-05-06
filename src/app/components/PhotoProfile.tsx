import React from "react";
import Image from "next/image";

function PhotoProfile() {
  return (
    <div className="relative m-auto w-24 h-24 md:w-48 md:h-48 flex items-center justify-center py-2">
      <Image
        src="/images/pictureLeoNoBackground.png"
        alt="My Image"
        layout="fill"
        objectFit="cover"
        className="rounded-full shadow-2xl hover:shadow-lg transition "
      />
    </div>
  );
}

export default PhotoProfile;
