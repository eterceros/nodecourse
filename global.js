function print_a_global(name){
    console.log(global[name]);
}

global.fish="gold";
global.pet="cat";

print_a_global("fish");
print_a_global("pet");

process.exit();