import { User } from "/routes/user";
var passport = require("passport")
var LocalStrategy = require('passport-local').Strategy;


var db = require("../../database/db");

    //user will sign in with username, will edit once established
    passport.use(new LocalStrategy(

        //must define User
        function(username, password, done) {
          User.findOne({ username: username }, function(err, user) {
            if (err) { return done(err); }

            if (!user) {
              return done(null, false, { message: 'Incorrect username.' });
            }

            if (!user.validPassword(password)) {
              return done(null, false, { message: 'Incorrect password.' });
            }

            return done(null, user);

          });
        }
      
));


