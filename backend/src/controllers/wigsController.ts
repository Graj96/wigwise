import { Request, Response } from "express";
import Wigs from "../models/WigsModel";

export const getAllWigs = async (req: Request, res: Response) => {
    try {
        const wigs = await Wigs.find();
        res.json(wigs);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
};

export const getWg = async (req: Request, res: Response) => {
    try {
        const wig = await Wigs.findById(req.params.id);
        if (!wig) {
            return res.status(404).json({ message: "Wig not found" });
        } 
        res.json(wig);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
};

export const createWig = async (req: Request, res: Response) => {
    try {
        const wig = new Wigs(req.body);
        const newWig = await wig.save();
        res.status(201).json(newWig);
    } catch (err) {
        res.status(400).json({ message: "Bad request", error: err });
    }
};

export const updateWig = async (req: Request, res: Response) => {
    try {
        const updatedWig = await Wigs.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedWig) {
            return res.status(404).json({ message: "Wig not found" });
        }
        res.json(updatedWig);
    } catch (err) {
        res.status(400).json({ message: "Bad request", error: err });
    }
};

export const deleteWig = async (req: Request, res: Response) => {
    try {
        const deletedWig = await Wigs.findByIdAndDelete(req.params.id);
        if (!deletedWig) {
            return res.status(404).json({ message: "Wig not found" });
        }
        res.json({ message: "Wig deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
};
