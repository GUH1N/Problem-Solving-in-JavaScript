// first problem
for(i=1;i<=100;i++)
{
    if(i%3 == 0 && i%5 == 0)
        console.log("FizzBuss");
    else if(i%3 == 0)
        console.log("Fizz");
    else if(i%5 == 0)
        console.log("Buss");
    else
        console.log(i);
}

// second problem
function palindrome(string)
{
    let rev_str = "";
    for (i = string.length - 1; i >= 0; i--) {
        rev_str += string[i];
    }
    if (string === rev_str) {
        return ("The string is a palindrome.");
    } 
    else {
        return ("The string is not a palindrome.");
    }
}
// test_cases
console.log(palindrome("mam"));
console.log(palindrome("malayalam"));
console.log(palindrome("class"));

//3 problem
function largest_num(arr)
{
    var temp = arr[0];
    for(i=1;i<=arr.length;i++)
    {
        if(arr[i] > temp)
            temp = arr[i];
    }
    return temp;
}
// test_cases
console.log(largest_num([1,2,5,10,12,3]));
console.log(largest_num([10,20,15,1,9]));

//4 problem
function object(string)
{
    let res_object = {};
    for (i = 0; i < string.length; i++) 
    {
        let char = string[i];
        if(res_object[char])
        {
            res_object[char] = res_object[char] + 1;
        }
        else
        {
            res_object[char] = 1;
        }
    }
    return res_object;
}
// test_cases
console.log(object("guhaa_priyan"));
console.log(object("los_angeles"));

//6 problem
function factorial(num)
{
    var fact = 1;
    for(i=1;i<=num;i++)
    {
        fact = fact * i;
    }
    return fact;
}

// test_cases
console.log(factorial(5));
console.log(factorial(11));

//7 problem
function Cel_to_Fah(num)
{
    return ((num * 9/5) + 32);
}
// test_cases
console.log(Cel_to_Fah(1));
console.log(Cel_to_Fah(10));

//8 problem
function finding(arr)
{
    var temp = 0;
    final_arr = [];
    for(i=0;i<arr.length;i++)
    {
        if(arr[i] == temp)
        {
            temp = temp + 1;
        }
        else
        {
            temp += 1;
            final_arr.push(temp);
        }
    }
    return final_arr;
}

// test cases
console.log(finding([0,1,2,5,6,7,10,15]));
console.log(finding([0,2,3,5,6,8,10]))