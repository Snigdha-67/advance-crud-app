import { Card, CardContent } from "@/components/shadcnui/card";
import UserCard from "@/components/UserCard";
import prisma from "@/lib/database/dbClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advance Crud",
  description: "Home page of Advance Crud App",
};

const page = async () => {
  const allusers = await prisma.crudTable.findMany();

  if (allusers.length === 0) {
    return (
      <section className="grid h-dvh place-items-center">
        <Card>
          <CardContent className="text-2xl">No Users Found 😶‍🌫️</CardContent>
        </Card>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 place-items-center gap-8 px-3 pt-20 pb-8 md:grid-cols-2 lg:grid-cols-3">
      {allusers.map((item) => (
        <UserCard
          key={item.userId}
          cuData={item}
        />
      ))}
    </section>
  );
};

export default page;
