// Generated by CoffeeScript 1.8.0
module.exports = function(server) {
  server.route({
    method: 'GET',
    path: '/',
    handler: {
      view: {
        template: 'index',
        context: {}
      }
    }
  });
  server.route({
    method: 'GET',
    path: '/customize',
    handler: {
      view: {
        template: 'customize',
        context: {}
      }
    }
  });
  server.route({
    method: 'GET',
    path: '/favicon.ico',
    handler: function(request, reply) {
      return reply.file("./favicon.ico");
    }
  });
  server.route({
    method: 'GET',
    path: '/images/{file*}',
    handler: {
      directory: {
        path: 'public/images',
        listing: true
      }
    }
  });
  server.route({
    method: 'GET',
    path: '/css/{file*}',
    handler: {
      directory: {
        path: 'public/css',
        listing: true
      }
    }
  });
  server.route({
    method: 'GET',
    path: '/scripts/{file*}',
    handler: {
      directory: {
        path: 'public/scripts',
        listing: true
      }
    }
  });
  return server.route({
    method: 'GET',
    path: '/{file*}',
    handler: {
      directory: {
        path: 'public',
        listing: true
      }
    }
  });
};