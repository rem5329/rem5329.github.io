function pageSelection(e) {
    document.getElementById("myText").value = e.target.value
}

//Functions:

//generateFightMacro - takes list of monsters and adds their elements
function generateFightMacro() {
    //For each creature in the creature array, generate a line with their creature macro name
}

//generateCreatureMacro - takes a list of attacks/saves/damage/utility macros
// Each ability goes in either Innate, Actions, Conditional Actions, Bonus Action, Reaction, or Utility
// These categories should be split to be easy to see
function generateCreatureMacro {
    if (section is not empty) {
      Display the section header, then loop through section to generate all the other sub-macros
    }
}

//generateAttackMacro - Simple + to hit, and damage - atk
//generateAttackNoDamageMacro - + to hit - npcatk
//generateAttackSaveMacro - + to hit, damage, save DC, and note on save - atkdmg
//generateSaveMacro - Save DC, damage, and note on save - dmg
//generateDamageMacro - only damage - npcdmg
//generateCheckMacro - for skill/attribute checks that might be needed - npcatk
//generateSpellMacro - for spell descriptions - spell
//generateUtilityMacro - non-damage - desc

//NOTE: Use the MancerRoll to generate random orders/players



function writeToPage(macroStr) {
    // Note: this should append to the end, not replace
    document.getElementById("outputBlock").value = macroStr
}
