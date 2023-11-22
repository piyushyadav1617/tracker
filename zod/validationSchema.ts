import z from "zod";
export const issueSchema = z.object({
  title: z.string().min(1, "title required").max(255, "title too long"),
  description: z.string().min(1, "description required"),
});

export const patchIssueSchema = issueSchema.extend({
  assignedToUserId: z
    .string()
    .min(1, "AssignedToUserId is required.")
    .max(255)
    .optional()
    .nullable(),
});


export type IssueForm = z.infer<typeof issueSchema>;
export type PatchIssue = z.infer<typeof patchIssueSchema>;