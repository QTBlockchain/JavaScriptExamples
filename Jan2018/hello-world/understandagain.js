var foo = "bar";

function bar() {
    var foo = "baz";
    console.log(foo);
}

function baz(foo) {
    foo = "bam";
    bam = "yay";
    console.log(foo);
    console.log(bam);
}

function test() {
    var foo = "test";
    console.log("In test "+bam);
    console.log("in test foo: "+bar);
}

console.log(foo);
baz();
test();
console.log("bam since not defined moved to global scope "+bam);
bar();
