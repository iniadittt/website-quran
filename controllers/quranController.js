const express = require('express');
const axios = require('axios');


module.exports.index = async(req, res, next) => {
    try {
        res.render('index');
    } catch (error) {
        console.log(error);
    }
}

module.exports.surah = async(req, res, next) => {
    try {
        const dataSurahs = await axios('https://quran-api-id.vercel.app/surahs');
        const dataSurah = dataSurahs.data;
        res.render('surah', { dataSurah });
    } catch (error) {
        console.log(error);
    }
}

module.exports.getSurahByName = async(req, res, next) => {
    try {
        const myReq = req.body.inputSurah;
        res.redirect(`/surah/${myReq}`);
    } catch (error) {
        console.log(error)
    }
}

module.exports.detailsSurah = async(req, res, next) => {
    try {
        const myReq = parseInt(req.params.no);
        if (myReq != 'Cari surah disini...') {
            const dataRequest = await axios(`https://quran-api-id.vercel.app/surahs/${myReq}`);
            const datas = dataRequest.data;
            const data = datas.ayahs;
            res.render('detail', { datas, data });
        } else {
            res.redirect('/surah');
        }
    } catch (error) {
        console.log(error);
    }
}