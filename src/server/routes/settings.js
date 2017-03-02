
var _ = require("underscore");
var r = require('../db');

module.exports = function(apiRoutes){
  var model='settings'
  apiRoutes
    .get    ("/settings",          function(request, response){
      return r.table(model)
        .orderBy(r.desc('createdAt'))
        .coerceTo('array')
        .run(r.conn)
        .then(function (result) {
          return response.status(200).json(result);
        }).error(handleError(response));
    })
    .get    ("/settings/getItem",  function(request, response){
      var id  = request.query.id;
      var key = request.query._key;
      return r.table(model)
        .filter(
          r.row(key).eq(id)
        )
        .coerceTo('array')
        .run(r.conn)
        .then(function (result) {
          return response.status(200).json(result);
        }).error(handleError(response));
    })
    .post   ("/settings",          function(request, response){
      var objRequest = request.body;
      objRequest.createdAt = r.now();

      return r.table(model)
        .insert(objRequest)
        .run(r.conn)
        .then(function(result){
          response
            .status(200)
            .json({results: result});
        })
        .error(handleError(response));
    })

    .put    ("/settings",          function(request, response){
      var objRequest = request.body;
      return r.table(model)
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
    .delete ("/settings/:id",      function(request, response){
      var id   = request.params.id;

      return  r.table(model)
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
