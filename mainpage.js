// Variables
var br = document.createElement("br"); 

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

    var NAME = document.createElement("input");
    NAME.setAttribute("type", "text");
    NAME.setAttribute("name", "creatureName");
    NAME.setAttribute("placeholder", "Creature Name");

    form.appendChild(NAME);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());

    var AC = document.createElement("input");
    AC.setAttribute("type", "text");
    AC.setAttribute("name", "ac");
    AC.setAttribute("placeholder", "Armor Class");

    form.appendChild(AC);

    var HP = document.createElement("input");
    HP.setAttribute("type", "text");
    HP.setAttribute("name", "hp");
    HP.setAttribute("placeholder", "Health Point Maximum");

    form.appendChild(HP);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());

    var MS = document.createElement("input");
    MS.setAttribute("type", "text");
    MS.setAttribute("name", "ms");
    MS.setAttribute("placeholder", "Movement Speed");

    form.appendChild(MS);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());

    var STR = document.createElement("input");
    STR.setAttribute("type", "text");
    STR.setAttribute("name", "strMod");
    STR.setAttribute("placeholder", "Strength Modifier");

    form.appendChild(STR);

    var DEX = document.createElement("input");
    DEX.setAttribute("type", "text");
    DEX.setAttribute("name", "dexMod");
    DEX.setAttribute("placeholder", "Dexterity Modifier");

    form.appendChild(DEX);

    var CON = document.createElement("input");
    CON.setAttribute("type", "text");
    CON.setAttribute("name", "conMod");
    CON.setAttribute("placeholder", "Constitution Modifier");

    form.appendChild(CON);

    var INT = document.createElement("input");
    INT.setAttribute("type", "text");
    INT.setAttribute("name", "intMod");
    INT.setAttribute("placeholder", "Intelligence Modifier");

    form.appendChild(INT);

    var WIS = document.createElement("input");
    WIS.setAttribute("type", "text");
    WIS.setAttribute("name", "wisMod");
    WIS.setAttribute("placeholder", "Wisdom Modifier");

    form.appendChild(WIS);

    var CHA = document.createElement("input");
    CHA.setAttribute("type", "text");
    CHA.setAttribute("name", "chaMod");
    CHA.setAttribute("placeholder", "Charisma Modifier");

    form.appendChild(CHA);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());
    

    var SavingThrows = document.createElement("input");
    SavingThrows.setAttribute("type", "text");
    SavingThrows.setAttribute("name", "savingThrows");
    SavingThrows.setAttribute("placeholder", "Saving Throw Proficiencies");

    form.appendChild(SavingThrows);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());

    var Darkvision = document.createElement("input");
    Darkvision.setAttribute("type", "text");
    Darkvision.setAttribute("name", "darkvision");
    Darkvision.setAttribute("placeholder", "Darkvision Distance");

    form.appendChild(Darkvision); 
    
    var PassivePerception = document.createElement("input");
    PassivePerception.setAttribute("type", "text");
    PassivePerception.setAttribute("name", "passivePerception");
    PassivePerception.setAttribute("placeholder", "Passive Perception");

    form.appendChild(PassivePerception);    
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());

    var DamageResistances = document.createElement("input");
    DamageResistances.setAttribute("type", "text");
    DamageResistances.setAttribute("name", "damageResistances");
    DamageResistances.setAttribute("placeholder", "Damage Resistances");

    form.appendChild(DamageResistances);

    var DamageImmunities = document.createElement("input");
    DamageImmunities.setAttribute("type", "text");
    DamageImmunities.setAttribute("name", "damageImmunities");
    DamageImmunities.setAttribute("placeholder", "Damage Immunities");

    form.appendChild(DamageImmunities);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());

    var ConditionImmunities = document.createElement("input");
    ConditionImmunities.setAttribute("type", "text");
    ConditionImmunities.setAttribute("name", "conditionImmunities");
    ConditionImmunities.setAttribute("placeholder", "Condition Immunities");

    form.appendChild(ConditionImmunities);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());

    var Languages = document.createElement("input");
    Languages.setAttribute("type", "text");
    Languages.setAttribute("name", "languages");
    Languages.setAttribute("placeholder", "Languages");

    form.appendChild(Languages);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());

    var Telepathy = document.createElement("input");
    Telepathy.setAttribute("type", "text");
    Telepathy.setAttribute("name", "telepathy");
    Telepathy.setAttribute("placeholder", "Telepathy");

    form.appendChild(Telepathy);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());

    var Extra = document.createElement("input");
    Extra.setAttribute("type", "text");
    Extra.setAttribute("name", "extra");
    Extra.setAttribute("placeholder", "Extra");

    form.appendChild(Extra);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());

    var AddAbility = document.createElement("select");
    AddAbility.add(new Option("Attack", "Attack"));
    AddAbility.add(new Option("Attack without Damage", "AttackNoDamage"));
    AddAbility.add(new Option("Attack with Save", "AttackSave"));
    AddAbility.add(new Option("Save", "Save"));
    AddAbility.add(new Option("Damage Only", "Damage"));
    AddAbility.add(new Option("Skill/Ability Check", "Check"));
    AddAbility.add(new Option("Spell", "Spell"));
    AddAbility.add(new Option("Utility", "Utility"));
    AddAbility.addEventListener('change', function(){displayCreatureAbilityForm(AddAbility.value)});
    
    
    form.appendChild(AddAbility);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());

    
    document.getElementById("inputBlock").append(form);
    
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
} */

function displayCreatureAbilityForm(type) {
    // Should display in a loop in this class
    // Each loop iteration should add to the correct section of the "abilities" object
    // At the end , send the abilities object to be processed and transformed
    /*switch (type) {
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
    };*/
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
