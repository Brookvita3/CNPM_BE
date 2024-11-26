const Printer = require('../models/print');
const PageSize = require('../models/pageSize');
const PrintHistory = require('../models/printHistory')
module.exports.index = async(req,res) => {
  const printers = await Printer.find({status: 'On'});
  const page = await PageSize.find();
  const uploadStatus = "Chưa tải tệp:";
    res.render("printer/print_setting_final",{ 
      printer: printers,
      pageSize: page,
      name: " ",
      uploadStatus: uploadStatus
    }
     )
}
const path = require("path");
const multer = require("multer");

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

exports.uploadPdf = upload.single("pdf");

exports.renderHome = async(req, res) => {
  const printers = await Printer.find({status: 'On'});
  const page = await PageSize.find();
  const uploadStatus = "Chưa tải tệp:";
  res.render("printer/print_setting_final", { 
    pdfUrl: null,
    printer: printers,
    pageSize: page,
    name: " ",
    uploadStatus: uploadStatus
   });
};

exports.handleUpload = async(req, res) => {
  const printers = await Printer.find({status: 'On'});
  const page = await PageSize.find();
  if (!req.file) {
    const uploadStatus = "Chưa tải tệp:";
    res.render("printer/print_setting_final",{
      printer: printers,
      pageSize: page,
      name: " ",
      uploadStatus: uploadStatus
    });
  }
  const pdfUrl = `/uploads/${req.file.filename}`;
  const filename = req.file.filename;
  const uploadStatus = "Đã tải tệp:";
  res.render("printer/print_setting_final", { 
    pdfUrl,
    printer: printers,
    pageSize: page,
    name: filename,
    uploadStatus: uploadStatus
   });
};
exports.addHistory = async(req, res) => {
  const printer = await Printer.findOne({id:parseInt(req.body.printer)})
   console.log(req.body.printer);
  // const printerName = printer.Name;
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  const formattedToday = dd + '/' + mm + '/' + yyyy;
  const newHistory = new PrintHistory({
    email: "johndoe@example.com",
    fileName:req.body.filename,
    printerName: printer.Name,
    Location: printer.Location,
    pages: req.body.pages,
    copies: parseInt(req.body.copies),
    datePrinting: formattedToday,
    Status: "Đang xử lí",
  })
  await newHistory.save()
  res.redirect('/print/')
}
