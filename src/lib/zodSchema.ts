import z from "zod";

export const formSchema = z.object({
  userName: z
    .string()
    .min(2, { error: "Minimum 2 Characters" })
    .max(12, { error: "Maximum 12 Characters" }),
  userEmail: z
    .email()
    .max(64, { error: "Email Address must not exceed 64 Characters" })
    .endsWith("@gmail.com", { error: "Only Gmail Allowed" }),
  userPhNo: z
    .string()
    .min(1, { error: "Phnone Number Required" })
    .length(13, { error: "Phone Number must be 10 digits" })
    .startsWith("+91", { error: "must start with +91" }),
  userImage: z.url().endsWith(".jpg", { error: "only jpg format" }),
  userGender: z.string(),
  userState: z
    .string({ error: "Required" })
    .max(30, { error: "Maximum 30 Characters" }),
  userDob: z.date({ error: "Required" }),
});

export type FormSchemaType = z.infer<typeof formSchema>;
