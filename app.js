const friend = {
    name : 'Laurence Svekis',
    age : 40,
    gender : 'male',
    location : {
        city : "Toronto",
        province : "Ontario",
        country: "Canada",
        address : "100 Main Street"
    }
}

const friendLocation = friend.location.country;
document.querySelector('.output').textContent = friendLocation;

console.log(friend);
console.log(friend.name);
console.log(friend['name']);
