import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";

interface ReviewCardProps {
  name: string;
  description: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, description }) => {
  const initials = name
    .split(" ")
    .map((word: string) => word[0])
    .join("");
  return (
    <Card className="flex flex-col text-white p-4 m-2 w-64">
      <CardHeader>
        <div className="flex">
          <Avatar className="md-2 size-12">
            //{" "}
            <AvatarImage src="https://randomuser.me/api/portraits/men/46.jpg"></AvatarImage>
            // <AvatarFallback>{initials}</AvatarFallback>
            //{" "}
          </Avatar>
          <CardTitle className="pl-5 font-bold text-xl m-auto">
            {name}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p>
          "<i>{description}</i>"
        </p>
      </CardContent>
    </Card>

    // <div className="flex flex-col rounded-md bg-gray-800 p-4 m-2 w-64">
    //   <div className="flex items-center gap-3 mb-3">
    //     <Avatar>
    //       <AvatarImage src="https://randomuser.me/api/portraits/men/46.jpg"></AvatarImage>
    //       <AvatarFallback>{initials}</AvatarFallback>
    //     </Avatar>
    //     <p className="font-medium text-white">{name}</p>
    //   </div>
    //   <p className="text-gray-300">{description}</p>
    // </div>
  );
};

export default ReviewCard;
