
var _ = require("underscore");
var r = require('../db');

module.exports = function(apiRoutes){
  apiRoutes
    .get    ("/users",          function(request, response){
      return r.table('users')
        .orderBy(r.desc('createdAt'))
        .coerceTo('array')
        .run(r.conn)
        .then(function (result) {
          return response.status(200).json(result);
        }).error(handleError(response));
    })
    .get    ("/users/getItem",  function(request, response){
      var id  = request.query.id;
      var key = request.query._key;
      return r.table('users')
        .filter(
          r.row(key).eq(id)
        )
        .coerceTo('array')
        .run(r.conn)
        .then(function (result) {
          return response.status(200).json(result);
        }).error(handleError(response));
    })
    .post   ("/users",          function(request, response){
      var objRequest = request.body;
      objRequest.createdAt = r.now();

      return r.table('users')
        .insert(objRequest)
        .run(r.conn)
        .then(function(result){
          response
            .status(200)
            .json({results: result});
        })
        .error(handleError(response));
    })

    .put    ("/users",          function(request, response){
      var objRequest = request.body;
      return r.table('users')
        .filter(
          r.row(objRequest._key).eq(objRequest[objRequest._key])
        )
        .update(objRequest)
        .run(r.conn)
        .then(function (result) {
          response
            .status(200)
            .json({results: result});
        }).error(handleError(response));
    })
    .delete ("/users/:id",      function(request, response){
      var id   = request.params.id;

      return  r.table('users')
        .get(id)
        .delete()
        .run(r.conn)
        .then(function() {
          response.status(200).json({
            result:{
              msg:'Remove complate'
            }
          })
        }).error(handleError(response));
    });

  function handleError(res) {
    return function(error) {
      return res.status(500).json({error: error.message});
    }
  }
};
