const express = require('express');
const {sequelize,User} = require("./models");

const app = express();
const cors=require('cors');
const { where } = require('sequelize/dist');
app.use(cors({
    origin:"*"
}));
 app.use(express.json());

app.post('/users',async(req,res) => {
    const { username,password} = req.body;
   try{
    const users= await User.findOne({where:{user_mail:username}});
      return res.status(200).json(users);
   }catch(e){
       console.log(e)
       return res.status(500).json({"message":e});
   }
});

app.post('/add',async(req,res) => {
    const { username,user_mail,password, phone_no} = req.body;
   try{
    const users= await User.create({username,user_mail,password, phone_no});
      return res.status(200).json(users);
   }catch(e){
       console.log(e)
       return res.status(500).json({"message":e});
   }
})
//  app.post('/users',async(req,res)=>{
      
//     const {user_mail,password}=req.body;
//     try{
//      const users= await User.findAll({attributes: ["user_mail", "password", ]});
//        return res.status(200).json(users);
//     }catch(e){
//         console.log(e)
//         return res.status(500).json({"message":e});
//     }
//  })

app.get('/users/:useid',async(req,res) => {
    const id =req.params.useid;
    console.log("params")
    try{const users = await User.findOne({where:{userId:id}})
    return res.status(200).json(users)
    
}catch(e){
    console.log(e)
    return res.status(500).json({"message":e});
}
})

app.listen(5000,async()=> {
             
                 console.log("server running...");
                try{ 
                    await sequelize.authenticate();
                    await sequelize.sync({force:false});
                    console.log('Connected successfully....');
             }catch(e){
                 console.log(e);
             }
             
             });
