import CreateUserForm from "@/components/Forms/CreateUserForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Separator } from "@/components/shadcnui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create - Advance CRUD",
  description: "Create page of Advance CRUD",
};

const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <Card className="w-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Create User</CardTitle>
        </CardHeader>

        <Separator />

        <CardContent>
          <CreateUserForm />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
