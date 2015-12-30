var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'nodejs-yo-template'
    },
    port: 3000,
    db: 'sqlite://localhost/nodejs-yo-template-development',
    storage: rootPath + '/data/nodejs-yo-template-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'nodejs-yo-template'
    },
    port: 3000,
    db: 'sqlite://localhost/nodejs-yo-template-test',
    storage: rootPath + '/data/nodejs-yo-template-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'nodejs-yo-template'
    },
    port: 3000,
    db: 'sqlite://localhost/nodejs-yo-template-production',
    storage: rootPath + 'data/nodejs-yo-template-production'
  }
};

module.exports = config[env];
