var playerName= window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = Math.floor(Math.random()* 21)+40;
var enemyAttack = 12 ;

console.log(Math.PI)
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
             playerMoney= Math.max(0,playerMoney-50);
             console.log("playerMoney", playerMoney);
             break;
            }
        
        } 

      // generate random damage value based on player's attack power
      var damage = randomNumber(playerAttack - 3, playerAttack)
      enemyHealth= Math.max(0,enemyHealth - damage);
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
        // generate ramdon damage value based on enemy's attack power
        var damage = randomNumber(enemyAttack - 3, enemyAttack);
        playerHealth = Math.max(0,playerHealth - damage);
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
         enemyHealth = randomNumber(40,60);

         // use debugger to pause script from running and check what's going on at that moment in the code
         // debugger;

         // pass the pickedEnemyName varible's value into the fight function, where it will assume the value of the enemyName parameter
         fight(pickedEnemyName);

         // if we're not at the last enemy in the array
         if (playerHealth > 0 && i < enemyNames.length - 1) {
            //ask if player wants to use the store before next round
            var storeConfirm = window.confirm("The fight is over, visit the store before the nex round?")

            // if yes, take them to the store() function
            if (storeConfirm) {
                shop();
            }
    
         }
        } else {
         window.alert("You have lost your robot in battle! Game Over!");
         break;
        }
    }
    // after the loops ends, player is either out of health or enemies to fight
    endGame();
};

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
};

// function to shop
var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    switch(shopOptionPrompt){
        case "REFILL":
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");

                // increase health and decrease the money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
        
        
             break;
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                //increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7 ;
            }
            else {
                window.alert("You don't have enough money!");
            }
            
            break;
        case "LEAVE":    
        case "leave":
            window.alert("Leaving the store.");
            // do nothing, so function will end
            break;
            default:
                window.alert("You did not pick a valid option. Try again.");

                // call shop() again to force player to pick a valid option
                shop();
                break;
        

    }
};

// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random()* (max - min + 1)) + min;
    return value;
}


// start the game when the page loads
startGame();