import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
	res.send('This works dude...good job');
});

export default router;