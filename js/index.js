// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
    if (state.greenPepper) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce-white').forEach(oneSauceWhite => {
    if (state.sauceWhite) {
      oneSauceWhite.style.visibility = 'visible';
    } else {
      oneSauceWhite.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust-gluten-free').forEach(oneCrust => {
    if (state.crust) {
      oneCrust.style.visibility = 'visible';
    } else {
      oneCrust.style.visibility = 'hidden';
    }
  });
}

// stqte = {peperoni, true, ,ushroo,: true}
const ingredientClasses = {
  pepperoni: "pepperoni",
  mushrooms: "mushrooms",
  greenPeppers: "green-peppers",
  whiteSauce: "sauce",
  glutenFreeCrust: "crust"
}

function renderButtons() {
  for (let key in state) {
    if (state[key]) {
      //state is true
      document.querySelector('.btn-' + ingredientClasses[key]).classList.add('active')
    } else {
      // state te is false
      document.querySelector('.btn-' + ingredientClasses[key]).classList.remove('active')
    }
    // Iteration 3: add/remove the class "active" of each `<button class="btn">`
    //document.querySelectorAll('.btn').forEach(btn => {
    //if (state.btn) {
    //  btn.classlist.toggle(active);
    //}
    //   else {
    //  ()  mushroomsBtn.classlist.remove(active);
    //  }
    // if (state.btn) {
    //  btn.classlist.add(active);
    // } else {
    //  btn.classlist.remove(active);
    // }
    // ;
  }

  function renderPrice() {
    // Iteration 4: change the HTML of `<aside class="panel price">`
  }

  renderEverything();

  // Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
  document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

  // Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
  document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

  // Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
  document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
    state.greenPepper = !state.greenPepper;
    renderEverything();
  });

  // Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
  document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
    state.sauceWhite = !state.sauceWhite;
    renderEverything();
  });
  // Iteration 2: Add click event listener on `<button class="btn btn-crust">`
  document.querySelector('.btn.btn-crust').addEventListener('click', () => {
    state.crust = !state.crust;
    renderEverything();
  });