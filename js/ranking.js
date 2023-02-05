function showItems() {
   let resultDIV = document.getElementById('corpo-tabela');
   resultDIV.innerHTML = "";
   if (localStorage.meuArr) {
      arr = JSON.parse(localStorage.getItem('meuArr'));
   }

   //  for(var i in arr){
   //     let p = document.createElement("p");
   //     p.innerHTML = arr[i];
   //     resultDIV.append(p);
   //  }

   

   for (var i in arr) {


      for (var j in arr) {
         if (arr[i][3] < arr[j][3]) {
            let aux = arr[i];
            arr[i] = arr[j];
            arr[j] = aux;
         }
      }
   }

   for (var i = 0; i < 10; i++) {

      let position = parseInt(i) + 1 +"º";
      let nome = arr[i][0];
      let telefone = arr[i][1];
      let email = arr[i][2];
      let tempo = arr[i][3] + " segundos";
      let movimentos = arr[i][4] +' movimentos';
      

      let tr = document.createElement("tr");
      let tdPosition = document.createElement("td");
      let tdNome = document.createElement("td");
      let tdTelefone = document.createElement("td");
      let tdEmail = document.createElement("td");
      let tdTempo = document.createElement("td");
      let tdMovimentos = document.createElement("td");
      

      tdPosition.innerHTML = position;
      tdNome.innerHTML = nome;
      tdTelefone.innerHTML = telefone;
      tdEmail.innerHTML = email;
      tdTempo.innerHTML = tempo;
      tdMovimentos.innerHTML = movimentos;

      tr.append(tdPosition);

      if(position == "1º"){   
         let tdMedal = document.createElement("td");
         let imgMedal = document.createElement("img");
         imgMedal.src = "../img/medalha-de-ouro.png";
         imgMedal.style.width = "30px";
         imgMedal.style.height = "30px";
         tdMedal.append(imgMedal);
         tr.append(tdMedal);
      
      }
      else if(position == "2º"){
         let tdMedal = document.createElement("td");
         let imgMedal = document.createElement("img");
         imgMedal.src = "../img/medalha-de-prata.png";
         imgMedal.style.width = "30px";
         imgMedal.style.height = "30px";
         tdMedal.append(imgMedal);
         tr.append(tdMedal);
      } 
      else if(position == "3º"){
         let tdMedal = document.createElement("td");
         let imgMedal = document.createElement("img");
         imgMedal.src = "../img/medalha-de-bronze.png";
         imgMedal.style.width = "30px";
         imgMedal.style.height = "30px";
         tdMedal.append(imgMedal);
         tr.append(tdMedal);
      }

      tr.append(tdNome);
      tr.append(tdTelefone);
      tr.append(tdEmail);
      tr.append(tdTempo);
      tr.append(tdMovimentos);

      resultDIV.append(tr);

   }

}
showItems();