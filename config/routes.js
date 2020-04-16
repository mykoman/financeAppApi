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

  '/': { view: 'pages/homepage' },
  'POST /api/v1/register/organisation-type': { action: 'register/organisation-type' },
  'POST /api/v1/register/organisation': { action: 'register/organisation' },
  'POST /api/v1/register/member': { action: 'register/member' },
  'POST /api/v1/wallet/fund': { action: 'wallet/fund' },
  'POST /api/v1/wallet/withdraw': { action: 'wallet/withdraw' },
  'POST /api/v1/wallet/balance-check': { action: 'wallet/balance-check' },
  'POST /api/v1/list/organisation': { action: 'list/organisation' },
  'POST /api/v1/list/organisation-type': { action: 'list/organisation-type' },
  'POST /api/v1/list/member': { action: 'list/member' },




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
