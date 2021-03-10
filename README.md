# Wire Frame:
> ![image](https://media.git.generalassemb.ly/user/33705/files/e30add80-817c-11eb-9c9e-22e3ca16e34d)

# User Stories:
> 
> V1:
> - As a User I will be able to sign-up/sign-in and store basic information about me.
> - As a User I will be able to create flashcards by entering details (question/subject/answer) about that flahscard.
> - As a User I will be able to view either all of my flashcards or a single flashcard.
> - As a User I will be able to view either one or all of the flascards of other users.
> V2.
> - As a User I will be able to set a review schedule for each of my flashcards
> - As a User, when reviewing flashcards, I will be presented with multiple answers on the card and able to choose either the correct answer or an incorrect answer, with repercussions for either.

# Client-side Repo:
> https://github.com/mmmoore1313/cuddly-sniffle-study-app

# Backend Deployment Location
> https://studythis-mm.herokuapp.com/

# Full Deployment location:
> https://github.com/mmmoore1313/cuddly-sniffle-study-apphttps://mmmoore1313.github.io/cuddly-sniffle-study-app/

## Technologies used:
> Express, Cors, JavaScript

## Unsolved Problems
>
> After a successful deployment of the back-end early on in the project, I ran into some life friction followed by extended development confusion while hosting:
> - I repeatedly ran into a CORS issue with cross-headers
> - Researching this error both in the issues and the Google led me to scour my work, looking for typos; many were found, but none solved the problem at hand
> - I reached out to a friend in the industry who pointed out that I was attempting to develope localy with a hosted back-end, which was where the issue with CORS resided.
> - Problem solved
>
> The next bout of issues I came across resided in the front end
> - From the front page, I successfully linked the 'sign-up' and 'sign-in' functions to their respective ports on the API.
> - I added a mildly detailed 'About' modal to the front page.
> - When moving through to the user (signed in) portion of the app, I was unable to get jQuery to recognize my actions
>  - I utilized the ```$('element').click(function (){})``` for the front page (and in previous apps) to begin the process of loading forms and html into modals and then running through the API requests
>  - On the user page, the 'click' would register
>    - tested using `console.log('click')` under the function line
>    - The browser console read the `console.log()` each time the button was clicked
>   - But the app would not continue to the next line of the function
>   - I tested several variaties of solutions found on stackOverFlow as well as the issues channel:
>      - `$('element').on('click', function() {})`
>      - `$('parent').delegate('child', 'click', fucntion (){})`
>   - I was not able to solve this problem before the final hour. 
