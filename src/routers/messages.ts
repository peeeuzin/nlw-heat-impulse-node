import { Router } from 'express';
import { CreateMessageController } from '../controllers/CreateMessageController';
import { GetLastThreeMessagesController } from '../controllers/GetLastThreeMessagesController';
import { ensureAuthenticated } from '../middleware/ensureAuthenticated';
const router = Router();

router.post('/', ensureAuthenticated, new CreateMessageController().handle);

router.get('/lastthree', new GetLastThreeMessagesController().handle);

export default router;
