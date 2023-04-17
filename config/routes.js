/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  "/": "home/view-home",
  "GET /birthdays": "birthdays/view-birthdays",
  "GET /birthdays/:id": "birthdays/view-birthday",
  "GET /birthdays/new": "birthdays/view-new",
  "POST /birthdays": "birthdays/create-birthday",
  "GET /birthdays/:id/edit": "birthdays/view-edit",
  "POST /birthdays/:id/edit": "birthdays/update-birthday",
  "POST /birthdays/:id/delete": "birthdays/delete-birthday",
  "GET /signup": "user/view-signup",
  "POST /users": "user/create",
  "GET /birthdays/reminder": "birthdays/reminder",

  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/
};
