import { Request, Response, NextFunction } from 'express';

export const logError = (error: Error): void => {
  if (error instanceof Error) {
    console.error(error.message ? error.message : error);
  }
};

export const errorHandler = (err: Error, req?: Request, res?: Response, next?: NextFunction): void => {
  if (res) {
    res.send({ message: err.message });
  }

  logError(err);

  if (next) {
    next();
  }
};
