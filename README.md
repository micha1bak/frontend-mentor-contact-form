# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot-desktop.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/contact-form-hrezW_rqgn](https://www.frontendmentor.io/solutions/contact-form-hrezW_rqgn)
- Live Site URL: [https://very-usefull-contact-form.netlify.app/](https://very-usefull-contact-form.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS Flexbox
- Mobile-first workflow

### What I learned

During this project, I improved my front-end development skills by focusing on building an accessible and responsive contact form. Key takeaways include:

- Flexbox & Layouts: Used Flexbox to create a well-structured form layout while ensuring elements align properly.
````css
.name {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;  
  margin: 0 20px;
}
````

- Form Validation: Implemented validation for required fields and email formatting to enhance user experience.
````js
if (email.trim().length === 0 || !validateEmail(email)) {
  document.getElementById('err-email').style.display = "block";
  document.getElementById('email').style.border = "1px solid hsl(0, 66%, 54%)";
  } else {
    passedTestsCounter++;
    document.getElementById('err-email').style.display = "none";
  }
````

- Media Queries: Ensured the form adapts to different screen sizes, making it mobile-friendly.
````css
@media (min-width: 433px) {
  .radio-button {
    width: 48%;
    min-width: 150px;
    height: 42px;
  }
}
````

- Accessibility: Added proper labels, focus states, and keyboard navigation to meet accessibility standards.
````css
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll("input");

  inputs.forEach((input, index) => {
    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        const nextInput = inputs[index + 1];
        if (nextInput) {
          nextInput.focus();
        }
      }
    });
  });
});
````

- CSS Customization: Styled radio buttons and checkboxes with custom SVGs for a unique UI.
````css
#svg {
  width: 20px;
  height: 20px;
  background: url(/assets/images/icon-success-check.svg) no-repeat center;
  background-size: contain;
}
````

- Interactive Feedback: Created hover, focus, and error states to provide clear user guidance.
````css
.submit__box button:hover {
  background-color: hsl(187, 24%, 22%);
  cursor: pointer;
}
````

### Continued development

I plan to continue improving my skills in the following areas:

- Advanced CSS Animations & Transitions – To enhance interactivity, I'll explore smooth transitions for form elements.
- Further Accessibility Improvements – I'll research more accessibility best practices to refine screen reader compatibility.
- CSS Frameworks – Exploring frameworks like Tailwind CSS or Bootstrap for efficient styling and layout management.
- JavaScript Form Handling – Improving validation logic and adding real-time feedback for better UX.
- Refining Responsiveness – Testing on different devices and fine-tuning media queries for a fully adaptive experience.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) - HTML input elements
- [W3schools](https://www.w3schools.com/js/js_validation.asp) - JavaScript Form Validation

## Author

- Michał Bąk
- Frontend Mentor - [@micha1bak](https://www.frontendmentor.io/profile/micha1bak)
