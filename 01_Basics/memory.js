// -----Lec-->  10...................


// Two types of memory=> Stack(Primitive) & Heap(Non-primitive).

// Stack gives the Copy of defining variables memory.

// Heap gives the Reference of original value.(all changes in heap variables m/m leads to the changes of Original values).

let myYoutubename = "hiteshchoudharydotcom"

let anothername=  myYoutubename
anothername=  "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);





let userOne = {
    email: "user@gamail.com",
    upi: "upiid1234"
}

let userTwo = userOne; // In Heap both m/m have same reference..........

userTwo.email = "deepak@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);