function submitData(){
  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var mobile=document.querySelector("#mobile").value;
  var address=document.querySelector("#address").value;
  var email=document.querySelector("#email").value;
  var dob=document.querySelector("#dob").value;
  var ginstitute=document.querySelector("#ginstitute").value;
  var gbranch=document.querySelector("#gbranch").value;
  var pyop=document.querySelector("#pyop").value;
  var gper=document.querySelector("#gper").value;
  var iinstitute=document.querySelector("#iinstitute").value;
  var ibranch=document.querySelector("#ibranch").value;
  var iyop=document.querySelector("#iyop").value;
  var iper=document.querySelector("#iper").value;
  var sinstitute=document.querySelector("#sinstitute").value;
  var sboard=document.querySelector("#sboard").value;
  var syop=document.querySelector("#syop").value;
  var sper=document.querySelector("#sper").value;
  var skills=document.querySelector("#skills").value;

// IndexedDB implementation

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
      store.put({
        career:career,
        name:name,
        mobile:mobile,
        address:address,
        email:email,
        dob:dob,
        education:[
          {
        institute:ginstitute,
        branch:gbranch,
        yop:pyop,
        per:gper
        ,{
        institute:iinstitute,
        branch:ibranch,
        yop:iyop,
        per:iper}
        ,{
        institute:sinstitute,
        board:sboard,
        yop:syop,
        per:sper}
      ],
        skills:skills
      });
      console.log("success");
    }


  window.open("index.html");
}
function cancel(){
  window.open("form.html");
}
