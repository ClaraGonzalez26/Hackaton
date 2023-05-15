import express from "express";

const router = express.Router();


router.get('/', function(req, res, next) {
    res.end("DDrop Api");
} )


export default router;