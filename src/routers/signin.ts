import { Router } from 'express';
const router = Router();

router.get('/callback', (req, res) => {
    const { code } = req.query;

    return res.json({ code });
});

export default router;
