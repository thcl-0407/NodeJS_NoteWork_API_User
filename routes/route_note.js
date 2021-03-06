const express = require('express')
const bodyParser  = require('body-parser')
const noteController = require('../controller/note_contrl.js')
const { Login } = require('../controller/note_contrl.js')
const route = express.Router()
route.use(bodyParser.json())

module.exports = {
    GetUserbyId: route.get('/id=:id', (req, res)=>{
        noteController.GetUserbyId(req.params.id, (data)=>{
            if(!data){
                res.send({
                    success: 0,
                    users: []
                })
            }else{
                res.send({
                    success: 1,
                    users: data
                })
            }
        })
    }),

    GetUserbyEmail: route.get('/email=:email', (req, res)=>{
        noteController.GetUserbyEmail(req.params.email, (result, data)=>{
            if(!result){
                res.send({
                    success: 0,
                    users: []
                })
            }else{
                res.send({
                    success: 1,
                    users: data
                })
            }
        })
    }),

    AddUser: route.post('/add', (req,res)=>{
        let User = {
            firstName: req.body.first_name,
            lastName: req.body.last_name,
            email: req.body.email,
            password: req.body.password
        }

        noteController.AddUser(User, (result)=>{
            if(!result){
                res.send({
                    success: 0,
                    message: "Có Lỗi Xảy Ra"
                })
            }else{
                res.send({
                    success: 1,
                    message: "Thêm Thành Công"
                })
            } 
        })
    }),

    Login: route.post('/login', (req,res)=>{
        let User = {
            email: req.body.email,
            password: req.body.password
        }

        noteController.Login(User, (result)=>{
            if(!result){
                res.send({
                    success: 0,
                    message: "Đăng Nhập Thất Bại"
                })
            }else{
                res.send({
                    success: 1,
                    message: "Đăng Nhập Thành Công"
                })
            } 
        })
    }),

    UpdatePassword: route.post('/change/pass', (req,res)=>{
        let User = {
            email: req.body.email,
            password: req.body.password
        }

        noteController.UpdatePassword(User, (result)=>{
            if(!result){
                res.send({
                    success: 0,
                    message: "Đổi Mật Khẩu Thất Bại"
                })
            }else{
                res.send({
                    success: 1,
                    message: "Đổi Mật Khẩu Thành Công"
                })
            } 
        })
    }),

    UpdateUser: route.post('/change/user', (req,res)=>{
        let User = {
            firstName: req.body.first_name,
            lastName: req.body.last_name,
            email: req.body.email
        }

        noteController.UpdateUser(User, (result)=>{
            if(!result){
                res.send({
                    success: 0,
                    message: "Cập Nhật Thất Bại"
                })
            }else{
                res.send({
                    success: 1,
                    message: "Cập Nhật Thành Công"
                })
            } 
        })
    }),

    AddNote: route.post('/note/add', (req,res)=>{
        let Note = {
            title: req.body.title,
            content_note: req.body.content_note,
            user_id: req.body.user_id
        }

        noteController.AddNote(Note, (result)=>{
            if(!result){
                res.send({
                    success: 0,
                    message: "Thêm Thất Bại"
                })
            }else{
                res.send({
                    success: 1,
                    message: "Thêm Thành Công"
                })
            } 
        })
    }),

    GetNoteByUserId: route.get('/note/id=:id', (req, res)=>{
        noteController.GetNoteByUserId(req.params.id, (result ,data)=>{
            if(!result){
                res.send({
                    success: 0,
                    notes: []
                })
            }else{
                res.send({
                    success: 1,
                    notes: data
                })
            }
        })
    }),

    GetNoteByUserTitle: route.get('/note/title=:title', (req, res)=>{
        noteController.GetNoteByTitle(req.params.title, (result ,data)=>{
            if(!result){
                res.send({
                    success: 0,
                    notes: []
                })
            }else{
                res.send({
                    success: 1,
                    notes: data
                })
            }
        })
    }),

    UpdateNote: route.post('/note/update', (req,res)=>{
        let Note = {
            note_id: req.body.note_id,
            title: req.body.title,
            content_note: req.body.content_note,
            user_id: req.body.user_id
        }

        noteController.UpdateNote(Note, (result)=>{
            if(!result){
                res.send({
                    success: 0,
                    message: "Cập Nhật Thất Bại"
                })
            }else{
                res.send({
                    success: 1,
                    message: "Cập Nhật Thành Công"
                })
            } 
        })
    }),

    DeleteNoteByNoteID: route.post('/note/delete/id=:id', (req,res)=>{
       let note_id = req.params.id;

        noteController.DeleteNoteByNoteID(note_id, (result)=>{
            if(!result){
                res.send({
                    success: 0,
                    message: "Xoá Thất Bại"
                })
            }else{
                res.send({
                    success: 1,
                    message: "Xoá Thành Công"
                })
            } 
        })
    }),

    AddRemind: route.post('/remind/add', (req,res)=>{
        let Remind = {
            title: req.body.title,
            content_remind: req.body.content_remind,
            time_remind: req.body.time_remind,
            date_remind: req.body.date_remind,
            user_id: req.body.user_id
        }

        noteController.AddRemind(Remind, (result)=>{
            if(!result){
                res.send({
                    success: 0,
                    message: "Thêm Thất Bại"
                })
            }else{
                res.send({
                    success: 1,
                    message: "Thêm Thành Công"
                })
            } 
        })
    }),

    UpdateRemind: route.post('/remind/update', (req,res)=>{
        let Remind = {
            remind_id: req.body.remind_id,
            title: req.body.title,
            content_remind: req.body.content_remind,
            time_remind: req.body.time_remind,
            date_remind: req.body.date_remind,
            user_id: req.body.user_id
        }

        noteController.UpdateRemind(Remind, (result)=>{
            if(!result){
                res.send({
                    success: 0,
                    message: "Cập Nhật Thất Bại"
                })
            }else{
                res.send({
                    success: 1,
                    message: "Cập Nhật Thành Công"
                })
            } 
        })
    }),

    GetRemindByUserId: route.get('/remind/id=:id&date=:date', (req, res)=>{
        let Remind = {
            date_remind: req.params.date,
            user_id: req.params.id
        }

        noteController.GetRemindByUserId(Remind, (result ,data)=>{
            if(!result){
                res.send({
                    success: 0,
                    reminds: []
                })
            }else{
                res.send({
                    success: 1,
                    reminds: data
                })
            }
        })
    }),

    DeleteRemindByRemindID: route.get('/remind/delete/id=:id', (req,res)=>{
        let remind_id = req.params.id;
 
         noteController.DeleteRemindByRemindID(remind_id, (result)=>{
             if(!result){
                 res.send({
                     success: 0,
                     message: "Xoá Thất Bại"
                 })
             }else{
                 res.send({
                     success: 1,
                     message: "Xoá Thành Công"
                 })
             } 
         })
     }),
}