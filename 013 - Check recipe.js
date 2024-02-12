/*
Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) 
and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for 
the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present 
in the objects, can be considered as 0.
*/


const recipe1 = { flour: 500, sugar: 200, eggs: 1 };
const recipe2 = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
const available1 = { flour: 1200, sugar: 1200, eggs: 3, milk: 200 };
const available2 = { sugar: 500, flour: 2000, milk: 2000 };


function cakesCount(recipe, available) {
    let count = [];
    for (let p of Object.entries(recipe)) {
        if (!available.hasOwnProperty(p[0])) return 0;
        count.push(Math.floor(available[p[0]] / p[1]));
    }
    return Math.min(...count);
}


console.log(cakesCount(recipe1, available1));
console.log(cakesCount(recipe2, available2));