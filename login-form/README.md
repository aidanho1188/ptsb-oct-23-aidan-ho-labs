# Project deployment link [here](https://aidanho1188.github.io/Login-Form/)

## Login, Validation, and Password Reveal

Your product owner has tasked you to create a new login for Upright Education. You will need to use your HTML, CSS, and Javascript skills to develop this feature. It will touch on previously learned concepts and new ones. Use the tools at your disposal via searching online!

There are 4 stories to complete. Complete as many as you can.

## Stories

**Design**: See the included ./designs folder for each mockup

**Assets Provided**: Logo, Eye Open Icon, Eye Closed Icon, Favicon

**Notes**: The fake login functionality is not in solution after you submit currently.

---

### UPE-235: Login Form Design

As a user, I need a page that provides a form with the informational fields required to login into the system.

**Notes**: This is NOT the login functionality. Just the design.

**Requirements**:
- Should match design specs as close as possible outside of the specs outline below which should match
- Should have title "Login - Upright Education"
- Should have provided favicon image set for page
- Box Width: 380
- Box Padding: 43 top/bottom, 28 left/right
- Border Color: #d1d1d1
- Logo Size: 165, height should be proportional
- Orange Colored Content: #ff5321
- Login button hover color: #f15124 + box shadow
- Fields should show 1px border on focus using color specs
- Email name field placeholder "you@email.com"
- Password field placeholder "password123"

---

### UPE-236: Login Functionality

As a user, I should be logged into the system after inputting my information.

**Notes**: You will be faking the login using Javascript.

**Requirements**:
- Should login into the system if all fields are filled out.
- Should create fake data with 3 valid logins for users johnsmith, caseyfict, jessdaring. You pick the passwords.
- Should attempt to login on click of the Login button if all fields are filled out. Validation info has been entered will be completed in UPE-237.

**Extra Credit**:
- Update the URL with a query string containing the email and password
- Create a fetch call sending the URL with the query string. Comment it out.
- Convert the fetch call to use the body of the request instead of a query string for the fake fetch call.
- Login attempts that do not match one of the fake logins should return an error "It looks like your email or password is incorrect. Please try again."
- Comment in your code why I wrote the error message text specifically like that. Think about the overall of creating login functionaltiy why it would be important.

---

### UPE-237: Form Validation

As a user, I should not be able to login unless all informational fields are inputted.

**Requirements**:
- Should use native browser form validation if email or password is not inputted and prevent login.

---

### UPE-236: Password Reveal

As a user, I would like a way to reveal my password to ensure I entered it correctly.

**Requirements**:
- Should have eye open icon to the right of password field. 7 pixels from the right and should be equally vertically centered to the height of the field.
- Should change the password field to show password as text on click. Change icon to closed eye icon.
- Should change the password field back to password on click if it is currently revealed. Change back to eye open icon.
