var member = {
    "name" : "QT",
    "aadharid" : "dontknow",
    "displaydetails": function dispalyDetails() {
        console.log("Aadhar id is "+this.aadharid + " and name is "+ this.name);
    },
    "account" :  account,

    "test":{
        "id": "89275459832",
        "balance" : 9830.9
    }

}

var account = {
    "id": "89275459832",
    "balance" : 9830.9
}



module.exports.member = member;
module.exports.account = account;