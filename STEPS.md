# WineBored

API: winebored.herokuapp.com
It's best to use Bulma for this hw so you can focus on functionality but if you do want to style it yourself that's fine, just don't make it a priority until you're done with the rest
($ in front of a command means it's a terminal command, don't copy the $ sign in front of it)

## Steps for tonight's homework:
1. App.js  
Write a simple <h1> to check that it renders to the browser
2. `$ yarn add bulma axios react-router-dom`
Plus you need to make sure also you install axios, bulma, and react-router-dom
3. Index.js
Write a simple <h1> to check that it renders (you need to import it to the App before it will)
4. App.js
  Add the BrowserRouter\Switch\Link and import the WineIndex.js
  Hook this up first as a Route
  Then add a Link to the Navbar
  At this point you will want to be able to use the Navbar to navigate from your Home to your Index Page
  TEST TEST TEST
5.Index.js
  Make the axios get request for all the resource
  Create the cards inside the render (no need to refactor to a different component yet)
  TEST!
6. Index.js - Optional
  Refactor your card into a separate Card component (don't forget to export/import the card component)
  Check everything worked!
