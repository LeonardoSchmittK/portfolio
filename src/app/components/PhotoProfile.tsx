import React from "react";
import Image from "next/image";

function PhotoProfile() {
  return (
    <div className="pb-5">
      <Image
        src="/images/pictureLeoNoBackground.png"
        alt="My Image"
        width={200}
        height={2000}
        className="rounded-full shadow-2xl hover:shadow-lg transition"
      />
    </div>
  );
}

export default PhotoProfile;
