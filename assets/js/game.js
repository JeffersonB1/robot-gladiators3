var fight = function(enemy) {

    while (playerInfo.health > 0 && enemy.health > 0){
     // Asking the player if they would like to fight or skip
     var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKIP' to choose.");
     if(promptFight==="SKIP" || promptFight==="skip"){
         //confirm player wants to skip
         var confirmSkip = window.confirm("Are you sure you'd like to quit?");
         if(confirmSkip){
             window.alert(playerInfo.name + " has chosen to skip the fight!");
             //subtract money from playerInfo.money for skipping
             playerInfo.money= Math.max(0,playerInfo.money-50);
             console.log("playerInfo.money", playerInfo.money);
             break;
            }
        
        } 

      // generate random damage value based on player's attack power
      var damage = randomNumber(playerInfo.attack - 3,playerInfo.attack)
      enemy.health= Math.max(0,enemy.health - damage);
      // Log a resulting message to the console so we know that it worked.
        console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " points of health left");
        //check enemy's health
        if(enemy.health <= 0) {
         window.alert(enemy.name + " has died!");

         //award player for winning
         playerInfo.money = playerInfo.money + 20;
         break;
        }
        else{
          window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        // generate ramdon damage value based on enemy's attack power
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0,playerInfo.health - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " points of health left");
        //check player's health
        if(playerInfo.name <=0) {
         window.alert(playerInfo.name + " has died!");
         break;
        } else {
         window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }    
    }
};

//funtion to start a new game
var startGame = function() {
    //debugger;

    // reset player stats
    playerInfo.reset();
 //  loop through each enemy
 for(var i=0; i < enemyInfo.length; i++){
     if(playerInfo.health > 0) {
         window.alert("Welcome to Robot Gladiators! Round" + ( i + 1 ));
        
         //Pick new enemy to fight based on the index of the enemy.names array
         var pickedEnemyObj = enemyInfo[i];

         //reset enemyHelth before starting new fight
         pickedEnemyObj.health = randomNumber(40,60);

         // use debugger to pause script from running and check what's going on at that moment in the code
         // debugger;

         // pass the pickedEnemyName varible's value into the fight function, where it will assume the value of the enemy.name parameter
         fight(pickedEnemyObj);

         // if we're not at the last enemy in the array
         if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
         // increase health and decrease the money
         playerInfo.refillHealth();
        break;

        case "UPGRADE":
        case "upgrade":
            //increase attack and decrease money
            playerInfo.upgradeAttack();
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
};

// function to set name
var getPlayerName = function() {
    var name = "";
    
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }

    console.log("Your robot's name is " + name);
    return name
}
// Player object
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function(){
       if(this.money >= 7){
         window.alert("Refilling player's health by 20 for 7 dollars.")
         this.health += 20;
         this.money -=7;
        }
        else{
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
       if(this.money >= 7){
         window.alert("Upgrading player's attack by 6 for 7 dollars.");
         this.attack += 6;
         this.money -= 7;
        }
        else{
            window.alert("You don't have enough money!");
        } 
    }
};


// Enemy object
var enemyInfo = [
    {
     name: "Roborto",
     attack: randomNumber(10, 14)
    },
    {
     name: "Amy Android",
     attack: randomNumber(10, 14)
    },
    {
     name: "Robo Trumble",
     attack: randomNumber(10, 14)   
    }
];


// start the game when the page loads
startGame();