var Userdb = require('../model/model');

//Use Postman, tool used for api testing...

//create and save new user
exports.create = (req,res)=>{
    //validate request(This code is for condition when user post with empty body)
    if(!req.body){
        res.status(400).send({message : "Content can not be empty"});
        return;
    }

     //new user
     const user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
     })

     //save user in the database
     user   
        .save(user)
        .then(data=>{
            // res.send(data)
            res.redirect("/add-user");
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "Some error occured in create operation."
            })
        })

}

//retrieve and return all users/ retrieve and return single user
exports.find = (req,res)=>{

    if(req.query.id){

        const id =req.query.id;

        Userdb.findById(id)
            .then(data=>{
                if(!data){
                    res.status(404).send({message : "Not found user with id" +id} )
                }
                else{
                    res.send(data)
                }
            })
            .catch(err=>{
                res.status(500).send({message:"Error retrieving user with id" + id})
            })

    }        
    else{
           Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err=>{
                res.status(500).send({message : err.message || "Error occur while retrieving user informations."})
            })
        }
}

//Update a new identified user by user id 
exports.update = (req,res) =>{

    if(!req.body){
        return res
                 .status(400)
                 .send({message: "Data to update can not be empty"})
    }

    const id =req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
        .then(data =>{
            if(!data){
                res.status(404).send({message : `Cannot Update user with ${id}.Maybe user not fouund`})
            }else{
                res.send(data)
            }
        })
         .catch(err=>{
            res.status(500).send({message:"Error Update user information"})
         })

}

//Delete a user with specified user id in the request
exports.delete = (req,res)=>{

    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message: `Cannot Delete with id${id}.Maybe id is wrong`})
            }
            else{
                res.send({
                    messgage:"User was deleted successfully!"
                })
            }
        })
        .catch(err=>{
            res.status(500).send({
                message : "Could not delete User with id="+ id
            });
        });
}
