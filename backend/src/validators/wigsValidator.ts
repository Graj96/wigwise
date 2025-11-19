import {z} from "zod";

export const wigSchema = z.object({
    name: z.string().min(1, "Name is required"),
    color: z.string().min(1, "Color is required"),
    length: z.string().min(1, "Length is required"),
    status: z.enum(["available", "reserved", "rented", "returned", "cleaning", "damaged"]).optional(),
    price: z.number().positive("Price must be a greater than 0"),
    description: z.string().optional(),
}) 

export type WigInput = z.infer<typeof wigSchema>;