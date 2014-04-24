async.concat([1,2,3],function(item, callback){
 callback(null,item);
 } ,function(err, result){
 console.log("concat ******"+result);
 });