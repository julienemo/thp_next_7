const titleZone = document.getElementById('title_zone');
const instructionZone = document.getElementById('instruction_zone');

const steps = [
  [1, "cup", "white flour", "dry"],
  [0.5, "tsp", "baking soda", "wet"],
  [0.25, "tsp", "salt", "dry"],
  [0.25, "cup", "sugar", "dry"],
  [0.25, "cup", "brow sugar", "dry"],
  [0.25, "tbsp", "soy milk", "wet"],
  [0.25, "tbsp", "oil", "wet"],
  [0.25, "tsp", "pure vanilla extract", "dry"],
  ["Form into one big ball, then either refrigerate at least 2 hours or freeze until the dough is cold. Once dough is chilled, preheat oven to 325 F. Form dough balls, and place on a greased baking tray, leaving enough room between cookies for them to spread."],
  [325, 10]
]

function Recipe (title, stepArray) {
  let recipe = Object.create(Recipe.prototype);
  recipe.title = title;
  recipe.steps = stepArray;
  return recipe;
}

Recipe.prototype.cook = function() {
  titleZone.innerHTML = this.title;

  let instructionArray = [];

  let getInstructions = function(element){
    let length = element.length ;
    if (length === 1) {
      instructionArray.push(element[0])
    } else if (length === 2 
           && (element[0]**2 + element[1]**2 > 0)) {
      instructionArray.push(`Then, heat ${element[0]} minutes in the oven at Y degrees.`)
    } else if (length === 4){
      if (element[3]=== 'dry') {
        instructionArray.push(`Add ${element[0]} ${element[1]} of ${element[2]} to the bowl.`)
      } else if (element[3] === 'wet'){
        instructionArray.push(`Pour ${element[0]} ${element[1]} of ${element[2]} to the bowl.`)
      }
    }
  }

  this.steps.forEach(function(e){
    getInstructions(e);
  })

  instructionArray.forEach(function(ele){
    instructionZone.innerHTML += `<li>${ele}</li>`
  });  
}

let recipe = new Recipe('Best vegan choco cookie', steps);
recipe.cook();