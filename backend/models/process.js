const mongoose = require('mongoose');
const Case = require("../models/case");
const process = new mongoose.Schema({
  caseID: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Case",
    required: true,
  },
  data:[{
    name: {
      type:String,
      unique:true,
      required:true,
  },
  type:{
      enum:["text","pdf"],
      type:String,
      required:true,
  },
  value:{
    type:String,
    required:true,
  },
  step:{
       type:Number,
       required:true,
  },part:{
      type:Number,
      required:true,
  },date:{
    type:Date,
    require:true,
  },status:{
    type:String,
    require:true,
    enum:["onGoing","pending","completed"]
  }
}]
  // newspaperPublication: {
  //   details: String,
  //   date: { type: Date, default: Date.now },
  //   status: { type: String, default: 'pending' },
  // },
  // tvTelecasting: {
  //   details: String,
  //   date: { type: Date, default: Date.now },
  //   status: { type: String, default: 'pending' },
  // },
  // fileMissingCompliant: {
  //   details: String,
  //   compliantReport: String,
  //   status: { type: String, default: 'pending' },
  //   date: { type: Date, default: Date.now },
  // },
  // medicalReport: {
  //   details: String,
  //   report: String,
  //   status: { type: String, default: 'pending' },
  //   date: { type: Date, default: Date.now },
  // },
  // socialInvestigationReport: {
  //   details: String,
  //   report: String,
  //   status: { type: String, default: 'pending' },
  //   date: { type: Date, default: Date.now },
  // },
  // childReportToDCPU: {
  //   details: String,
  //   report: String,
  //   status: { type: String, default: 'pending' },
  //   date: { type: Date, default: Date.now },
  // },
  // NOCFromDCPU: {
  //   details: String,
  //   report: String,
  //   status: { type: String, default: 'pending' },
  //   date: { type: Date, default: Date.now },
  // },
  // finalReport: {
  //   details: String,
  //   report: String,
  //   status: { type: String, default: 'pending' },
  //   date: { type: Date, default: Date.now },
  // },
  // submitToCWCForLFA: {
  //   details: String,
  //   status: { type: String, default: 'pending' },
  //   date: { type: Date, default: Date.now },
  // },
  // uploadLFA: {
  //   report: String,
  //   status: { type: String, default: 'pending' },
  //   date: { type: Date, default: Date.now },
  // },
  // LFAtoDCPU: {
  //   status: { type: String, default: 'pending' },
  //   details: String,
  //   date: { type: Date, default: Date.now },
  // },
  // childFileToSAA: {
  //   status: { type: String, default: 'pending' },
  //   date: { type: Date, default: Date.now },
  //   details: String,
  // },
  // completeReport: {
  //   report: String,
  //   date: { type: Date, default: Date.now },
  //   status: { type: String, default: 'pending' },
  //   details: String,
  // },
  // uploadChildIntoCaring: {
  //   status: { type: String, default: 'pending' },
  //   details: String,
  //   date: { type: Date, default: Date.now },
  // },
});

const Process = mongoose.model('Process', process);

module.exports = Process;
