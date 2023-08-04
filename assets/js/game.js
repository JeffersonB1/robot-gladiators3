var playerName= window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12 ;

console.log("Player name: " + playerName + "  Attack: " + playerAttack + "  Health: " + playerHealth);
console.log("Enemy name: " + enemyNames + "  Attack: " + enemyAttack + "  Health: " + enemyHealth);




var fight = function(enemyName) {

    while (playerHealth > 0 && enemyHealth > 0){
     // Asking the player if they would like to fight or skip
     var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKIP' to choose.");
     if(promptFight==="SKIP" || promptFight==="skip"){
         //confirm player wants to skip
         var confirmSkip = window.confirm("Are you sure you'd like to quit?");
         if(confirmSkip){
             window.alert(playerName + " has chosen to skip the fight!");
             //subtract money from playerMoney for skipping
             playerMoney= playerMoney-2;
             console.log("playerMoney", playerMoney);
             break;
            }
        
        } 

      //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
      enemyHealth= enemyHealth - playerAttack;
      // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " points of health left");
        //check enemy's health
        if(enemyHealth <= 0) {
         window.alert(enemyName + " has died!");

         //award player for winning
         playerMoney = playerMoney + 20;
         break;
        }
        else{
          window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " points of health left");
        //check player's health
        if(playerName <=0) {
         window.alert(playerName + " has died!");
         break;
        } else {
         window.alert(playerName + " still has " + playerHealth + " health left.");
        }    
    }
};

//funtion to start a new game
var startGame = function() {
    //debugger;

    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
 //  loop through each enemy
 for(var i=0; i < enemyNames.length; i++){
     if(playerHealth > 0) {
         window.alert("Welcome to Robot Gladiators! Round" + ( i + 1 ));
        
         //Pick new enemy to fight based on the index of the enemyNames array
         var pickedEnemyName = enemyNames[i];

         //reset enemyHelth before starting new fight
         enemyHealth = 50;

         // use debugger to pause script from running and check what's going on at that moment in the code
         // debugger;

         // pass the pickedEnemyName varible's value into the fight function, where it will assume the value of the enemyName parameter
         fight(pickedEnemyName);
        } else {
         window.alert("You have lost your robot in battle! Game Over!");
         break;
        }
    }
    // after the loops ends, player is either out of health or enemies to fight
    endGame();
}

//function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

fight();
// start the game when the page loads
startGame();