"use client";
import Image from "next/image";

export default function Explorebtn() {
  return (
    <button
      type="button"
      id="explore-btn"
      className="mt-7 mx-auto"
      onClick={() => {
        console.log("");
      }}
    >
      <a href="#events">Explore Events</a>
      <Image
        src="/icons/arrow-down.svg"
        alt="down arrow"
        width={20}
        height={20}
        className="inline-block ml-2"
      />
    </button>
  );
}
