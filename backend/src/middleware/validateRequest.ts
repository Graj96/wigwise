import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export const validateRequest = (schema: z.ZodType<any>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const result = await schema.safeParseAsync(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: result.error.issues.map((issue) => ({
          message: issue.message,
          path: issue.path,
        })),
      });
    }

    req.body = result.data;

    next();
  };
};