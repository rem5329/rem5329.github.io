function pageSelection(e) {
    document.getElementById("myText").value = e.target.value
}

//Functions:

//generateFightMacro - takes list of monsters and adds their elements

//generateCreatureMacro - takes a list of attacks/saves/damage/utility macros

//generateAttackMacro - Simple + to hit, and damage
//generateAttackSaveMacro - + to hit, damage, save DC, and note on save
//generateSaveMacro - Save DC, damage, and note on save
//generateDamageMacro - only damage
//generateUtilityMacro - non-damage, probably just a whisper

function writeToPage(completedMacro) {
    document.getElementById("outputBlock").value = completedMacro
}
