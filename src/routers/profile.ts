import { Router } from 'express';
import { ProfileUserController } from '../controllers/ProfileUserController';
import { ensureAuthenticated } from '../middleware/ensureAuthenticated';
const router = Router();

router.get('/', ensureAuthenticated, new ProfileUserController().handle);

export default router;
