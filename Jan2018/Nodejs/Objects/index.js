var def= require("./lib/def");
def.member.displaydetails();
//console.log(def.member.aadharid);
//console.log(def.member.name);
console.log(
    "aadhar id is "+def.member["aadharid"]+ " and name is "+ def.member["name"]
);
console.log(def.member.test.balance);
//console.log(def.member["account"]["balance"]);
//console.log(def.member.account.balance);