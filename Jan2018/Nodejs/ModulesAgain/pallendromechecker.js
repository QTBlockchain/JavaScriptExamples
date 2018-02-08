var myreverse = require("./lib/reverse");
for (let index = 100; index <= 999; index++) {
    if(index == myreverse.reverse(index))
    {
        console.log(index);
    }
    
}