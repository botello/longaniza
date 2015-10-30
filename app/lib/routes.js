// Before Login/Register
Router.configure({
  layoutTemplate: 'WelcomeLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

// Main application (dashboard)
Router.configure({
  layoutTemplate: 'HomeLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

// Game
Router.configure({
  layoutTemplate: 'GameLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


//-----------------------------------------------
// Welcome Layout
//-----------------------------------------------
Router.route('/', {
  name: 'welcome',
  controller: 'WelcomeController',
  where: 'client',
  layoutTemplate: 'WelcomeLayout',
});


//-----------------------------------------------
// Home Layout
//-----------------------------------------------
Router.route('/home', {
  name: 'home',
  controller: 'HomeController',
  where: 'client',
  layoutTemplate: 'HomeLayout',
});


//-----------------------------------------------
// Game Layout
//-----------------------------------------------
Router.route('/game', {
  name: 'game',
  controller: 'GameController',
  where: 'client',
  layoutTemplate: 'GameLayout',
});
