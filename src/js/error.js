//Listing error//
    const regForm = document.querySelector('form#form');
    const errors_el = document.querySelector('form#form .errors');

    regForm.addEventListener('submit', validateFormForm);

    function validateFormForm (e) {
    e.preventDefault();
    
    const street = document.querySelector('#form #street');
    const number = document.querySelector('#form #number');
    const post = document.querySelector('#form #post');
    const city = document.querySelector('#form #city');
    const price = document.querySelector('#form #price');
    const size = document.querySelector('#form #size');
    const bedrooms = document.querySelector('#form #bedrooms');
    const bathrooms = document.querySelector('#form #bathrooms');
    const construction = document.querySelector('#form #construction');
    const description = document.querySelector('#form #description');

    let errors = [];
    
    if (street.value == "") {
    errors.push({text: "street", el: street});
    }

    if (number.value == "") {
    errors.push({text: "number", el: number});
    }

    if (post.value == "") {
    errors.push({text: "post", el: post});
    }
    
    if (city.value == "") {
    errors.push({text: "city", el: city});
    }

    if (price.value == "") {
    errors.push({text: "price", el: price});
    }

    if (size.value == "") {
    errors.push({text: "size", el: size});
    }

    if (bedrooms.value == "") {
    errors.push({text: "bedrooms", el: bedrooms});
    }

    if (bathrooms.value == "") {
    errors.push({text: "bathrooms", el: bathrooms});
    }

    if (description.value == "") {
    errors.push({text: "description", el: description});
    }

    if (garage.value == "") {
    errors.push({text: "garage", el: garage});
    }

    if (construction.value == "") {
    errors.push({text: "construction", el: construction});
    } 
    
    if (errors.length > 0) {
    handle_errors(errors);
    return false;
    }

    }

    function handle_errors(errs) {
    let str = "You have errors with the following fields; ";
    
    errs.map((er) => {
    er.el.classList.add('error');
    str += er.text + ", ";
    });
    
    errs[0].el.focus();
    
    let error_el = document.createElement('div');
    error_el.classList.add('error');
    error_el.innerText = str;
    
    error_el.addEventListener('click', function () {
    errors_el.removeChild(error_el);
    });
    
    errors_el.appendChild(error_el);
    }
//Listing error//
