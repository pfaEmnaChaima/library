// var tblUsers = document.getElementById('tbl_users_list');
//   var databaseRef = firebase.database().ref('emprunte/');
//   var rowIndex = 1;
  
//   databaseRef.once('value', function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//    var childKey = childSnapshot.key;
//    var childData = childSnapshot.val();
   
//    var row = tblUsers.insertRow(rowIndex);
//    var cellId = row.insertCell(0);
//   var id_livre = row.insertCell(1);
//   var id_emprunteur = row.insertCell(2);
//    var date_emp = row.insertCell(3);
//    var date_retour = row.insertCell(4);
//     var nom_livre = row.insertCell(5);
//    var etat = row.insertCell(6);
//    cellId.appendChild(document.createTextNode(childKey));
//    id_emprunteur.appendChild(document.createTextNode(childData.id_emprunteur));
//    id_livre.appendChild(document.createTextNode(childData.id_livre));
//    date_emp.appendChild(document.createTextNode(childData.date_emp));
//    date_retour.appendChild(document.createTextNode(childData.date_retour));
//    nom_livre.appendChild(document.createTextNode(childData.nom_livre));
//    etat.appendChild(document.createTextNode(childData.etat));
   
//    rowIndex = rowIndex + 1;
//     });
//   });

//     function add(){
  
  
//    var uid = firebase.database().ref().child('emprunte').push().key;
   
//    var data = {
//             emp_id:uid,
//             id_livre:document.getElementById('id_liv').value,
//             id_emprunteur:document.getElementById('id_emp').value,
//             date_emp:document.getElementById('date_emp').value,
//             date_retour:document.getElementById('date_retour').value,
//             nom_livre:document.getElementById('nom_livre').value,
//             domaine:document.getElementById('domaine').value,
//             etat:"notReturned"  }
   
//    var updates = {};
//    updates['/emprunte/' + uid] = data;
//    firebase.database().ref().update(updates);
   
//    reload_page();
//   }




 function reload_page(){
   window.location.reload();
  }

// function update() {
//   const empd=document.getElementById('idemp').value;
// const database=firebase.database();

//   var e=firebase.database().ref().child('emprunte/');
//   e.on('child_added',function(snapshot){
//     id=snapshot.key;
//     message=snapshot.val();
//     if(id==empd){
//       etat="Returned";
//       path='emprunte/'+ empd;
        
//         const newData ={ etat
//           }

//         database.ref(path).update(newData);
//         reload_page();
//     }

   
//   });

 
//         //    const empd=document.getElementById('idemp').value;
//         // const database=firebase.database();
//         // const rootRef=database.ref('emprunte');
//         // etat="Returned";
//         // path='emprunte/'+ empd;
//         // if(!path) return;
        
//         // const newData ={ etat
//         //   }

//         // database.ref(path).update(newData);
//         //    reload_page();

//         }


var rootRef=firebase.database()	.ref().child("emprunte");

   rootRef.on("child_added",snap => {
  var id_emprunte=snap.child("emp_id").val();
  var id_livre=snap.child("id_livre").val();
  var id_emprunteur=snap.child("id_emprunteur").val();
  var date_emp=snap.child("date_emp").val();
  var date_retour=snap.child("date_retour").val();
  var nom_livre=snap.child("nom_livre").val();
   var etat=snap.child("etat").val();
  $("#datatable-buttons").append("<tr><th>"+ id_emprunte+"</th><th>"+ id_livre+"</th><th>"+id_emprunteur+
  	"</th><th>"+date_emp+"</th><th>"+ date_retour+"</th><th>"+ nom_livre+
  	"</th><th>"+etat+"</th></td>");

});



 var uid = firebase.database().ref().child('emprunte').push().key;

// function add() {

//           var d=new Date();
//           var d1=new Date();
//           var d2=d1.addDays(14);
//          var date_emp = d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();
//          var date_ret = d2.getDate()+'/'+(d2.getMonth()+1)+'/'+d2.getFullYear();

//   var id_livre= document.getElementById('id_liv').value;
//   var id_etudiant=document.getElementById('id_emp').value;
//   var livre = firebase.database().ref().child('livres');
//   var etudiant = firebase.database().ref().child('etudiants');
// var ok;

//     etudiant.orderByChild('id').equalTo(id_etudiant).on('child_added', function(snap) {
//       var reff=firebase.database().ref('etudiants/' + id_etudiant).child("nb_emp");
//           var b;
//           reff.on('value', function(snaps) {
//               var nbemp = snaps.val();
//               var nb = snaps.val();
//               if((nbemp==1)&&(nbemp==2)){
//                 b=nbemp-1;
//                 var ok=true
//               }
//               else if(nbemp==0){
//                  Swal.fire({
//                     icon: 'error',
//                     title: 'Oops...',
//                     text: "le nombre de possibilite devient egale 0",
//                         });

                
//               }
//               return ok;
//             });

//                 var datanew = { nb_emp: b }
//                   path='etudiants/'+ id_etudiant;
//                firebase.database().ref(path).update(datanew);
//       if(ok==true){
//       livre.orderByChild('id').equalTo(id_livre).on('child_added', function(snap) {
//           var ref=firebase.database().ref('livres/' + id_livre).child("qte_dispo");
//           var a;
//           ref.on('value', function(snapshot) {
//               var uid = snapshot.val();
//               if((uid==2)&&(uid>2)){
//                 a=uid-1;

//                 var ud = firebase.database().ref().child('emprunte').push().key;
   
//               var daata = {
//             emp_id:ud,
//             id_livre:document.getElementById('id_liv').value,
//             id_emprunteur:document.getElementById('id_emp').value,
//             date_emp: date_emp,
//             date_retour:date_ret,
//             nom_livre:document.getElementById('nom_livre').value,
//             domaine:document.getElementById('domaine').value,
//             etat:"notReturned"  }
   
//                 var updatess = {};
//                       updatess['/emprunte/' + ud] = daata;
//                           firebase.database().ref().update(updatess);
   
  
//               }
//               else if(uid==1){
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Oops...',
//                     text: "depasser le nombre possible d'emprunt",
//                         });
//               }
//             });
//              console.log(a);

//                 var data = { qte_dispo : a  }
//                   path='livres/'+ id_livre;
//                firebase.database().ref(path).update(data);

//            });
//   }


//   });
//            }


  
          
