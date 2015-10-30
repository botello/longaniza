// Before Login/Register
Router.configure({
  layoutTemplate: 'WelcomeLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

// Main application
Router.configure({
  layoutTemplate: 'HomeLayout',
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
