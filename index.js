function fizzBuzz() {
    // When the user enters a number into the form & clicks "Submit", 
    // start the function:
    $('#number-chooser').submit( event => {

    // Prevent default form submission behavior
        event.preventDefault();

    // In case there's already results
        $(".js-results").empty();

    // Store the number that was entered by the user in a const
        const num = parseInt( $(event.currentTarget).find(
            'input[name="number-choice"]').val());

    // We'll store individual DOM elements for each number
    // in this array, and once we've produced them all, 
    // we'll append it to the "results" section of our HTML
        const results = [];

    // For each number between 1 and `num`, do the following:
        for (let i = 1; i <= num; i++) {
           
            // If it's divisible by 3 & 5, create a "fizzbuzz" element
            if (i % 15 === 0) {
                results.push($(
                    '<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>'
                ));
            }
            // If it's divisible by only 5, create a "buzz" element
            else if (i % 5 === 0) {
                results.push($(
                    '<div class="fizz-buzz-item buzz"><span>buzz</span></div>'
                ));
            }
            // If it's divisible by only 3, create a "fizz" element
            else if (i % 3 === 0) {
                results.push($(
                    '<div class="fizz-buzz-item fizz"><span>fizz</span></div>'
                ));
            }
            // Otherwise, create a fizz-buzz-item element that displays `num`
            else {
                results.push($(
                    `<div class="fizz-buzz-item"><span>${i}</span></div>`
                ));
            }
        }
        // Attach our results to the ".js-results" element in the DOM
        $(".js-results").append(results);
    })
}

$(fizzBuzz);