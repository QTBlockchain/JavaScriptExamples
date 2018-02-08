var eulerlogics = require("./lib/eulerlogics");
var sum =0;
for (let index = 3; index < 10; index++) {
    if( eulerlogics.divisibleBy(index,3) || 
        eulerlogics.divisibleBy(index,5))
        {
            sum = sum + index;
        }
}