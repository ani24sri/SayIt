// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("#regFormin").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      emailIn: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      passIn: {
        required: true,
        minlength: 8,
      },
      confirmPass :  {
          required :true,
          equalTo :'[name="passIn"]',
      }
    },
    // Specify validation error messages
    messages: {

      passIn: {
        required: "Please provide a password",
        minlength: "Your password must be at least 8 characters long"
      },
      emailIn: "Please enter a valid email address",
      confirmPass :
      {
          required : "Please enter password again",
          equalTo : "Please check password and enter again"
      }
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid

  });
});
