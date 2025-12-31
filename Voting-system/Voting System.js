const totalVoters=5;
let parties = [
    {name:"Party A", votes:0 },
    {name:"Party B", votes:0 },
    {name:"Party C", votes:0 }
];
let votedPeople=[];
function vote(index) {
    let cnic= document.getElementById('cnic').value.trim();
    let age=document.getElementById("age").value;
    if(cnic==="" || age===""){
    document.getElementById('message').innerText="Please Enter CNIC & Age";
    document.getElementById('message').style.color="red";
    return;
}
if(age<=18){
    document.getElementById('message').innerText="Sorry! You are not eligible";
    document.getElementById('message').style.color="red";
    return;
}
if(votedPeople.includes(cnic)){
    document.getElementById("message").innerText="Double vote not allowed";
    document.getElementById('message').style.color="red";
    return;
}
if(votedPeople.length >=totalVoters){
    document.getElementById("message").innerText="Voting Closed!";
    document.getElementById('message').style.color="red";
    return;
}
parties[index].votes++;
    votedPeople.push('cnic');
    document.getElementById("message").innerText="Your vote Submitted Successfully";
    document.getElementById("message").style.color="green";
    return;
}
// if(cnic==="" || age===""){
//     document.getElementById('message').innerText="Please Enter CNIC & Age";
//     document.getElementById('message').style.color="red";
//     return;
// }
// if(age<=18){
//     document.getElementById('message').innerText="Sorry! You are not eligible";
//     document.getElementById('message').style.color="red";
//     return;
// }
// if(votedPeople.includes(cnic)){
//     document.getElementById("message").innerText="Double vote not allowed";
//     document.getElementById('message').style.color="red";
//     return;
// }
// if(votedPeople.length >=totalVoters){
//     document.getElementById("message").innerText="Voting Closed!";
//     document.getElementById('message').style.color="red";
//     return;
// }
    // parties[index].votes++;
    // votedPeople.push('cnic');
    // document.getElementById("message").innerText="Your vote Submitted Successfully";
    // document.getElementById("message").style.color="green";
    // return;

function ShowResult(){
    let output="";
    let totalVotes=0;
    let winner =parties[0];
for (let i=0; i< parties.length;  i++ ){
    output+=parties[i].name+" : " +parties[i].votes + "votes<br>";
    totalVotes +=parties[i].votes;
    if(parties[i].votes > winner.votes){
        winner = parties[i];
    }
}
let remaining = totalVoters - totalVotes;
output+="<br>Total Voters:"+ totalVoters;
output+="<br>Votes done:"+totalVotes;
output+="<br>Remaining Voters:"+remaining;
output+="<br>Wining Party:"+winner.name;
document.getElementById("result").innerHTML=output;
}