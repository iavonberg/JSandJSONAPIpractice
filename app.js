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

// const url = "https://dummyapi.io/data/v1/user?page=1&limit=5";
// fetch(url, { 
// headers: {'app-id': appidKey}}).then(function(res) {
//     console.log(res);
//     return res.json()
// }).then(function(data) {
//         console.log(data.data)
//         data.data.forEach(function(val) {
//             document.querySelector('.output').innerHTML += val.firstName + " " + val.lastName + "</br>";
//         });
//     }).catch(function(error) {
//         console.log(error);
//     })

// *** MY JSON JSON FILE ***

// const url = "https://api.myjson.online/v1/records/5caf1241-4345-4db3-a0c2-04f3c5986650"
// fetch(url).then(function(res) {
//         console.log(res);
//         return res.json()
//     }).then(function(data) {
//         console.log(data.data)
//         data.data.dogs.forEach(function(dogInfo) {
//             document.querySelector('.output').innerHTML += `<h3> Name: ${dogInfo.name}</h3> Breed: ${dogInfo.breed}<br> Gender: ${dogInfo.gender} <br> Color: ${dogInfo.color}`;
//         })
//         }).catch(function(error) {
//             console.log(error);
//         })

// *** JAVASCRIPT AND FETCH API VS XHR ***

// const url = "json.json"
// let xHR = new XMLHttpRequest();
// xHR.open('GET', url);
// xHR.responseType = 'json';
// xHR.onload = function() {
//    console.log(xHR.response);
//    let data = xHR.response;
//    data.dogs.forEach(function(dogInfo) {
//     document.querySelector('.output').innerHTML += `<h3> Name: ${dogInfo.name}</h3> Breed: ${dogInfo.breed}<br> Gender: ${dogInfo.gender} <br> Color: ${dogInfo.color}`;
//    })
// }

// xHR.send();

// console.log(xHR);

// fetch(url).then(function(res) {
//         console.log(res);
//         return res.json()
//     }).then(function(data) {
//         console.log(data.dogs)
//         data.dogs.forEach(function(dogInfo) {
//             document.querySelector('.output').innerHTML += `<h3> Name: ${dogInfo.name}</h3> Breed: ${dogInfo.breed}<br> Gender: ${dogInfo.gender} <br> Color: ${dogInfo.color}`;
//         })
//         }).catch(function(error) {
//             console.log(error);
//         })

// *** ARROW EXPRESSION ***

// const url = "json.json";
// fetch(url).then(res => res.json()).then(json => console.log(json));
// const output = document.querySelector('.output');

// fetch(url).then(res => res.json()).then(json =>
// json.dogs.forEach(val => output.innerHTML += val.name + "<br>"));

// *** RANDOM USER API ***

const url = 'https://randomuser.me/api/?results=10';
const btn = document.querySelector('button');
const output = document.querySelector('.output');
btn.addEventListener('click', getData);

function getData() {
    output.innerHTML = "";
    fetch(url).then(function(res) {
        return res.json()
    }).then(function(data) {
        console.log(data.results);
        data.results.forEach(function(val) {
        console.log(val.name);
        console.log(val.picture.thumbnail);
        let div = document.createElement('div');
        div.innerHTML += `${val.name.title} ${val.name.first} ${val.name.last}` + "<br>" + `${val.email}`;
        let pic = document.createElement('img');
        pic.setAttribute('src', val.picture.thumbnail);
        pic.style.display = 'block';
        div.appendChild(pic);
        output.appendChild(div);
        })})
}