import {
  Calendar1Icon,
  MapPinCheckIcon,
  PenBox,
  Trash2,
  UserCircle2Icon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./shadcnui/avatar";
import { Button } from "./shadcnui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./shadcnui/card";
import { Separator } from "./shadcnui/separator";

const UserCard = () => {
  return (
    <Card className="my-4 w-sm">
      <CardHeader className="flex w-full items-center justify-start gap-4">
        <Avatar className="size-12">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
            className="grayscale"
          />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="">
          <CardTitle className="text-2xl">Snigdha Dey</CardTitle>
          <CardDescription className="text-lg">abc@gmail.com</CardDescription>
        </div>
      </CardHeader>
      <Separator />
      <CardContent>
        <div className="text-xl font-bold">Personal Details</div>
        <div className="mt-3 flex flex-wrap gap-2 font-light">
          <div className="">
            <UserCircle2Icon /> Gender:Female
          </div>
          <div className="">
            <Calendar1Icon /> Dob:dd/mm/yy
          </div>
          <div className="">
            <MapPinCheckIcon /> State:IDk
          </div>
        </div>
      </CardContent>
      <CardFooter className="grid grid-cols-2 gap-4">
        <Button
          type="button"
          variant={"destructive"}
          size={"lg"}
          className="">
          <Trash2 /> Delete
        </Button>

        <Button
          type="button"
          variant={"secondary"}
          size={"lg"}
          className="">
          <PenBox /> Edit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
