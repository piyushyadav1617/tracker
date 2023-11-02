import z from "zod";
export const createIssueSchema = z.object({
  title: z.string().min(1, "title required").max(255, "title too long"),
  description: z.string().min(1, "description required"),
});

export type IssueForm = z.infer<typeof createIssueSchema>;
