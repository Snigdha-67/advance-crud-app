"use server";

import prisma from "@/lib/database/dbClient";
import { revalidatePath } from "next/cache";

export const deleteUser = async (uId: string) => {
  try {
    await prisma.crudTable.delete({
      where: {
        userId: uId,
      },
    });
    revalidatePath("/");
    return {
      isSuccess: true,
      messege: "User Deleted Successfully ✅",
    };
  } catch (error) {
    console.log(error);

    return {
      isSuccess: false,
      messege: "🚨 User Deletation Failed 🚨",
    };
  }
};
