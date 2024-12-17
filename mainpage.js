// Tuples Object
function tuple(key,value) {
    this.key = key;
    this.value = value;
}

// Abilities Object
function abilities(innate,actions,condActions,bonusActions,reactions,utilities) {
    this.innate = innate;
    this.actions = actions;
    this.condActions = condActions;
    this.bonusActions = bonusActions;
    this.reactions = reactions;
    this.utilities = utilities;
}

// Creature Object
function creature(name,abilityList) {
    this.name = name;
    this.abiityList = abilityList;
}

//Functions:

// Each creature and attack needs a form display function
function displayCreatureForm() {

    var form = document.createElement("form");
    form.setAttribute("method","post");

    //Start grabbing the stats
    var STR = document.createElement("input");
    STR.setAttribute("type", "text");
    STR.setAttribute("name", "strMod");
    STR.setAttribute("placeholder", "Strength Modifier");

    form.appendChild(STR);

    document.getElementById("inputBlock").append(form);
    
    if (creatures == 'null') {
      var creatures = {};
    }
    
    // Then display ability forms - but only when asked, use a drop down menu for this
}
/*************************************
//generateFightMacro - takes list of monsters and adds their elements
function generateFightMacro(creatures array) {
    var fightMacroString = "";
    //For each creature in the creature array, generate a line with their creature macro name
    for (creature in creatures) {
        fightMacroString += generateCreatureMacro(creature) + '\n';
    };

    //Append the fight macro to the output
}

//generateCreatureMacro - takes a list of attacks/saves/damage/utility macros
// Each ability goes in either Innate, Actions, Conditional Actions, Bonus Action, Reaction, or Utility
// These categories should be split to be easy to see
function generateCreatureMacro(creature) {
    for (creature in creatures) {
        //Generate drop down list of options
    };

    //Append the created creature macro to the output
}

function generateAbilityMacro(type) {
    switch (type) {
        case Attack:
            generateAttackMacro();
            break;
        case AttackNoDamage:
            generateAttackNoDamageMacro();
            break;
        case AttackSave:
            generateAttackSaveMacro();
            break;
        case Save:
            generateSaveMacro();
            break;
        case Damage:
            generateDamageMacro();
            break;
        case Check:
            generateCheckMacro();
            break;
        case Spell:
            generateSpellMacro();
            break;
        case Utility:
            generateUtilityMacro();
            break;
    };
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





function appendToOutput(str) {
    document.getElementById("outputBlock").innerHTML += str;
}

*/
