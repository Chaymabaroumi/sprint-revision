// Iteration - Revision

function iterateAndLogWithWhile(n) {
    var i=0
        while(i<n){
            if(i%2===0){
                console.log(i+"is even")
            }
            else if(i%2!==0){
                console.log(i+"is odd")
            }
            i++
        }
    }

function iterateAndLogWithFor(n){
    for(var i=0;i<n;i++){
        if(i%2===0){
            console.log(i+"is even")
        }
        else if(i%2!==0){
            console.log(i+"is odd")
        }
    }
}    

function reverseIterateAndLogWithWhile(n){
    var i=n
    while(i>=0){
          if(i%2===0){
           console.log(i+"is even")
        }
        else if(i%2!==0){
            console.log(i+"is odd")
        }
        i--
    }
    
}
function reverseIterateAndLogWithFor(n){
    for(var i=n;i>=0;i--){
        if(i%2===0){
            console.log(i+"is even")
         }
         else if(i%2!==0){
             console.log(i+"is odd")
         }
    }
}
function reverseIterateAndLogWithRecursion(n) {
    if (n < 0) {
        return
    }

    if (n % 2 === 0) {
        console.log(n + " is even")
    } else {
        console.log(n + " is odd")
    }

    return reverseIterateAndLogWithRecursion(n - 1)
}

function weirdDivisionWithWhile(n) {
    var i=1
     while(i<n){
         if(n%3===0){
         console.log("julia")
     }
     else if(n%5===0){
         console.log("james")
     }
     else if(n%3===0&&n%5===0){
         console.log("juliajames")
     }
     else{
         console.log(n)
     }
         i++
     }
     
 }

 function inverseWeirdDivisionRecursively(n) {
    if(n===0){
        return 0
    }
      if(n%3===0){
        console.log("julia")
    }
   if(n%5===0){
        console.log("james")
    }
    if(n%3===0&&n%5===0){
        console.log("juliajames")
    }
    else{
        console.log(n)
    }
    return inverseWeirdDivisionRecursively(n-1)
}
function laugh(num){
    var str=""
    for(var i=0;i<num;i++){
        str=str+"ha"
    }
    return str
}

function laughR(num,str=""){
    if(num===0){
        return str
    }
     return laughR(num-1,str+"ha")
 }
 function sumWithFor(num){
    res=0
    for(var i=num;i>0;i--){
        res+=i
    }
    return res
}
function factorialWithFor(num){
    res=1
    for(var i=num;i>0;i--){
        res*=i
    }
    return res
}


// Objects - Revision

function addFullNameProperty(object) {
    if (object.firstName && object.lastName) {
        object.fullName = object.firstName + " " + object.lastName;
    }
}



function addArrayProperty(object, key, array) {
    object[key] = array;
}



function sortDrinkByPrice(drinks) {
    for (var i = 0; i < drinks.length; i++) {
        var minIndex = i
        for (var j = i + 1; j < drinks.length; j++) {
            if (drinks[j].price < drinks[minIndex].price) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            var temp = drinks[i]
            drinks[i] = drinks[minIndex]
            drinks[minIndex] = temp
        }
    }
    return drinks
}

// closures

function makeCoffeeShop(coffee, cupCake) {
    return function serveClient(numberOfClients) {
        if (numberOfClients > coffee || numberOfClients > cupCake) {
            if (cupCake < numberOfClients) {
                return "We ran out of cup cake"
            }
            if (coffee < numberOfClients) {
                return "We ran out of coffee"
            }
        }
        coffee -= numberOfClients;
        cupCake -= numberOfClients
        return `We served ${numberOfClients} clients and we still have ${coffee} coffee and ${cupCake} cup cake`
    }
}


function pow(exponent) {
    return function(base) {
        return Math.pow(base, exponent)
    }
}
