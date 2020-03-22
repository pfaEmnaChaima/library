
 var rootRef=firebase.database() .ref().child("horaires");
  var jour=snap.child("jour").val();
  var debut=snap.child("debut").val();
  var fin=snap.child("fin").val();
  $("#table_body").append( jour+debut+ fin);

function add() {
          const jour=document.getElementById('jour');
           const debut=document.getElementById('debut');
        const fin=document.getElementById('fin');
          const database=firebase.database();
          const rootRef=database.ref('horaires');
          rootRef.child(jour.value).set({
            jour:document.getElementById('jour').value,
            debut:document.getElementById('debut').value,
            fin:document.getElementById('fin').value,});
        }
