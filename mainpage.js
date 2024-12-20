// ************************ VARIABLES ***************************

var br = document.createElement("br");
var curCreature;
var curStats;
var curAbilityList = [];

var AddAbility; // ability action type
var AddAbilityType; // ability display type

// Stats variables
var NAME;
var AC;
var HP;
var MS;
var STR;
var DEX;
var CON;
var INT;
var WIS;
var CHA;
var SavingThrows;
var Darkvision;
var PassivePerception;
var DamageResistances;
var DamageImmunities;
var ConditionImmunities;
var Languages;
var Telepathy;
var Extras;

// Individual ability action types
innateList = [];
actionList = [];
condActionList = [];
bonusActionList = [];
reactionList = [];
utilityList = [];

// Creature list to ingest for overall macro creation
const creatureList = [];

// ************************ OBJECTS *****************************

// Stats Object
function Stats(name,ac,hp,ms,str,dex,con,int,wis,cha,savingThrows,darkvision,passivePerception,damageResistances,damageImmunities,conditionImmunities,languages,telepathy,extras) {
    this.name = name;
    this.ac = ac;
    this.ms = ms;
    this.str = str;
    this.dex = dex;
    this.con = con;
    this.int = int;
    this.wis = wis;
    this.cha = cha;
    this.savingThrows = savingThrows;
}

// Ability Object
function Ability(key,value,actionUsedType,abilityDisplayType) {
    this.key = key;
    this.value = value;
    this.actionUsedType = actionUsedType;
    this.abilityDisplayType = abilityDisplayType;
}

// Creature Object
function Creature(name,stats,abilities) {
    this.name = name;
    this.stats = stats;
    this.abilities = abilities;
}

// ******************************************* DISPLAY FORMS **********************************

// Each creature and attack needs a form display function
function displayCreatureForm() {
    
    var form = document.createElement("form");
    form.setAttribute("id","mainForm");
    form.setAttribute("method","post");

    NAME = document.createElement("input");
    NAME.setAttribute("type", "text");
    NAME.setAttribute("name", "creatureName");
    NAME.setAttribute("placeholder", "Creature Name");

    curCreature.name = NAME;
    
    form.appendChild(NAME);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());

    AC = document.createElement("input");
    AC.setAttribute("type", "text");
    AC.setAttribute("name", "ac");
    AC.setAttribute("placeholder", "Armor Class");

    form.appendChild(AC);

    HP = document.createElement("input");
    HP.setAttribute("type", "text");
    HP.setAttribute("name", "hp");
    HP.setAttribute("placeholder", "Health Point Maximum");

    form.appendChild(HP);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());

    MS = document.createElement("input");
    MS.setAttribute("type", "text");
    MS.setAttribute("name", "ms");
    MS.setAttribute("placeholder", "Movement Speed");

    form.appendChild(MS);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());

    STR = document.createElement("input");
    STR.setAttribute("type", "text");
    STR.setAttribute("name", "strMod");
    STR.setAttribute("placeholder", "Strength Modifier");

    form.appendChild(STR);

    DEX = document.createElement("input");
    DEX.setAttribute("type", "text");
    DEX.setAttribute("name", "dexMod");
    DEX.setAttribute("placeholder", "Dexterity Modifier");

    form.appendChild(DEX);

    CON = document.createElement("input");
    CON.setAttribute("type", "text");
    CON.setAttribute("name", "conMod");
    CON.setAttribute("placeholder", "Constitution Modifier");

    form.appendChild(CON);

    INT = document.createElement("input");
    INT.setAttribute("type", "text");
    INT.setAttribute("name", "intMod");
    INT.setAttribute("placeholder", "Intelligence Modifier");

    form.appendChild(INT);

    WIS = document.createElement("input");
    WIS.setAttribute("type", "text");
    WIS.setAttribute("name", "wisMod");
    WIS.setAttribute("placeholder", "Wisdom Modifier");

    form.appendChild(WIS);

    CHA = document.createElement("input");
    CHA.setAttribute("type", "text");
    CHA.setAttribute("name", "chaMod");
    CHA.setAttribute("placeholder", "Charisma Modifier");

    form.appendChild(CHA);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());
    

    SavingThrows = document.createElement("input");
    SavingThrows.setAttribute("type", "text");
    SavingThrows.setAttribute("name", "savingThrows");
    SavingThrows.setAttribute("placeholder", "Saving Throw Proficiencies");

    form.appendChild(SavingThrows);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());

    Darkvision = document.createElement("input");
    Darkvision.setAttribute("type", "text");
    Darkvision.setAttribute("name", "darkvision");
    Darkvision.setAttribute("placeholder", "Darkvision Distance");

    form.appendChild(Darkvision); 
    
    PassivePerception = document.createElement("input");
    PassivePerception.setAttribute("type", "text");
    PassivePerception.setAttribute("name", "passivePerception");
    PassivePerception.setAttribute("placeholder", "Passive Perception");

    form.appendChild(PassivePerception);    
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());

    DamageResistances = document.createElement("input");
    DamageResistances.setAttribute("type", "text");
    DamageResistances.setAttribute("name", "damageResistances");
    DamageResistances.setAttribute("placeholder", "Damage Resistances");

    form.appendChild(DamageResistances);

    DamageImmunities = document.createElement("input");
    DamageImmunities.setAttribute("type", "text");
    DamageImmunities.setAttribute("name", "damageImmunities");
    DamageImmunities.setAttribute("placeholder", "Damage Immunities");

    form.appendChild(DamageImmunities);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());

    ConditionImmunities = document.createElement("input");
    ConditionImmunities.setAttribute("type", "text");
    ConditionImmunities.setAttribute("name", "conditionImmunities");
    ConditionImmunities.setAttribute("placeholder", "Condition Immunities");

    form.appendChild(ConditionImmunities);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());

    Languages = document.createElement("input");
    Languages.setAttribute("type", "text");
    Languages.setAttribute("name", "languages");
    Languages.setAttribute("placeholder", "Languages");

    form.appendChild(Languages);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());

    Telepathy = document.createElement("input");
    Telepathy.setAttribute("type", "text");
    Telepathy.setAttribute("name", "telepathy");
    Telepathy.setAttribute("placeholder", "Telepathy");

    form.appendChild(Telepathy);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());

    Extras = document.createElement("input");
    Extras.setAttribute("type", "text");
    Extras.setAttribute("name", "extras");
    Extras.setAttribute("placeholder", "Extra");

    form.appendChild(Extras);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());
    
    
    menuAbilityActionCategories(form);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());

    
    document.getElementById("inputBlock").append(form);
    
}



function displayIndividualAbilityForm(form) {
    // each time this is called, generate a new ability prompt
    // append this ability to the abilityList of the creature
    
    
    switch (curActionType) {
        case innate:
            curCreature.abilities[curCreature.abilities.length] = 
            break;
        case action:
            displayActionForm();
            break;
        case condAction:
            displayCondActionForm();
            break;
        case bonusAction:
            displayBonusActionForm();
            break;
        case reaction:
            displayReactionForm();
            break;
        case utility:
            displayUtilityForm();
            break;
    };

    // Show the action category menu again, to add another ability
    menuAbilityActionCategories(form);
}



// *************************** DROP DOWN MENUS *****************************

function menuAbilityActionCategories(form) {
    AddAbility = document.createElement("select");
    AddAbility.add(new Option("Innate Ability", "innate"));
    AddAbility.add(new Option("Action", "action"));
    AddAbility.add(new Option("Conditional Action", "condAction"));
    AddAbility.add(new Option("Bonus Action", "bonusAction"));
    AddAbility.add(new Option("Reaction", "reaction"));
    AddAbility.add(new Option("Utility", "utility"));

    curActionType = AddAbility.value;
    
    AddAbility.addEventListener('change', function(){menuAttackAndSaveTypes(form)}); 

    form.appendChild(AddAbility);
}

function menuAttackAndSaveTypes(form) {
    AddAbilityType = document.createElement("select");
    AddAbilityType.add(new Option("Attack", "Attack"));
    AddAbilityType.add(new Option("Attack without Damage", "AttackNoDamage"));
    AddAbilityType.add(new Option("Attack with Save", "AttackSave"));
    AddAbilityType.add(new Option("Save", "Save"));
    AddAbilityType.add(new Option("Damage Only", "Damage"));
    AddAbilityType.add(new Option("Skill/Ability Check", "Check"));
    AddAbilityType.add(new Option("Spell", "Spell"));
    AddAbilityType.add(new Option("Utility", "Utility"));
    AddAbilityType.addEventListener('change', function(){displayIndividualAbilityForm(form)});

    curAbilityDisplayType = AddAbilityType

    form.appendChild(AddAbilityType);
}

// ****************** MACRO GENERATION SECTION ******************************

// Called from the submit creature button
function submitCreature() {
    // Takes all data from all active forms, puts it into an object that's added to the creature list, displays that creature at the top of the page,
    //    then clears the page and starts a new creature

    curStats = new Stats(NAME,AC,HP,);
    //generate a fresh creature object
    curCreature = new Creature(NAME.value, curStats, curAbilityList);

    var abilityActionType = AddAbility.value; // Ability action type
    var abilityDisplayType = AddAbilityType.value; // Ability display type
    
    creatureList[creatureList.length] = curCreature;

    //Now reset the inputBlock and display the completed creature at the top of the page
    
    document.getElementById("inputBlock").innerHTML = "";
    document.getElementById("inputBlock").innerHTML = "";
}

// Called from the submit and create all button
function generateFightMacro() {
    // Loop through the creatures array, generating stats and abilities for each
    var fightMacroString = "";
    for (const creature of creatures) {
        // Append the current creature to the fight macro as a macro call
        fightMacroString.concat('#' + creature.name + '\n');
        
        // Generate stat macros
        generateStatMacro();
        
        // Generate creature macros
        generateCreatureMacros(creature.abilityList);
    }

    appendToOutput(fightMacroString);

    // Now reset all variables
    curCreature = null;
    creatureList = [];
    innateList = [];
    actionList = [];
    condActionList = [];
    bonusActionList = [];
    reactionList = [];
    utilityList = [];
}

function generateStatMacro() { // ************************TODO
    // Pretty straightforward function to generate the stat whisper block using global variables
}

// Function to turn abilities array into copyable macros
function generateCreatureMacro(abilities) {
    var macroStr;

    curCreature.abilityList[curCreature.abilityList.length]
    
    for (innate in abilities.innate) {
        appendToOutput(generateAbilityMacro(innate));
        appendToCreatureMacro(innate);
    }
    // Once this works, repeat for actions, conditional actions, bonus actions, reactions, and extras

    //Append generated macros to the output, return the name of the creature macro, for use in the creation of the fight macro
}

function generateAbilityMacro(curAbility) {
    switch (curAbility.type) {
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
    
//generateAttackMacro - Simple + to hit, and damage - atkdmg
function generateAttackMacro(rname,modifier,range,dmg1,dmgmod1,dmgtype1,dmg2,dmgmod2,dmgtype2,desc,charname,extras) {
}

//generateAttackNoDamageMacro - + to hit - npcatk
function generateAttackNoDamageMacro(rname,modifier,description,extras) {
}

//generateAttackSaveMacro - + to hit, damage, save DC, and note on save - atkdmg
function generateAttackSaveMacro(rname,modifier,range,dmg1,dmg1mod,dmg1type,dmg2,dmg2mod,dmg2type,saveattr,savedesc,savedc,desc,charname,extras) {
}

//generateSaveMacro - Save DC, damage, and note on save - dmg
function generateSaveMacro(rname,range,dmg1,dmg1mod,dmg1type,dmg2,dmg2mod,dmg2type,saveattr,savedesc,savedc,desc,charname,extras) {
}

//generateDamageMacro - only damage - npcdmg
function generateDamageMacro(dmg1,dmg1mod,dmg1type,dmg2,dmg2mod,dmg2type,extras) {
}

//generateCheckMacro - for skill/attribute checks that might be needed - npcatk
function generateCheckMacro(rname,modifier,description,extras) {
}

//generateSpellMacro - for spell descriptions - spell
function generateSpellMacro(name,level,castingtime,range,target,v,s,m,material,duration,description,athigherlevels,ritual,concentration,charname,extras) {
}

//generateUtilityMacro - non-damage - desc
function generateUtilityMacro(desc,extras) {
}

function appendToOutput(str) {
    document.getElementById("outputBlock").innerHTML += str;
    
    document.getElementById("outputBlock").innerHTML += "<br><br>";
}
