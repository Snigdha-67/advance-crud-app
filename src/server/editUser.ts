"use server";

import prisma from "@/lib/database/dbClient";
import { FormSchemaType } from "@/lib/zodSchema";
import { revalidatePath } from "next/cache";

export const editUser = async (uId: string, cfdata: FormSchemaType) => {
  try {
    await prisma.crudTable.update({
      data: cfdata,
      where: {
        userId: uId,
      },
    });
    revalidatePath("/");
    return {
      isSuccess: true,
      messege: "User Updated Successfully ✅",
    };
  } catch (error) {
    console.log(error);

    return {
      isSuccess: false,
      messege: "🚨 User Updatation Failed 🚨",
    };
  }
};
