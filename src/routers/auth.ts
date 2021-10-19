import { Router } from 'express';
import { AuthenticateUserController } from '../controllers/AuthenticateUserController';
const router = Router();

router.post('/', new AuthenticateUserController().handle);

export default router;
