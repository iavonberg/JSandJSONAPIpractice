// ***CREATING OBJECTS***

// const friend = {
//     name : 'Laurence Svekis',
//     age : 40,
//     gender : 'male',
//     location : {
//         city : "Toronto",
//         province : "Ontario",
//         country: "Canada",
//         address : "100 Main Street"
//     }
// }

// const friendLocation = friend.location.country;
// document.querySelector('.output').textContent = friendLocation;

// console.log(friend);
// console.log(friend.name);
// console.log(friend['name']);

// ***ARRAYS***

// const friends = ['Laurence', 'John', 'Steve', 'Linda', 'Jane'];
// console.log(friends);
// console.log(friends[2]);

// const friend1 = {
//     name: 'Laurence',
// };

// const friend2 = {
//     name: 'John',
// };

// const friendList = [friend1, friend2];
// friendList[10] = {
//     name: 'Linda'
// }
// console.log(friendList);

// document.querySelector('.output').textContent = friendList[1].name;

// ***ITERATING ON ARRAYS***

// const friend1 = {
//     name: "Laurence"
// };

// const friend2 = {
//     name: "John"
// };

// const friend3 = {
//     name: "Jane"
// };

// const friends = [friend1, friend2];
// friends.push(friend3);
// console.log(friends);

// for (let x=0; x<friends.length; x++) {
//     console.log(friends[x]);
// }

// friends.forEach(function(item,index,array) {
//     console.log(item.name);
// })

// for (ind in friends) {
//     console.log(ind);
// }
//  const friendList = ['Laurence', 'John', 'Steve', 'Linda', 'Jane'];
//  const newArray = [];

// friendList.forEach(function(item) {
//     console.log(item);
//     let temp = {
//         name : item
//     }
//     newArray.push(temp);
// })
// console.log(newArray);

// *** ITERATE ON OBJECTS ***

//  const friend1 = {
//      name: "Laurence"
//  };

//  const friend2 = {
//     name: "John"
// };

// const friend3 = {
//     name: "Jane"
//  };

//  const friend = {
//     name : 'Laurence Svekis',
//     age : 40,
//     gender : 'male',
//     location : {
//         city : "Toronto",
//         province : "Ontario",
//         country: "Canada",
//         address : "100 Main Street"
//     }
// }

// const friends = [friend1, friend2, friend3];
// console.log(friends);

// for (const key in friends) {
//     console.log(friends[key]);
// }

// console.log(Object.entries(friend));
// for(const [key,value] of Object.entries(friends)) {
//     console.log(key);
//     console.log(value);
//     console.log(value.name);
// }

// for (const [key] of Object.entries(friends)) {
//     friends[key].lastName = 'Smith' 
// }

// console.log(friends);

// *** JSON PARSE AND STRINGIFY ***

// const friend1 = {
//     name: "Laurence"
// };

// const friend2 = {
//    name: "John"
// };

// const friend3 = {
//    name: "Jane"
// };

// const friend = {
//    name : 'Laurence Svekis',
//    age : 40,
//    gender : 'male',
//    location : {
//        city : "Toronto",
//        province : "Ontario",
//        country: "Canada",
//        address : "100 Main Street"
//    }
// }

// const friends = [friend1, friend2, friend3];
// console.log(JSON.stringify(friends));
// const str = '[{"name":"Laurence"},{"name":"John"},{"name":"Jane"}]'
// const friends2 = JSON.parse(str);
// friends2.push({
//     "name" : "Wendy",
// });

// let html = "";

// friends2.forEach(function(val) {
//     console.log(val.name);
//     html += val.name + "<br>";
// })

// document.querySelector(".output").innerHTML = html;


// *** JSON CONTENT FILES ***

// SEE DATA.JSON

// *** WEB API GET ***

const url = "https://dummyapi.io/data/v1/user?page=1&limit=5"
fetch(url, {method: 'GET', 
headers: {'app-id': appidKey}}).then(function(res) {
    console.log(res);
})