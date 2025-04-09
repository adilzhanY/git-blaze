import HeroSection from "@/components/landingPage/HeroSection";
import Reviews from "@/components/landingPage/Reviews";
import React from "react";
import Divider from "@/components/Divider";

const Page = () => {
  return (
    <>
      <HeroSection />
      <Divider className="rounded shadow-lg" />
      <Reviews />
      <Divider className="rounded shadow-lg" />
    </>
  );
};

export default Page;
