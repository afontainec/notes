// app/routes.js


const userController = require('./controllers/userController');

// eslint-disable-next-line max-statements
module.exports = function router(app, passport) {
  // =====================================
  // HOME PAGE (with login links) ========
  // =====================================
  app.get('/', (req, res) => {
    res.render('index.ejs'); // load the index.ejs file
  });

  // =====================================
  // LOGIN ===============================
  // =====================================
  // show the login form
  app.get('/login', (req, res) => {
    // render the page and pass in any flash data if it exists
    res.render('login.ejs', {
      message: req.flash('loginMessage'),
    });
  });

  // process the login form
  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/login',
    failureFlash: true, // allow flash messages
  }));

  // =====================================
  // SIGNUP ==============================
  // =====================================
  // show the signup form
  app.get('/signup', (req, res) => {
    // render the page and pass in any flash data if it exists
    res.render('signup.ejs', {
      message: req.flash('signupMessage'),
    });
  });

  // process the signup form
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/signup',
    failureFlash: true, // allow flash messages
  }));

  app.get('/user/:username/exists', (req, res) => {
    userController.userExists(req, res);
  });
  // =====================================
  // PROFILE SECTION =====================
  // =====================================
  // we will want this protected so you have to be logged in to visit
  // we will use route middleware to verify this (the isLoggedIn function)
  // eslint-disable-next-line
  app.get('/profile', isLoggedIn, (req, res) => {
    userController.profile(req, res);
  });
  // eslint-disable-next-line
  app.post('/user/:id/update', hasAccess, (req, res) => {
    userController.update(req, res);
  });

  // =====================================
  // LOGOUT ==============================
  // =====================================
  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });


  // route middleware to make sure a user is logged in
  function hasAccess(req, res, next) {
    const urlId = req.params.id.toString();
    const loggedId = req.session.passport.user.toString();
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated() && (urlId === loggedId)) {
      return next();
    }
    req.logout();
    // if they aren't redirect them to the home page
    res.status(403).send('You dont have permission to edit this user');
  }

  // route middleware to make sure a user is logged in
  function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()) {
      return next();
    }

    // if they aren't redirect them to the home page
    req.logout();
    res.redirect('/');
  }
};
