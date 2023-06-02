async function showAdminName(data) {
    let response = await fetch(data)
    let result = await response.json();
    for (const key in result) {
        if (result[key].isAdmin === true) {
            console.log(result[key].name);
        }
    }
}

showAdminName('./data.json');





let nikola = { firstName: 'Nikola', lastName: 'Tesla', };
let bob = { firstName: 'Bob', };
let mike = { lastName: 'Smith', };
let michael = {};

let getFullName = function (user) {
    return `${user.firstName} ${user.lastName}`;
}

getFullName = new Proxy(getFullName,{
    apply(target, thisArg, args) {
        let user = '';
        for (const key in args[0]) {
                user += (args[0][key]) + ' ';
        }
        return user || 'No Name';
    }
});

console.log(getFullName(nikola));
console.log(getFullName(bob));
console.log(getFullName(mike));
console.log(getFullName(michael));





const users = [
    {name: 'Nikola', age:18, isAdmin:true},
    {name: 'Bob', age:25, isAdmin:false},
    {name: 'Mike', age:32, isAdmin:false},
]
localStorage.setItem(users[0].name, JSON.stringify(users[0]));
localStorage.setItem(users[1].name, JSON.stringify(users[1]));
localStorage.setItem(users[2].name, JSON.stringify(users[2]));

function sayHelloToUser(id) {
    console.log('Hello ' + localStorage.key(id-1));
}

sayHelloToUser(3);





document.querySelector('input').value = getSavedValue("input");

function saveValue(text) {
  const id = 'input';
  const val = text.value;
  localStorage.setItem(id, val);
}

function getSavedValue(key) {
  if (localStorage.getItem(key) === null) {
    return "";
  }
  return localStorage.getItem(key);
}

// localStorage.clear()