import * as z from 'zod'

export const NoteSchema = z.object({
    id: z.string().optional(),
    task: z
        .string()
        .nonempty({ message: "Add Task" })
})

export type NoteSchemaType = z.infer<typeof NoteSchema>;