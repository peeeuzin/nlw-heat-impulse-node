import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.redirect(
        `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
    );
});

export default router;
