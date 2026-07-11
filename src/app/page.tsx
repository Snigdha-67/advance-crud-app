import UserCard from "@/components/UserCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advance Crud",
  description: "Home page of Advance Crud App",
};

const page = () => {
  return (
    <section className="grid grid-cols-1 place-items-center gap-8 px-3 pt-20 pb-8 md:grid-cols-2 lg:grid-cols-3">
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </section>
  );
};

export default page;
