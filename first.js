function AddRow(){
 var rollno=document.sample.rollno.value;
 var name=document.sample.name.value;
 var contact=document.sample.contact.value;
 var email=document.sample.email.value;
 var address=document.sample.address.value;
 var dob=document.sample.dob.value;

 var tr=document.createElement('tr');

 var td1=tr.appendChild(document.createElement('td'));
 var td2=tr.appendChild(document.createElement('td'));
 var td3=tr.appendChild(document.createElement('td'));
 var td4=tr.appendChild(document.createElement('td'));
 var td5=tr.appendChild(document.createElement('td'));
 var td6=tr.appendChild(document.createElement('td'));

 td1.innerHTML=rollno;
 td2.innerHTML=name;
 td3.innerHTML=contact;
 td4.innerHTML=email;
 td5.innerHTML=address;
 td6.innerHTML=dob;

 document.getElementById("show").appendChild(tr);
 document.getElementById('sample').reset();}
