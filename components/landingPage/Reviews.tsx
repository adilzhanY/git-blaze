"use client";
import React, { useEffect, useRef } from "react";
import ReviewCard from "./ReviewCard";
import Marquee from "react-fast-marquee";
import { MailWarning } from "lucide-react";

const Reviews = () => {
  const reviewList = [
    <ReviewCard name="John Doe" description="It's a cool website" />,
    <ReviewCard
      name="Sarah Johnson"
      description="This site helped me level up my GitHub game in just a week! 🚀"
    />,
    <ReviewCard
      name="Mike Chen"
      description="Exactly what I needed to make my profile stand out to recruiters"
    />,
    <ReviewCard
      name="Alex Rodriguez"
      description="The tutorials are super easy to follow, even for beginners"
    />,
    <ReviewCard
      name="Emma Wilson"
      description="Got three interview calls after updating my GitHub using these tips! 💯"
    />,
    <ReviewCard
      name="Jamal Washington"
      description="Worth every minute I spent on it. My profile looks professional now"
    />,
    <ReviewCard
      name="Priya Patel"
      description="Simple but effective strategies that actually work"
    />,
    <ReviewCard
      name="Tyler Brooks"
      description="My commits and PRs are so much better organized now"
    />,
    <ReviewCard
      name="Olivia Martinez"
      description="The community features are amazing, connected with other devs!"
    />,
    <ReviewCard
      name="David Kim"
      description="Straight up changed how I approach my code documentation"
    />,
  ];

  return (
    <>
      <div className="overflow-hidden flex flex-wrap justify-center gap-4 py-10 bg-black">
        <div className="text-white text-2xl font-bold">
          What Developers say
        </div>
        <Marquee pauseOnHover>
          {reviewList.map((review, index) => (
            <div key={index}>{review}</div>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default Reviews;
