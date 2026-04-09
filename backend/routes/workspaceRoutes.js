import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
    res.send("Create Workspaces route");
});

export default router;
