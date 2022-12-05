const people=["grey","mary","devon","james"];
for(let i in people)
{
    console.log(people[i])
}
people.shift();
document.getElementById("demo1").innerHTML=people;
people.unshift("matt");
document.getElementById("demo2").innerHTML=people;
people.push("nissi");
document.getElementById("demo3").innerHTML=people;