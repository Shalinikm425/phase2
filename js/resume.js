var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}

var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB;
if(!idb in window){
  console.log("indexedDB is not supported");
}
// IndexedDB creation
var request;
var store;
var open=idb.open("storeData",1);
console.log("IndexedDB is created");

open.onupgradeneeded=function (e){
   request=e.target.result;
   store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
  console.log("store is created");
}
  open.onerror=function(error){
    console.log("error");
  }
  open.onsuccess=function(e){
    request=e.target.result;
    var transaction=request.transaction("formdata","readwrite");
    store=transaction.objectStore("formdata");
    var info=store.get(paravalue);
    info.onsuccess=function(data){
    console.log(data);
    personalinfo(data.target.result);
    }
  }
  var left=document.querySelector(".left");
  var right=document.querySelector(".right");
  function personalinfo(pi){
    var image=document.createElement("img");
    image.src="images/download.png";
    image.alt=pi.name;
    left.append(image);
    var name=document.createElement("h2");
    name.textContent=pi.name;
    left.append(name);
    var mobile=document.createElement("h3");
    mobile.textContent=pi.mobile;
    left.append(mobile);
    var address=document.createElement("h3");
    address.textContent=pi.address;
    left.append(address);
    var email=document.createElement("h3");
    email.textContent=pi.email;
    left.append(email);
    var dob=document.createElement("h3");
    dob.textContent=pi.dob;
    left.append(dob);



var h3=document.createElement("h2");
h3.textContent="Career Objectives";
right.append(h3);
var career=document.createElement("p");
career.textContent=pi.career;
right.append(career);

    var h2=document.createElement("h2");
    h2.textContent="Educational Details";
    right.append(h2);
   var hr=document.createElement("hr");
     right.append(hr);
   var table=document.createElement("table");
     table.border="2";
   right.append(table);
    var tr1="<tr><th>institute</th><th>Branch</th><th>Yop</th><th>per</th></tr>";
      var tr2=" ";
     for(var i in pi.education)
     {
        tr2=tr2+"<tr><td>"+pi.education[i].institute+"</td><td>"+pi.education[i].branch+"</td><td>"+pi.education[i].yop+"</td><td>"+pi.education[i].per+"</td></tr>";
       }
      table.innerHTML=tr1+tr2;
 right.append(table);

 var ha=document.createElement("h2");
 ha.textContent="Skills";
 right.append(ha);
 var skills=document.createElement("p");
 skills.textContent=pi.skills;
 right.append(skills);

  }
