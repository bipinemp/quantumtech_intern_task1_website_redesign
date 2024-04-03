import { z } from "zod";

export const ContactSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(1, { message: "Name is required" }),
  email: z.string().email(),
  number: z
    .string({ required_error: "Phone Number is required" })
    .min(1, { message: "Phone Number is required" })
    .length(10, { message: "Phone number must be exactly 10 digits long." })
    .regex(/^98[0-9]{8}$/, {
      message: "Phone number must start with 98 and contain only digits.",
    })
    .refine((data) => data.match(/^[0-9]+$/), {
      message: "Phone number must contain only digits.",
    }),
  requirement: z
    .string({ required_error: "Requirement is required" })
    .min(1, { message: "Requirement is required" }),
});

export type TContact = z.infer<typeof ContactSchema>;
