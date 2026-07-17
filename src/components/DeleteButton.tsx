"use client";

import { deleteUser } from "@/server/deleteUser";
import { LoaderIcon, Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "./shadcnui/button";

type DeleteButtonProps = {
  userId: string;
};

const DeleteButton = ({ userId }: DeleteButtonProps) => {
  const [loading, setLoading] = useState(false);

  const { refresh } = useRouter();

  const deleteHandler = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));

    const { isSuccess, messege } = await deleteUser(userId);

    if (isSuccess) {
      toast.success(messege);

      refresh();
    } else {
      toast.error(messege);
    }

    setLoading(false);
  };

  return (
    <Button
      type="button"
      variant={"destructive"}
      size={"lg"}
      className=""
      disabled={loading}
      onClick={deleteHandler}>
      {loading ?
        <>
          <LoaderIcon className="animate-spin" /> Deleting
        </>
      : <>
          <Trash2Icon /> Delete
        </>
      }
    </Button>
  );
};

export default DeleteButton;
