import z from "zod";
export const issueSchema = z.object({
  title: z.string().min(1, "title required").max(255, "title too long"),
  description: z.string().min(1, "description required").max(65535),
});

export const patchIssueSchema = z.object({
  title: z
    .string()
    .min(1, "title required")
    .max(255, "title too long")
    .optional(),
  description: z.string().min(1, "description required").max(65535).optional(),
  assignedToUserId: z
    .string()
    .min(1, "AssignedToUserId is required.")
    .max(255)
    .optional()
    .nullable(),
});

export const userCredentialsSchema = z.object({
  username: z
    .string()
    .min(1, "username too short")
    .max(64, "username too long"),
  password: z
    .string()
    .min(8, "Minimum 8 characters needed")
    .refine(
      (password) => {
        const numberRegex = /\d/;
        const uppercaseLetterRegex = /[A-Z]/;
        return (
          numberRegex.test(password) && uppercaseLetterRegex.test(password)
        );
      },
      {
        message:
          "Password must contain at least one number and one uppercase letter",
      },
    ),
});
export const userSignupSchema = z
  .object({
    username: z
      .string()
      .min(1, "username too short")
      .max(64, "username too long"),
    password: z
      .string()
      .min(8, "Minimum 8 characters needed")
      .refine(
        (password) => {
          const numberRegex = /\d/;
          const uppercaseLetterRegex = /[A-Z]/;
          return (
            numberRegex.test(password) && uppercaseLetterRegex.test(password)
          );
        },
        {
          message:
            "Password must contain at least one number and one uppercase letter",
        },
      ),
    confirmPassword: z.string(),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: "Passwords must match!",
      path: ["confirmPassword"],
    },
  );
export type Credentials = z.infer<typeof userCredentialsSchema>;
export type SignupCredentials = z.infer<typeof userSignupSchema>;

export type IssueForm = z.infer<typeof issueSchema>;
