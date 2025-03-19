# ProductStore-TestSuites-Cypress

This repository contains the Cypress test cases for the **DemoBlaze** website. 
[DemoBlaze Website](https://www.demoblaze.com/)
The test suite includes various tests that validate the functionality and user experience of the website. It covers sections such as **Homepage**, **Login**, **Sign Up**, **Cart**, **Contact**, and **About Us**. The tests ensure that the website is functioning as expected.

---

## Table of Contents

- [Test Suite Overview](#test-suite-overview)
- [Test Cases Summary](#test-cases-summary)
- [Test Details](#test-details)
  - [About Us (about_us.js)](#about-us-about_usjs)
  - [Homepage (homepage.js)](#homepage-homepagejs)
  - [Contact (contact.js)](#contact-contactjs)
  - [Cart (cart.js)](#cart-cartjs)
  - [Login (login.js)](#login-loginjs)
  - [Sign Up (signup.js)](#sign-up-signupjs)
- [Conclusion](#conclusion)

---

## Test Suite Overview

The **Cypress** test suite for **DemoBlaze website** covers the following core areas:

- **Homepage**: Validation of homepage elements, product categories, navigation, and footer.
- **Login**: Verifying the login functionality with both valid and invalid credentials.
- **Sign Up**: Ensuring the registration functionality works as expected.
- **Cart**: Adding products to the cart, checking out, and verifying order placement.
- **Contact**: Submitting the contact form with various valid and invalid inputs.
- **About Us**: Checking the visibility and functionality of the About Us section.

---

## Test Cases Summary

| **Feature**        | **Test Cases** | **Status**    |
|--------------------|----------------|---------------|
| **About Us**       | 3              | All Tests Passed |
| **Homepage**       | 25             | All Tests Passed |
| **Contact**        | 9              | All Tests Passed |
| **Cart**           | 21             | All Tests Passed |
| **Login**          | 20             | All Tests Passed |
| **Sign Up**        | 7              | All Tests Passed |

---

## Test Details

### **1. About Us (about_us.js)**

- **Test 1**: **Should be able to open the About Us tab**  
  *Description*: Verifies that the user can open the About Us tab.  
  *Expected Result*: The About Us section should open successfully.

- **Test 2**: **Should be able to close the About Us tab**  
  *Description*: Verifies that the user can close the About Us tab.  
  *Expected Result*: The About Us section should close successfully.

- **Test 3**: **Should be able to cross the About Us tab**  
  *Description*: Verifies that the user can click the cross icon to close the About Us tab.  
  *Expected Result*: The About Us section should close successfully by clicking the cross icon.

---

### **2. Homepage (homepage.js)**


- **Test 1**: **Should load the Home page**  
  *Description*: Verifies that the homepage loads successfully.  
  *Expected Result*: The homepage should load without errors.

- **Test 2**: **Should be able to view Product Store in the Header**  
  *Description*: Verifies that the "Product Store" is visible in the header.  
  *Expected Result*: The "Product Store" should be present in the header.

- **Test 3**: **Should be able to view Home Tab in the Header**  
  *Description*: Verifies that the "Home" tab is visible in the header.  
  *Expected Result*: The "Home" tab should be visible in the header. 

- **Test 4**: **Should be able to view Contact Tab in the Header**  
  *Description*: Verifies that the "Contact" tab is visible in the header.  
  *Expected Result*: The "Contact" tab should be visible in the header.  

- **Test 5**: **Should be able to view About Us Tab in the Header**  
  *Description*: Verifies that the "About Us" tab is visible in the header.  
  *Expected Result*: The "About Us" tab should be visible in the header.  

- **Test 6**: **Should be able to view Cart Tab in the Header**  
  *Description*: Verifies that the "Cart" tab is visible in the header.  
  *Expected Result*: The "Cart" tab should be visible in the header.  

- **Test 7**: **Should be able to view Log in Tab in the Header**  
  *Description*: Verifies that the "Log in" tab is visible in the header.  
  *Expected Result*: The "Log in" tab should be visible in the header.  

- **Test 8**: **Should be able to view Sign up Tab in the Header**  
  *Description*: Verifies that the "Sign Up" tab is visible in the header.  
  *Expected Result*: The "Sign Up" tab should be visible in the header.  

- **Test 9**: **Should be able to view Categories in Home page**  
  *Description*: Verifies that product categories are visible on the homepage.  
  *Expected Result*: The categories should be displayed properly.

- **Test 10**: **Should be able to click on Phone tab in Categories Section**  
  *Description*: Verifies that the "Phone" tab is clickable and navigates to the phone category.  
  *Expected Result*: The "Phone" tab should be clickable and display phone products.

- **Test 11**: **Should be able to navigate to next screen on Phone tab in Categories Section**  
  *Description*: Verifies that the user can navigate to the next screen of phone products.  
  *Expected Result*: Clicking the "Next" button should display the next set of phone products.

- **Test 12**: **Should be able to navigate to previous screen on Phone tab in Categories Section**  
  *Description*: Verifies that the user can navigate to the previous screen of phone products.  
  *Expected Result*: Clicking the "Previous" button should display the previous set of phone products.

- **Test 13**: **Should be able to click on Laptop tab in Categories Section**  
  *Description*: Verifies that the "Laptop" tab is clickable and navigates to the laptop category.  
  *Expected Result*: The "Laptop" tab should be clickable and display laptop products.

- **Test 14**: **Should be able to navigate to next screen on Laptop tab in Categories Section**  
  *Description*: Verifies that the user can navigate to the next screen of laptop products.  
  *Expected Result*: Clicking the "Next" button should display the next set of laptop products.

- **Test 15**: **Should be able to navigate to previous screen on Laptop tab in Categories Section**  
  *Description*: Verifies that the user can navigate to the previous screen of laptop products.  
  *Expected Result*: Clicking the "Previous" button should display the previous set of laptop products.

- **Test 16**: **Should be able to click on Monitors tab in Categories Section**  
  *Description*: Verifies that the "Monitors" tab is clickable and navigates to the monitors category.  
  *Expected Result*: The "Monitors" tab should be clickable and display monitor products.

- **Test 17**: **Should be able to navigate to next screen on Monitors tab in Categories Section**  
  *Description*: Verifies that the user can navigate to the next screen of monitor products.  
  *Expected Result*: Clicking the "Next" button should display the next set of monitor products.

- **Test 18**: **Should be able to navigate to previous screen on Monitors tab in Categories Section**  
  *Description*: Verifies that the user can navigate to the previous screen of monitor products.  
  *Expected Result*: Clicking the "Previous" button should display the previous set of monitor products.

- **Test 19**: **Should be able to click on next frame on the homepage screen**  
  *Description*: Verifies that the user can navigate to the next frame on the homepage.  
  *Expected Result*: Clicking the "Next" button should take the user to the next frame on the homepage.

- **Test 20**: **Should be able to click on previous frame on the homepage screen**  
  *Description*: Verifies that the user can navigate to the previous frame on the homepage.  
  *Expected Result*: Clicking the "Previous" button should take the user back to the previous frame on the homepage.

- **Test 21**: **Should be able to view footer on the homepage screen**  
  *Description*: Verifies that the footer is visible on the homepage.  
  *Expected Result*: The footer should be displayed at the bottom of the homepage.

- **Test 22**: **Should be able to view About Us in footer on the homepage screen**  
  *Description*: Verifies that the "About Us" section is visible in the footer.  
  *Expected Result*: The "About Us" section should be visible in the footer.

- **Test 23**: **Should be able to view Get In Touch in footer on the homepage screen**  
  *Description*: Verifies that the "Get In Touch" section is visible in the footer.  
  *Expected Result*: The "Get In Touch" should be visible in the footer.

- **Test 24**: **Should be able to view Product Store in footer on the homepage screen**  
  *Description*: Verifies that the "Product Store" section is visible in the footer.  
  *Expected Result*: The "Product Store" should be visible in the footer.

- **Test 25**: **Should be able to view Copyrights in footer on the homepage screen**  
  *Description*: Verifies that the copyright information is displayed in the footer.  
  *Expected Result*: The copyright text should be present and correctly formatted.


---

### **3. Contact (contact.js)**

- **Test 1**: **Should be able to submit the complete contact form on Contact tab**  
  *Description*: Verifies that the user can submit the contact form with all fields completed.  
  *Expected Result*: The form should submit successfully.

- **Test 2**: **Should be able to submit Contact form without email address**  
  *Description*: Verifies that the user can submit the contact form without providing an email address.  
  *Expected Result*: The form should submit successfully.
  
- **Test 3**: **Should be able to submit Contact form without username**  
  *Description*: Verifies that the user can submit the contact form without providing a username.  
  *Expected Result*: The form should submit successfully.
  
- **Test 4**: **Should be able to submit Contact form without a message**  
  *Description*: Verifies that the user can submit the contact form without providing a message.  
  *Expected Result*: The form should submit successfully.
  
- **Test 5**: **Should be able to close completed contact form**  
  *Description*: Verifies that the user can close the contact form after submitting it.  
  *Expected Result*: The form should close successfully.

- **Test 6**: **Should be able to close Contact form without email address**  
  *Description*: Verifies that the user can close the contact form without an email address.  
  *Expected Result*: The form should close successfully.

- **Test 7**: **Should be able to close Contact form without username**  
  *Description*: Verifies that the user can close the contact form without a username.  
  *Expected Result*: The form should close successfully.

- **Test 8**: **Should be able to close Contact form without a message**  
  *Description*: Verifies that the user can close the contact form without a message.  
  *Expected Result*: The form should close successfully.

- **Test 9**: **Should be able to cross completed contact form**  
  *Description*: Verifies that the user can click the cross icon to close the completed contact form.  
  *Expected Result*: The form should close successfully when the cross icon is clicked.

—

### **4. Cart (cart.js)**

- **Test 1**: **Should be able to view Product Store in the Header**  
  *Description*: Verifies that the "Product Store" is visible in the header.  
  *Expected Result*: The "Product Store" should be visible in the header.

- **Test 2**: **Should be able to view Home Tab in the Header**  
  *Description*: Verifies that the "Home" link is visible in the header.  
  *Expected Result*: The "Home" link should be visible in the header.

- **Test 3**: **Should be able to view Contact Tab in the Header**  
  *Description*: Verifies that the "Contact" link is visible in the header.  
  *Expected Result*: The "Contact" link should be visible in the header.

- **Test 4**: **Should be able to view About Us Tab in the Header**  
  *Description*: Verifies that the "About Us" link is visible in the header.  
  *Expected Result*: The "About Us" link should be visible in the header.

- **Test 5**: **Should be able to view Cart Tab in the Header**  
  *Description*: Verifies that the "Cart" link is visible in the header.  
  *Expected Result*: The "Cart" link should be visible in the header.

- **Test 6**: **Should be able to view Log in Tab in the Header**  
  *Description*: Verifies that the "Log In" link is visible in the header.  
  *Expected Result*: The "Log In" link should be visible in the header.

- **Test 7**: **Should be able to view Sign up Tab in the Header**  
  *Description*: Verifies that the "Sign Up" link is visible in the header.  
  *Expected Result*: The "Sign Up" link should be visible in the header.

- **Test 8**: **Should be able to add products in Cart from Phone tab**  
  *Description*: Verifies that the user can add products to the cart from the Phone tab.  
  *Expected Result*: A product should be successfully added to the cart.

- **Test 9**: **Should be able to add products in Cart from Laptop tab**  
  *Description*: Verifies that the user can add products to the cart from the Laptop tab.  
  *Expected Result*: A product should be successfully added to the cart.

- **Test 10**: **Should be able to add products in Cart from Monitors tab**  
  *Description*: Verifies that the user can add products to the cart from the Monitors tab.  
  *Expected Result*: A product should be successfully added to the cart.

- **Test 11**: **Should be able to delete added product in Cart**  
  *Description*: Verifies that the user can remove products from the cart.  
  *Expected Result*: The product should be removed from the cart.

- **Test 12**: **Should be able to place an order of added product in Cart**  
  *Description*: Verifies that the user can place an order with products added to the cart.  
  *Expected Result*: The user should be able to successfully place an order.

- **Test 13**: **Should not be able to place an order without Name and Credit Card**  
  *Description*: Verifies that the order cannot be placed without providing a name and credit card details.  
  *Expected Result*: The user should receive an error when attempting to place an order without necessary details.

- **Test 14**: **Should be able to place an order for multiple products in different categories**  
  *Description*: Verifies that the user can place an order for multiple products in different categories (Phones, Laptops, Monitors).  
  *Expected Result*: The user should be able to place an order for multiple products.

- **Test 15**: **Should be able to place an order after Login**  
  *Description*: Verifies that the user can place an order after logging in.  
  *Expected Result*: The user should be able to place the order successfully.

- **Test 16**: **Should be able to cancel purchase in Cart**  
  *Description*: Verifies that the user can cancel a purchase in the cart.  
  *Expected Result*: The user should be able to cancel the purchase.

- **Test 17**: **Should be able to view footer on the Cart screen**  
  *Description*: Verifies that the footer is visible when on the Cart screen.  
  *Expected Result*: The footer should be visible.

- **Test 18**: **Should be able to view About Us in footer on the Cart screen**  
  *Description*: Verifies that the About Us is visible in the footer when on the Cart screen.  
  *Expected Result*: The About Us should be visible.

- **Test 19**: **Should be able to view Get In Touch in footer on the Cart screen**  
  *Description*: Verifies that the Get In Touch is visible in the footer when on the Cart screen.  
  *Expected Result*: The Get In Touch should be visible.

- **Test 20**: **Should be able to view Product Store in footer on the Cart screen**  
  *Description*: Verifies that the Product Store is visible in the footer when on the Cart screen.  
  *Expected Result*: The Product Store should be visible.

- **Test 21**: **Should be able to view Copyrights in footer on the Cart screen**  
  *Description*: Verifies that the Copyrights is visible in the footer when on the Cart screen.  
  *Expected Result*: The Copyrights should be visible.

---

### **5. Login (login.js)**


- **Test 1**: **Should be able to view Product Store in the Header**  
  *Description*: Verifies that the "Product Store" is visible in the header.  
  *Expected Result*: The "Product Store" should be present in the header and be clickable.

- **Test 2**: **Should be able to view Home Tab in the Header**  
  *Description*: Verifies that the "Home" tab is visible in the header.  
  *Expected Result*: The "Home" tab should be visible in the header.  

- **Test 3**: **Should be able to view Contact Tab in the Header**  
  *Description*: Verifies that the "Contact" tab is visible in the header.  
  *Expected Result*: The "Contact" tab should be visible in the header.  

- **Test 4**: **Should be able to view About Us Tab in the Header**  
  *Description*: Verifies that the "About Us" tab is visible in the header.  
  *Expected Result*: The "About Us" tab should be visible in the header.  

- **Test 5**: **Should be able to view Cart Tab in the Header**  
  *Description*: Verifies that the "Cart" tab is visible in the header.  
  *Expected Result*: The "Cart" tab should be visible in the header.  

- **Test 6**: **Should be able to view Log out Tab in the Header**  
  *Description*: Verifies that the "Logout" tab is visible in the header after a successful login.  
  *Expected Result*: The "Logout" tab should be visible in the header.  

- **Test 7**: **Should be able to view Logged in User in the Header**  
  *Description*: Verifies that the Logged in User is visible in the header.  
  *Expected Result*: The Logged in User should be visible in the header.  

- **Test 8**: **Should be able to Login User**  
  *Description*: Verifies that the user can successfully log in with valid credentials.  
  *Expected Result*: The user should be successfully logged in and redirected to the homepage.

- **Test 9**: **Should validate the user logged in**  
  *Description*: Verifies that the user’s login status is correctly validated.  
  *Expected Result*: The user should be logged in successfully.

- **Test 10**: **Should validate the user is unable to login with invalid Username**  
  *Description*: Verifies that the user cannot log in with an invalid username.  
  *Expected Result*: The login attempt should fail, and an error message should appear on the screen.

- **Test 11**: **Should validate the user is unable to login with invalid Password**  
  *Description*: Verifies that the user cannot log in with an invalid password.  
  *Expected Result*: The login attempt should fail, and an error message should appear on the screen.

- **Test 12**: **Should validate the user is unable to login without information**  
  *Description*: Verifies that the user cannot log in if no login information (username and password) is provided.  
  *Expected Result*: The login attempt should fail, and the appropriate error message should appear.

- **Test 13**: **Should be able to Log out user**  
  *Description*: Verifies that the user can log out after being logged in.  
  *Expected Result*: The user should be logged out successfully, and the "Logout" tab should no longer be visible.

- **Test 14**: **Should be able to click on cancel button on Login popup**  
  *Description*: Verifies that the user can click the cancel button on the login popup.  
  *Expected Result*: The login popup should close without logging the user in.

- **Test 15**: **Should be able to click on cross icon on Login popup**  
  *Description*: Verifies that the user can click the cross icon to close the login popup.  
  *Expected Result*: The login popup should close successfully without logging the user in.

- **Test 16**: **Should be able to view footer on the Login screen**  
  *Description*: Verifies that the footer is visible on the login screen.  
  *Expected Result*: The footer should be displayed at the bottom of the login screen.

- **Test 17**: **Should be able to view About Us in footer on the Login screen**  
  *Description*: Verifies that the "About Us" section is visible in the footer on the login screen.  
  *Expected Result*: The "About Us" section should be visible in the footer on the login screen. 

- **Test 18**: **Should be able to view Get In Touch in footer on the Login screen**  
  *Description*: Verifies that the "Get In Touch" section is visible in the footer on the login screen.  
  *Expected Result*: The "Get In Touch" section should be visible in the footer on the login screen. 

- **Test 19**: **Should be able to view Product Store in footer on the Login screen**  
  *Description*: Verifies that the "Product Store" section is visible in the footer on the login screen.  
  *Expected Result*: The "Product Store" section should be visible in the footer on the login screen. 

- **Test 20**: **Should be able to view Copyrights in footer on the Login screen**  
  *Description*: Verifies that the copyright information is displayed in the footer on the login screen.  
  *Expected Result*: The copyright text should be correctly formatted and present in the footer.

---

### **6. Sign Up (signup.js)**


- **Test 1**: **Should be able to Signup User**  
  *Description*: Verifies that a user can successfully sign up with valid details.  
  *Expected Result*: The user should be signed up successfully, and they should be redirected to the homepage.

- **Test 2**: **Should validate the user is unable to sign up without information**  
  *Description*: Verifies that the user cannot sign up without providing any information in the required fields.  
  *Expected Result*: The sign-up attempt should fail, and an error message should be shown indicating missing information.

- **Test 3**: **Should validate the user is unable to sign up without username**  
  *Description*: Verifies that the user cannot sign up without providing a username.  
  *Expected Result*: The sign-up attempt should fail, and an error message should be displayed for the missing username.

- **Test 4**: **Should validate the user is unable to sign up without password**  
  *Description*: Verifies that the user cannot sign up without providing a password.  
  *Expected Result*: The sign-up attempt should fail, and an error message should be shown for the missing password.

- **Test 5**: **Should validate the user cannot sign up with an existing user**  
  *Description*: Verifies that the user cannot sign up with an already existing username.  
  *Expected Result*: An error message should appear indicating that the username is already taken, and the user should not be able to proceed with the sign-up.

- **Test 6**: **Should be able to click on cancel button on sign up popup**  
  *Description*: Verifies that the user can click the cancel button on the sign-up popup.  
  *Expected Result*: The sign-up popup should close without submitting any information.

- **Test 7**: **Should be able to click on cross icon on sign up popup**  
  *Description*: Verifies that the user can click the cross icon on the sign-up popup to close it.  
  *Expected Result*: The sign-up popup should close without submitting any information.


---

## Conclusion

This Cypress test suite ensures that all critical functionalities of the **DemoBlaze** website are thoroughly tested, covering all user flows and edge cases for a seamless experience.



