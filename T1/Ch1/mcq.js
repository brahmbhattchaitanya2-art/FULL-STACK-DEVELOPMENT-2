// var obj = JSON.parse('{"fruit":"apple"}', function(a,b) 
// {if(b=="apple") return "orange";  else return b;})
// console.log(obj)


profiledata = {
    "name": "yen",
    "age": 30,
    "intrest": ["travel",
        "science",
        { "movie": true }],
    "myobj": {
        "name": "nested",
        "age": 20
    }
};
// obj = profiledata;
obj = JSON.parse(profiledata);
console.log(obj.myobj.age);

// profiledata='{"name":"yen","age":30,"intrest":["travel","science",{"movie":true}],"myobj":{"name":"nested","age":20}}';
// obj=JSON.parse(profiledata);
// console.log(myobj.age);