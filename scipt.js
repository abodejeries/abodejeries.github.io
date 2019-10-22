
 window.onload = function(){
     // Get the user data from cookie
 var loggedUser = JSON.parse(localStorage.getItem('user'));

 document.getElementById('fname').value = loggedUser.username;
 document.getElementById('email').value = loggedUser.email;
 document.getElementById('phone').value = loggedUser.phone;

 }
 /**
 * QUESTION 1 and 2
 * TODO: FORM VALIDATION
 */
document.getElementById('submit-btn').addEventListener('click', function (e) {
    e.preventDefault();
    /**
     * Get the values from each input field from the form
     */
    var name = document.getElementById('fname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var subject = document.getElementById('subject').value;

    /**
     * Check that all the fields have content
     */
    if (name.length > 0 && email.length > 0 && phone.length > 0 && subject.length > 0) {
        // Check that email is valid: It contains '@' and '.'
        var at = email.indexOf('@');
        var dot = email.lastIndexOf('.');
        if (at < 1 || dot < at + 2 || dot + 2 >= email.length) {
            // Email is invalid
            alert('Enter a valid email address');
        } else {
            // Validate the phone number: SHOULD CONTAIN DIGITS ONLY AND NOT GREATER THAT 15 DIGITS
            if (phone.length > 15 || phone.length < 10 || isNaN(phone)) {
                alert('Phone number should have digits ONLY of length 10 - 15')
            } else {
                // Show the inputs to the user
                var option = confirm(`These are the details captured: 
                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Subject: ${subject}
                
                Submit the details?`);
                // Get the option selected by the user
                if (option == 1) {
                    alert('Thanks, details submitted successfully');
                    document.forms['contact-us-form'].submit();
                }
            }
        }
    } else {
        alert('Please fill all the fields');
    }
});

