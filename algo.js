

module.exports.wordCount= function(body){
var body = body.replace(/\n|\r|\?|\.|\t|,|@|\(|\)|\/|[\\;:"']/g, " ");
var arr = body.split(' ');
var result=arr.filter(word => word!='' && word!='–' && word!='-');


var dict = [];

for(var i=0;i<=result.length;i++){
	if(dict[result[i]]==null)dict[result[i]]=1;
	else dict[result[i]]++;
}

var items = Object.keys(dict).map(function(key) {
    return [key, dict[key]];
});

items.sort(function(first, second) {
    return second[1] - first[1];
});

 return items;
}
