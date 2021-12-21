
let txt = 'yy5841453@gmail.com' 
let numberr = '01933739493';        

let emailPettern =/^[a-z0-9\.\_\-]*@[a-z0-9]*\.[a-z]{2,5}$/;

let numberPettern =/^(01|8801|\+8801)[0-9]{9}$/;

let passwordPettern =/^[a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)]{8,}$/;

let zipcodePettern = /^[0-9]{5}(?:-[0-9]{4})?$/;



console.log(emailPettern.test(txt));
console.log(numberPettern.test(numberr));


