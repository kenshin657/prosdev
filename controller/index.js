const express = require("express");
const router = express.Router();

// const {
//     Appointment
//   } = require("../model/appointment")
//   const {
//     Process
//   } = require("../model/process")
//   const {
//     Doctor
//   } = require("../model/doctor")


router.use("/secretary", require("./secretaryController"));



module.exports = router;