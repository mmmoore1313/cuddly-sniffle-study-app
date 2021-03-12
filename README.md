# Study This: A Better Tool for Learning
> 
> Study this is an enhanced flash card app that automates the user's study habbits. Inspired by and similar to Anki, Study This aims to have the user study information at timed intervals that just before they forget what was learned.
>
> Like Anki, information that is known will increase in study intervals with every successfully answered card. A difference from Anki is that Study This will use an interactive multiple choice feature that recognizes when and how often a correct answer is chosen. A stretch goal is for Study This to adapt to the user, and identify the optimal studying intervals for each user and review then.
>
> ### Backstory
> > For several years, my friend and I have discussed how to perfect our learning process. We have sketched out many versions of this application, slowly whittling down the design and implementation. Study This is the next step of this very long R&D phase.
>
> ### Planning
>> V1:
>> 1. Build the API
>>> - Utilize express and the User templates to build a User model that can Sign-up, Sign-in, Sign-out, and Change Password
>>> - Build a Card Schema that allows for a User to Create, Read, Update, and Destroy a card object
>>> - Deploy the API to Heroku and set it up to connect with the UI   
>> 2. Build the User functions in the UI
>>> - Add a 'Sign-up' form with text fields for email, password, password confirmation, and a submit button to the index.html
>>> - Add a click event and a authEvents.signup function to the app.js
>>> - Add a signup event to the auth/events.js page
>>> - Add a signup API call to the auth/api.js page
>>> - Add a signupSuccess and and authFailure action to the auth/ui.js page
>>> - Repeat for sign-in, sign-out, and change password functions
>> 3. Build the CRUD functions in the UI
>>> - Add a Create Card form with text fields for Term and Definition to the index.html
>>> - Add a click event and a cardEvents.create function to the app.js
>>> - Add a createCard event to the card/events.js page
>>> - Add a create API call to the card/api.js page
>>> - Add a createCardSuccess and a cardFailure action to the card/ui.js page
>>> - Repeat for Read, Update, and Destroy
> ## Wire Frame:
>> ![image](https://media.git.generalassemb.ly/user/33705/files/e30add80-817c-11eb-9c9e-22e3ca16e34d)
>
> ## User Stories:
> 
>> V1:
>>> - As a User I will be able to sign-up/sign-in and store basic information about me.
>>> - As a User I will be able to create flashcards by entering details (question/subject/answer) about that flahscard.
>>> - As a User I will be able to view either all of my flashcards or a single flashcard.
>>> - As a User I will be able to view either one or all of the flascards of other users.
>>
>> V2.
>>> - As a User I will be able to set a review schedule for each of my flashcards
>>> - As a User, when reviewing flashcards, I will be presented with multiple answers on the card and able to choose either the correct answer or an incorrect answer, with repercussions for either.
>
> ## [Client-side Repo](https://github.com/mmmoore1313/cuddly-sniffle-study-app):
>> [https://github.com/mmmoore1313/cuddly-sniffle-study-app](https://github.com/mmmoore1313/cuddly-sniffle-study-app)
>
> ## [Backend Deployment Location](https://studythis-mm.herokuapp.com/)
>> [https://studythis-mm.herokuapp.com/](https://studythis-mm.herokuapp.com/)
>
> ## [Full Deployment location](https://mmmoore1313.github.io/cuddly-sniffle-study-app/):
>> [https://github.com/mmmoore1313/cuddly-sniffle-study-app](https://mmmoore1313.github.io/cuddly-sniffle-study-app/)
>
> ## Technologies used:
>> - Express
>> - jQuery
>> - JavaScript
>> - The All Mighty Google
>> - Bootstrap
>> - HTML/CSS/SCSS
>
> ## Unsolved Problems
>
>> After a successful deployment of the back-end early on in the project, I ran into some life friction followed by extended development confusion while hosting:
>>> - I repeatedly ran into a CORS issue with cross-headers
>>> - Researching this error both in the issues and the Google led me to scour my work, looking for typos; many were found, but none solved the problem at hand
>>> - I reached out to a friend in the industry who pointed out that I was attempting to develope localy with a hosted back-end, which was where the issue with CORS resided.
>>> - Problem solved
>>
>> The next bout of issues I came across resided in the front end
>>> - From the front page, I successfully linked the 'sign-up' and 'sign-in' functions to their respective ports on the API.
>>> - I added a mildly detailed 'About' modal to the front page.
>>> - When moving through to the user (signed in) portion of the app, I was unable to get jQuery to recognize my actions
>>>  - I utilized the ```$('element').click(function (){})``` for the front page (and in previous apps) to begin the process of loading forms and html into modals and then running through the API requests
>>>  - On the user page, the 'click' would register
>>>    - tested using `console.log('click')` under the function line
>>>    - The browser console read the `console.log()` each time the button was clicked
>>>   - But the app would not continue to the next line of the function
>>>   - I tested several variaties of solutions found on stackOverFlow as well as the issues channel:
>>>      - `$('element').on('click', function() {})`
>>>      - `$('parent').delegate('child', 'click', fucntion (){})`
>>>   - I was not able to solve this problem before the final hour. 
