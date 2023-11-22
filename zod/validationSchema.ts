import z from "zod";
export const issueSchema = z.object({
  title: z.string().min(1, "title required").max(255, "title too long"),
  description: z.string().min(1, "description required").max(65535),
});

export const patchIssueSchema = z.object({
  title: z.string().min(1, "title required").max(255, "title too long").optional(),
  description: z.string().min(1, "description required").max(65535).optional(),
  assignedToUserId: z
    .string()
    .min(1, "AssignedToUserId is required.")
    .max(255)
    .optional()
    .nullable(),
});


export type IssueForm = z.infer<typeof issueSchema>;