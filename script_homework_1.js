// ამოიღეთ user ცვლადის სტუდენტის სტატუსი;
{
    let user = {
        firstname: "giorgi",
        lastname: "smith",
        age: 25,
        studentstatus: "active"
    };
    delete user.studentstatus
    console.log(user);
}

// 2.	შექმენით მასივი, და დაბეჭდეთ სათითაოდ თითოეული ელემენტი(for da while ციკლით);


{
    let fruit = ['Apple', 'pear', 'peach', 'berry', 'strawberry', 'kiwi']
    let i = 0;
    while (i < fruit.length - 1) {
        console.log(fruit[i]);
        i++;
    }
    console.log(fruit[i])

    let seasons = ['spring', 'summer', 'autumn', 'winter']
    for (let f = 0; f < seasons.length; f++) {
        console.log(seasons[f]);
    }
}

//3.	შექმენით მასივი, და ამოიღეთ ყველა რიცხვი რომელიც მეტია 5ზე, for ციკლის გამოყენებით. 

{
    let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
    for (let item = 0; item < numbers.length; item++) {
        if (numbers[item] > 5) {
            console.log(numbers[item]);
        }
    }
}

// 4.მოცემულია ობიექტი:
//    თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი: Hello;
// თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani; თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი:
// hello world; ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;


{
    let user = {
        name: 'giorgi',
        age: 20,
        studentstatus: 'active'
    }

    if (user.age < 18 && user.studentstatus === 'active') {
        console.log('Hello;');
    }
    else if (user.name === 'levani') {
        console.log('hello levani');
    }
    else if (user.studentstatus === 'active' || user.age < 25) {
        console.log('hello world');
    }
    else {
        console.log('error');
    }
}
// ახალი მეთოდით:
{
    let user = {
        name: 'giorgi',
        age: 20,
        studentstatus: 'active'
    }
    let result =
        user.age < 18 && user.studentstatus == 'active'
            ? 'hello'
            : user.name == 'levani'
                ? 'hello levani'
                : user.studentstatus == 'active' || user.age < 25
                    ? 'hello world'
                    : 'error';
    console.log(result);

}



// 5.მოცემულია მასივი, გამოიტანეთ მარტო სრტინგები:

{
    let array = ['watermelon', 'pear', 10, 45, 50, 'apple', 'ananas'];
    for (let x of array){
        if (typeof x == 'string'){
            console.log(x);
        }
}

    // for (x of array) {
    //     if (x.length > 2) {
    //         console.log(x);
    //     }
    // }
}

// 6. მოცემული მასივიდან for ციკლი ს საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:
{
    
    let array = [[2, -3, 5, 10], [25, -24, -11, 100], [-6, -7, 10]]
   for (let x of array)
   for (let item of x){
    console.log(item);
   } 


// მეორე გზა
    let number1 = array[0]; number2 = array[1]; number3 = array[2]
    let arrayNumbers = number1.concat(number2, number3);

    for (let item = 0; item < arrayNumbers.length; item++) {
        if (arrayNumbers[item] > 0) {
            console.log(arrayNumbers[item]);
        }
    }


}

//7.1.ამოიღეთ მარტო ლუწი რიცხვები
//7.2.ამოიღეთ კენტი რიცხვები 

{
    let array = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10]
    for (let i = 0; i <= array.length; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }

    for (let i = 0; i <= array.length; i++) {
        if (i % 2 == 0) continue; {
            console.log(i);
        }
    }
}

//8.მოცემულია მასივი, კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true;

{
    let users = [
        { username: 'levani', status: false },
        { username: 'giorgi', status: false },
        { username: 'anna', status: true }
    ]
    // console.log(users[2].username)
    for (let item = 0; item < users.length; item++)
        if (users[item].status == true) {
            console.log(users[item]);
        }

}

