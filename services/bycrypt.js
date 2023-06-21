const bcrypt=require('bcrypt');
const saltRounds=10;


function encrypt(passwordString){
    const salt=bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(passwordString,salt);
}
function compare(passwordString,hash){
    return bcrypt.compareSync(passwordString,hash);
}
module.exports={
    encrypt,
    compare
}