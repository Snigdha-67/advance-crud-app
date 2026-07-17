import {
  Calendar1Icon,
  MapPinCheckIcon,
  PenBox,
  UserCircle2Icon,
} from "lucide-react";

import { CrudTable } from "@generated/prisma/client";
import { format } from "date-fns";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
import { Avatar, AvatarFallback, AvatarImage } from "./shadcnui/avatar";
import { buttonVariants } from "./shadcnui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./shadcnui/card";
import { Separator } from "./shadcnui/separator";

type UserCardsProps = {
  cuData: CrudTable;
};

const UserCard = ({ cuData }: UserCardsProps) => {
  return (
    <Card className="my-4 w-sm">
      <CardHeader className="flex w-full items-center justify-start gap-4">
        <Avatar className="size-12">
          <AvatarImage
            src={cuData.userImage}
            alt="@shadcn"
            className="grayscale"
          />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="">
          <CardTitle className="text-2xl">{cuData.userName}</CardTitle>
          <CardDescription className="text-lg">
            {" "}
            {cuData.userEmail}{" "}
          </CardDescription>
          <CardDescription className="text-lg">
            {" "}
            {cuData.userPhNo}
          </CardDescription>
        </div>
      </CardHeader>
      <Separator />
      <CardContent>
        <div className="text-xl font-bold">Personal Details</div>
        <div className="mt-3 flex flex-wrap gap-2 font-light">
          <div className="">
            <UserCircle2Icon /> {cuData.userGender}
          </div>
          <div className="">
            <Calendar1Icon />{" "}
            {cuData.userDob ? format(cuData.userDob, "dd/MM/yyyy") : ""}
          </div>
          <div className="">
            <MapPinCheckIcon /> {cuData.userState}
          </div>
        </div>
      </CardContent>
      <CardFooter className="grid grid-cols-2 gap-4">
        <DeleteButton userId={cuData.userId} />
        <Link
          href={`/${cuData.userId}`}
          className={buttonVariants({ variant: "outline", size: "lg" })}>
          <PenBox /> Edit
        </Link>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
