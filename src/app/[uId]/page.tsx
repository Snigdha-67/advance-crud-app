import UpdateUserFrom from "@/components/Forms/UpdateUserFrom";
import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { Separator } from "@/components/shadcnui/separator";
import prisma from "@/lib/database/dbClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UPDATE - Advance CRUD",
  description: "Update page of Advance CRUD",
};

type EditProps = {
  params: Promise<{ uId: string }>;
};

const page = async ({ params }: EditProps) => {
  const { uId } = await params;

  const user = await prisma.crudTable.findUniqueOrThrow({
    where: {
      userId: uId,
    },
  });

  return (
    <section className="grid h-dvh place-items-center pt-20 pb-10">
      <Card className="mt-48 w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Update User Details
          </CardTitle>
        </CardHeader>

        <Separator />
        <UpdateUserFrom editData={user} />
      </Card>
    </section>
  );
};

export default page;
