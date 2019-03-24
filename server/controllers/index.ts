import { Router, Request, Response } from 'express';

export default (): Router => {
  const router = Router();
  const controllers = require('require.directory')('./', { extensions: ['.ts'] });

  for (const controller in controllers) {
    if (
      controller !== 'index' &&
      controllers[controller].default &&
      controllers[controller].default.path &&
      controllers[controller].default.handler
    ) {
      router.use(
        controllers[controller].default.path,
        controllers[controller].default.handler
      );
    }
  }

  router.use((req: Request, res: Response) => res.sendStatus(404));

  return router;
};
