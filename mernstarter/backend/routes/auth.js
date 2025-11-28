
const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/register', async (req,res)=>{
  const {email,password} = req.body
  const existing = await User.findOne({email})
  if(existing) return res.status(400).json({msg:'User exists'})
  const hash = await bcrypt.hash(password,10)
  const user = await User.create({email,password:hash})
  const token = jwt.sign({id:user._id}, process.env.JWT_SECRET || 'secretkey')
  res.json({user:{email:user.email,id:user._id}, token})
})

router.post('/login', async (req,res)=>{
  const {email,password} = req.body
  const user = await User.findOne({email})
  if(!user) return res.status(400).json({msg:'Invalid'})
  const ok = await bcrypt.compare(password, user.password)
  if(!ok) return res.status(400).json({msg:'Invalid'})
  const token = jwt.sign({id:user._id}, process.env.JWT_SECRET || 'secretkey')
  res.json({user:{email:user.email,id:user._id}, token})
})

module.exports = router
