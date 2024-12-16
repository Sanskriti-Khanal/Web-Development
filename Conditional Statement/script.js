let age = prompt("Enter your age");

if(age>=18){
    console.log("You are eligible")
}
else{
    console.log("You are not eligibel")
}

//Example 2

let marks = prompt("Enter yout marks")

if(marks>=80){
    console.log("A++")
    }
    else if(marks>=70){
        console.log("A+")
    }
    else if(marks>=60){
        console.log("b+")
    }
    
    else if(marks>=50){
        console.log("B+")
    }
    
    else if(marks>=40){
        console.log("C")
    }
    
    else {
        console.log("D+")
    }
    
    //Example 3

    let username = "admin"
    let password = "password"

    if(username === "admin"){
        if(password === "password"){
            console.log("Welcome to admin dashboard")
        }else{
            console.log("Incorrect password")
        }
    }
    else{
        console.log("incorrect username")

    }