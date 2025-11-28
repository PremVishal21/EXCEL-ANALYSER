
const express = require('express')
const router = express.Router()
const multer = require('multer')
const XLSX = require('xlsx')
const path = require('path')
const fs = require('fs')

const upload = multer({ dest: 'uploads/' })

router.post('/excel', upload.single('file'), (req,res)=>{
  try{
    const filePath = req.file.path
    const workbook = XLSX.readFile(filePath)
    const sheet = workbook.Sheets[workbook.SheetNames[0]]
    const json = XLSX.utils.sheet_to_json(sheet, {header:1})
    // cleanup
    fs.unlinkSync(filePath)
    res.json({ parsed: json })
  }catch(err){
    console.error(err)
    res.status(500).json({err:err.message})
  }
})

module.exports = router
