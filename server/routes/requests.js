import expres from 'express';

const router = expres.Router();


///    /posts
router.get('/', (req, res) => {
    res.send('This works: ');

});


export default router;