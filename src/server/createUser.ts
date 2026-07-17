"use server";

import prisma from "@/lib/database/dbClient";
import { FormSchemaType } from "@/lib/zodSchema";
import { revalidatePath } from "next/cache";

export const createUser = async (cfData: FormSchemaType) => {
  try {
    await prisma.crudTable.create({
      data: cfData,
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
