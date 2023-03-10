import { NextFunction, Request, Response } from "express";
import { AppError } from "../../error/appError";

const isUuidMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
  const isUuid = regexExp.test(id);

  if (!isUuid) {
    throw new AppError("Invalid uuid.", 401);
  }

  next()
};

export default isUuidMiddleware;
