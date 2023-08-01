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
      enemyHealth= enemyHealth- playerAttack;
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
          window.alert(enemyName + " still has " + " health left.");
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

fight();