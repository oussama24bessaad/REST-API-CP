exports.justForTest=(req,res)=>{res.send("test api")}
// ========================
exports.addUser=async (req,res)=>{
try {
    // ********
    // step next after get by id
    const findUser=await User.findOne({email:req.body.email})
    if(findUser){return res.status(400).send({msg:"email should be unique"});}
    // ********

     //create a new user
    const newUser=new User(req.body);
    // req.body = objet , aprés l'importation chaque filds prend sa place dans la DB
    // save it in DB(save async method + promisses)
    await newUser.save();
    res.status(200).send({msg:"Add user success",User:newUser});
} catch (error) {
    res.status(400).send({msg:"can not save the User,error"})
}
}
// ===================================
exports.getAllUser=async (req,res)=>{
try {
        const listUser=await User.find();
    res.status(200).send({msg:"get all the Users",Users:listUser})
} catch (error) {
    res.status(400).send({msg:"can not get Users"})
}
}
// ===================================
exports.getOneUser=async(req,res)=>{
try {
    const FindUser=await User.findById(req.params.id);
    res.status(200).send({msg:"get it succ", User:FindUser});
} catch (error) {
    res.status(400).send({msg:"can not get it"})
}
}
// ===================================
exports.deleteOneUser= async (req,res)=>{
    try {
        await User.deleteOne({_id:req.params.id})
        res.status(200).send({msg:"delete succ"})
    } catch (error) {
        res.status(400).send({msg:"can not delete it"})
    }
}
// ==================================
exports.updateOneUser=async (req,res)=>{
    try {
        const result=await User.updateOne({_id:req.params.id},{$set:{...req.body}});
        // nModified || modifiedCount if Modified return 1 else return 0
        if(result.modifiedCount){return res.status(200).send({msg:"update User succ"})}
        // else
        res.status(200).send({msg:"there is no modification"})
    } catch (error) {
        res.status(400).send({msg:"can not updated"})
    }
}
// ===================================