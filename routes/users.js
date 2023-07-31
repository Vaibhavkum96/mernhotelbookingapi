import express from "express"
import {updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js" 
import {verifyToken,verifyUser,verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router()

// router.get("/checkauthentication", verifyToken, (req,res,next)=> {
//     res.send("Hello User, You are logged in!")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=> {
//     res.send("Hello User, you are logged in and you can delete all accounts.")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=> {
//     res.send("Hello admin, You are logged in and you can delete all the accounts.")
// })

//Update
router.put("/:id", verifyUser, updateUser)

//Delete 
router.post("/:id", verifyUser ,deleteUser)

//Get 
router.get("/:id", verifyUser, getUser)

//Get All 
router.get("/", verifyAdmin, getUsers)

export default router 
