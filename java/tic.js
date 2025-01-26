const gameboard = (function(){
       
       let player1 = {name:"player1"};
       let player2 = {name:"player2"};
   

       const gamepiece = [{},{},{},{},{},{},{},{},{}];//array so that you could inherit the prototype player object1 and 2//

       
       return {gamepiece,player1,player2}
})();



    



   const gameflow = (function (){
        let gamepiece = gameboard.gamepiece;
        let player1 = gameboard.player1;
        let player2 = gameboard.player2;
        let count = ['player1'];

        

        let tac1 = document.querySelector('#tac1');
        let tac2 = document.querySelector ('#tac2');
        let tac3 = document.querySelector ('#tac3');
        let tac4 = document.querySelector ('#tac4');
        let tac5 = document.querySelector ('#tac5');
        let tac6 = document.querySelector ('#tac6');
        let tac7 = document.querySelector ('#tac7');
        let tac8 = document.querySelector ('#tac8');
        let tac9 = document.querySelector ('#tac9');
        let btn = document.querySelector ('.btn');


       //change the playerby manipulating the size of an array//
        function changeplay(){
            let amount = count.length;

              if(amount === 1){
               return count.push('player2');
              }else if (amount >= 2){
                 return count.pop();
              }
          };

         //giving each empty object in gamepiece the propert name of object player 1  or 2//
        function playchoice (alpha){

           let corn = count.length;
    
            if (corn === 1){
                 Object.setPrototypeOf(alpha,gameboard.player1);
            }else if (corn=== 2){
                 Object.setPrototypeOf(alpha,gameboard.player2);
            };


        }

     

     //the logic for the outcome of the gamepiece array//
    function gamePlay () {
        

        if (gamepiece[0].name === player1.name && gamepiece[1].name === player1.name && gamepiece[2].name === player1.name){
            gamedisplay.cretModal("Player1")}
            else if (gamepiece[0].name ===player1.name && gamepiece[3].name === player1.name && gamepiece[6].name === player1.name){
                gamedisplay.cretModal("Player1")}
                else if (gamepiece[1].name ===player1.name && gamepiece[4].name === player1.name && gamepiece[7].name === player1.name){
                    gamedisplay.cretModal("Player1")}
                    else if (gamepiece[2].name ===player1.name && gamepiece[5].name === player1.name && gamepiece[6].name === player1.name){
                        gamedisplay.cretModal("Player1")}
                        else if(gamepiece[3].name===player1.name && gamepiece[4].name === player1.name && gamepiece[5].name === player1.name){
                            gamedisplay.cretModal("Player1")}
                            else if (gamepiece[6].name ===player1.name && gamepiece[7].name === player1.name && gamepiece[8].name === player1.name){
                                gamedisplay.cretModal("Player1")}
                                else if (gamepiece[6].name ===player1.name && gamepiece[4].name === player1.name && gamepiece[2].name === player1.name){
                                    gamedisplay.cretModal("Player1")}
                                    else if (gamepiece[0].name ===player1.name && gamepiece[4].name === player1.name && gamepiece[8].name === player1.name){
                                        gamedisplay.cretModal("Player1")}
                                        else if (gamepiece[0].name ===player2.name && gamepiece[1].name === player2.name && gamepiece[2].name === player2.name){
                                            gamedisplay.cretModal("Player2")}
                                            else if (gamepiece[0].name===player2.name && gamepiece[3].name === player2.name && gamepiece[6].name === player2.name){
                                                gamedisplay.cretModal("Player2")}
                                                else if (gamepiece[1].name===player2.name && gamepiece[4].name === player2.name && gamepiece[7].name === player2.name){
                                                    gamedisplay.cretModal("Player2")}
                                                    else if (gamepiece[2].name===player2.name && gamepiece[5].name === player2.name && gamepiece[6].name === player2.name){
                                                        gamedisplay.cretModal("Player2")}
                                                        else if (gamepiece[3].name ===player2.name && gamepiece[4].name === player2.name && gamepiece[5].name === player2.name){
                                                            gamedisplay.cretModal("Player2")}
                                                            else if (gamepiece[6].name===player2.name && gamepiece[7].name === player2.name && gamepiece[8].name === player2.name){
                                                                gamedisplay.cretModal("Player2")}
                                                                else if (gamepiece[6].name===player2.name && gamepiece[4].name === player2.name && gamepiece[2].name === player2.name){
                                                                    gamedisplay.cretModal("Player2")}
                                                                    else if (gamepiece[0].name ===player2.name && gamepiece[4].name === player2.name && gamepiece[8].name === player2.name){
                                                                        gamedisplay.cretModal("Player2")}

        
    

        
        };

        return {gamePlay,tac1,tac2,tac3,tac4,tac5,tac6,tac7,tac8,tac9,btn,playchoice,changeplay,count};
   })();
  
   const gamedisplay = (function(){
         let disco = [];
         //let play1 = document.querySelector('#play1');//
        // let play2 = document.querySelector('#play2');//
         let out1 = document.querySelector('#out1');
         let out2 = document.querySelector('#out2');
         let sub = document.querySelector('#sub');
         let playerform = document.querySelector('.playerform');

         //display x or o on the html page within the grid cell//
    function marker (alpo){
        
        let bighead = document.createElement('h1');
        let ticky = gameflow.count.length;
        const found = disco.find ((element)=> element === alpo);
        
       
       
        
        if (found === undefined){
            if (ticky === 1){
                bighead.textContent = "o";
           }else if (ticky === 2){
                 bighead.textContent = "x";
           };
        }else{
            bighead.textContent="";
        }
            
       
        
        

        alpo.appendChild(bighead);
        disco.push(alpo);

        
    }

    //names given from form to display user name//
    function adInfo (event){
        event.preventDefault();
        out1.textContent= document.querySelector('#play1').value;
        out2.textContent = document.querySelector('#play2').value;
        playerform.style.display= "none";

    }

    //modal to declare outcome of game//
    function cretModal(alcot){
        let crediv= document.createElement("div");
        let wincon = document.createElement("p");
        let body = document.querySelector(".main");
        let rebtn= document.createElement("button");
         crediv.classList.add('mody');
        
         rebtn.textContent = "restart game";
         rebtn.addEventListener('click',()=>{location.reload()});
         wincon.textContent =`${alcot} win`;

         crediv.appendChild(wincon);
         crediv.appendChild(rebtn);
         body.appendChild(crediv);
         

        }


    return {marker,disco,play1,play2,out1,out2,sub, playerform,adInfo,cretModal};
     
   })();
   

            
   gamedisplay.sub.addEventListener('click',gamedisplay.adInfo );
   gameflow.tac1.addEventListener('click', ()=>{gameflow.playchoice(gameboard.gamepiece[0]);gameflow.changeplay();gameflow.gamePlay();gamedisplay.marker(tac1)});
   gameflow.tac2.addEventListener('click', ()=>{gameflow.playchoice(gameboard.gamepiece[1]);gameflow.changeplay();gameflow.gamePlay();gamedisplay.marker(tac2)});
   gameflow.tac3.addEventListener('click', ()=>{gameflow.playchoice(gameboard.gamepiece[2]);gameflow.changeplay();gameflow.gamePlay();gamedisplay.marker(tac3)});
   gameflow.tac4.addEventListener('click', ()=>{gameflow.playchoice(gameboard.gamepiece[3]);gameflow.changeplay();gameflow.gamePlay();gamedisplay.marker(tac4)});
   gameflow.tac5.addEventListener('click', ()=>{gameflow.playchoice(gameboard.gamepiece[4]);gameflow.changeplay();gameflow.gamePlay();gamedisplay.marker(tac5)});
   gameflow.tac6.addEventListener('click', ()=>{gameflow.playchoice(gameboard.gamepiece[5]);gameflow.changeplay();gameflow.gamePlay();gamedisplay.marker(tac6)});
   gameflow.tac7.addEventListener('click', ()=>{gameflow.playchoice(gameboard.gamepiece[6]);gameflow.changeplay();gameflow.gamePlay();gamedisplay.marker(tac7)});
   gameflow.tac8.addEventListener('click', ()=>{gameflow.playchoice(gameboard.gamepiece[7]);gameflow.changeplay();gameflow.gamePlay();gamedisplay.marker(tac8)});
   gameflow.tac9.addEventListener('click', ()=>{gameflow.playchoice(gameboard.gamepiece[8]);gameflow.changeplay();gameflow.gamePlay();gamedisplay.marker(tac9)});
   console.log (gameboard.gamepiece);
   console.log (gameflow);
   gameflow.btn.addEventListener ('click',()=>{console.log(gameboard.gamepiece); console.log(gameflow.count)});






