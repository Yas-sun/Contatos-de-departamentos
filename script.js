function escolher(){
    let opcao, tel;
    
    opcao = parseInt(document.getElementById("depar").value);

    switch(opcao){

        case 1:
            tel = 190;
           document.getElementById("resultado").innerHTML = "Contato: "+tel;

        break;

         case 2:
            resultado.innerHTML = "Contato: 193";
        break;

         case 3:
            resultado.innerHTML = "Contato: 192";
        break;

         case 4:
            resultado.innerHTML = "Contato: 199";
        break;

         case 5:
            resultado.innerHTML = "Contato: 197";
        break;

         case 6:
            resultado.innerHTML = "Contato: (21) 2332-2924";
        break;

         case 7:
            resultado.innerHTML = "Contato: (21) 2253-1177";
        break;

         case 8:
            resultado.innerHTML = "Contato: 180";
        break;

         case 9:
            resultado.innerHTML = "Contato: 100";
        break;

         case 10:
            resultado.innerHTML = "Contato: 151";
        break;

         case 11:
            resultado.innerHTML = "Contato: (21) 2332-8611";
        break;

         case 12:
            resultado.innerHTML = "Contato: (21) 3460-4040";
        break;

         case 13:
            resultado.innerHTML = "Contato: (21) 2334-7910";
        break;
          default: 
        resultado.innerHTML="opção inválida";
    }
}