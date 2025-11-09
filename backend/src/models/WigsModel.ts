import mongoose, { Schema, Document } from "mongoose";

export interface IWigs extends Document {
    name: string;
    color: string;
    length: string;
    status: "available" | "reserved" | "rented" | "returned" | "cleaning" | "damaged";
    price: number;
    description?: string;
}

const WigsSchema = new Schema<IWigs>({
    name: { type: String, required: true },
    color: { type: String, required: true },
    length: { type: String, required: true },
    status: { type: String,
        enum: ["available", "reserved", "rented", "returned", "cleaning", "damaged"],
        default: "available",
    },
    price: { type: Number, required: true },
    description: { type: String },
});

export default mongoose.model<IWigs>("Wigs", WigsSchema);