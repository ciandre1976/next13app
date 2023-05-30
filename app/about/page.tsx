import React from "react";
import Link from "next/link";

export const metadata = {
  title: "aBOUT pAGE",
};

export default function About() {
  return (
    <div className="bg-gray-700 h-100 justify-center h-screen ">
      <h1 className="text-white text-2xl  justify-center text-center">About</h1>
      <p className="text-white text-lg space-x-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime unde
        repudiandae voluptate fugiat. Cumque veniam totam vero ad beatae quia
        recusandae consectetur laboriosam quas ea. Tempore magni nam asperiores
        sunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
        unde repudiandae voluptate fugiat. Cumque veniam totam vero ad beatae
        quia recusandae consectetur laboriosam quas ea. Tempore magni nam
        asperiores sunt. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Maxime unde repudiandae voluptate fugiat. Cumque veniam totam vero
        ad beatae quia recusandae consectetur laboriosam quas ea. Tempore magni
        nam asperiores sunt. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Maxime unde repudiandae voluptate fugiat. Cumque veniam totam vero
        ad beatae quia recusandae consectetur laboriosam quas ea. Tempore magni
        nam asperiores sunt.
      </p>
      <Link className="m-4 text-xl text-gray-100 hover:text-amber-500" href="/">
        Home
      </Link>
    </div>
  );
}
