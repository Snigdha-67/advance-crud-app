import CreateUserForm from "@/components/Forms/CreateUserForm";
import {
  Card,
  CardHeader,
  CardTitle
} from "@/components/shadcnui/card";
import { Separator } from "@/components/shadcnui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create - Advance CRUD",
  description: "Create page of Advance CRUD",
};

const page = () => {
  return (
    <section className="grid h-dvh pt-20 pb-10 place-items-center">
      <Card className=" w-full max-w-md mt-48">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Create User</CardTitle>
        </CardHeader>

        <Separator />

     
          <CreateUserForm />
       
      </Card>
    </section>
  );
};

export default page;
