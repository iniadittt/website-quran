const router = require('express').Router();
const { index, surah, getSurahByName, detailsSurah } = require('../controllers/quranController')


router.get('/', index);
router.get('/surah', surah);
router.post('/surah', getSurahByName);
router.get('/surah/:no', detailsSurah);

module.exports = router;