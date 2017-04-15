var boolFighterSet=false;
var boolDefenderSet=false;
var intFighterHealth=0;
var intDefenderHealth=0;
var intFighterAttack=0;
var intAttack=0;
var intDefenderCounter=0;

$(document).ready(function() {

  $(".imgTopImages").on("click", function(){
    if (boolFighterSet==false && boolDefenderSet==false) {
        $(".imgTopImages").appendTo(".EnemiesDiv");
        $(this).appendTo(".CharacterDiv");
        $(this).attr("class",$(this).attr("class")+" imgFighter");
        $(".EnemiesDiv>.imgTopImages").attr("class",$(".EnemiesDiv>.imgTopImages").attr("class")+ " imgEnemies");
        $(".imgFighter>.imgFooter").attr("class",$(".imgFighter>.imgFooter").attr("class")+" imgFighterFooter");
        boolFighterSet=true;
        intFighterHealth=$(this).attr("health-points");
        intFighterAttack=$(this).attr("attack-points");
        intAttack=$(this).attr("attack-points");
        console.log("Figher Health: "+intFighterHealth);
        console.log("Fighter Attack: "+intFighterAttack);
        console.log("Attack: " + intAttack);
        }
     else if (boolFighterSet==true && boolDefenderSet==false) {

        if ($(this).attr("class").indexOf("imgEnemies")>0) {
          $(this).appendTo(".DefenderDiv");
          $(this).attr("class",$(this).attr("class").replace("imgEnemies","imgDefender"));
          $(".imgDefender>.imgFooter").attr("class","imgFooter imgDefenderFooter");
          boolDefenderSet=true;
          intDefenderHealth=$(this).attr("health-points");
          intDefenderCounter=$(this).attr("counter-points");}
        console.log("Defender Health:" + intDefenderHealth);
        console.log("Defender Counter:" + intDefenderCounter);
        }  
 });

  $(".btnAttack").on("click", function(){
    if (boolFighterSet==true && boolDefenderSet==true) {
        intFighterHealth=intFighterHealth-intDefenderCounter;
        $(".imgFighterFooter").text(intFighterHealth + " Pts");
        intDefenderHealth=intDefenderHealth-intFighterAttack;
        $(".imgDefenderFooter").text(intDefenderHealth + " Pts");
         intFighterAttack=parseInt(intFighterAttack)+parseInt(intAttack);
        console.log("Defender Health: " + intDefenderHealth);
        console.log("Fighter Health: " + intFighterHealth);
        console.log("Figher Attack:" + intFighterAttack);
     
        if (intDefenderHealth<=0 && intFighterHealth>0) {
          $(".imgDefenderFooter").text(intDefenderHealth + " Pts");
           boolDefenderSet=false;
           console.log($(".imgEnemies").length);
           console.log($(".imgDefender").length);
           console.log($(".imgTopImages").length);
          if ($(".imgEnemies").length<=0) {
            $(".GameStatusDiv").html("<p>Yeah baby!. You've won. You put the grrr in swinger!</p><p>Click reset button to play again!</p>");
            $(".imgDefender").remove();
            $(".btnReset").css("display","inline");
            }
          else if ($(".imgEnemies").length>0) {
            $(".GameStatusDiv").html("<p>Yeah baby!. You defeated " + $(".imgDefender").attr("fighter-name") + ".</p><p>Click on an enemy to keep playing.</p>");
            $(".imgDefender").remove();
            $(".btnReset").css("display","inline");
          } 
       }
    
    else if (intFighterHealth<=0) {
      $(".imgFighterFooter").text(intFighterHealth + " Pts");
        $(".GameStatusDiv").html("<p>You've been defeated by " + $(".imgDefender").attr("fighter-name") +".</p><p>Click reset button to get your mojo back!</p>");
          boolFighterSet=false;
          $(".btnReset").css("display","inline");
     }
   
  
    else {
    $(".imgFighterFooter").text(intFighterHealth + " Pts");
    $(".GameStatusDiv").html("<p>You attacked " + $(".imgDefender").attr("fighter-name") + " for " + (parseInt(intFighterAttack)-parseInt(intAttack)).toString() + " damage.</p><p>" + $(".imgDefender").attr("fighter-name") + " attacked you back for " + intDefenderCounter + " damage.</p>");
    $(".imgDefenderFooter").text(intDefenderHealth + " Pts");
  }
   }  

 });


$(".btnReset").on("click", function(){
      location.reload();
   });

});





