const person = prompt("Please enter your name");
const profile=document.getElementById("profile");
profile.innerHTML=person
function send(){
    let mess=document.getElementById("message").value
    if(person){
        db.collection("Chat").add({
        date: new Date(),
       name: new Date(),
       user: person,
       message: mess,
   })
   .catch((error) => {
        alert("Error adding message: ", error);
   });
   }else alert("Reload page and enter your name again")
}
/*(()=>{
   db.collection("Chat").where("user", "==", person).orderBy('name','asc').orderBy('date','asc')
    .onSnapshot((querySnapshot) => {
        var cities = [];
        let person=document.getElementById("person")
        querySnapshot.forEach((doc) => {
            cities.push(doc.data().message);
        });
        console.log(cities)
        person.innerHTML=cities.map((item)=>`<li>${item}</li>`)
    });  
});*/
(()=>{
    db.collection("Chat").orderBy('name','desc').orderBy('date','desc').limit(10)
     .onSnapshot((querySnapshot) => {
         var cities = [];
         let person=document.getElementById("person")
         querySnapshot.forEach((doc) => {
             cities.push({human:doc.data().user,mes:doc.data().message});
         });
         person.innerHTML=cities.map((item)=>(`<li>${item.human}: ${item.mes}</li>`))
     });  
 })()