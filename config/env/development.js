'use strict';

module.exports = {
  db: 'mongodb://' + (process.env.DB_PORT_27017_TCP_ADDR || 'localhost') + '/schedule-app',
  debug: true,
  logging: {
    format: 'tiny'
  },
  //  aggregate: 'whatever that is not false, because boolean false value turns aggregation off', //false
  aggregate: false,
  mongoose: {
    debug: true
  },
  app: {
    name: 'Schedule App'
  },
  facebook: {
    clientID: '1019070358143304',
    clientSecret: '',
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
  },
  twitter: {
    clientID: 'DEFAULT_CONSUMER_KEY',
    clientSecret: 'CONSUMER_SECRET',
    callbackURL: 'http://localhost:3000/auth/twitter/callback'
  },
  github: {
    clientID: 'DEFAULT_APP_ID',
    clientSecret: 'APP_SECRET',
    callbackURL: 'http://localhost:3000/auth/github/callback'
  },
  google: {
    clientID: '683393592741-do3popk94jkb31rn4bpad8ubfs8f5obu.apps.googleusercontent.com',
    clientSecret: '',
    callbackURL: 'http://localhost:3000/auth/google/callback'
  },
  linkedin: {
    clientID: 'DEFAULT_API_KEY',
    clientSecret: 'SECRET_KEY',
    callbackURL: 'http://localhost:3000/auth/linkedin/callback'
  },
  emailFrom: 'schedule-app@info.com', // sender address like ABC <abc@example.com>
  mailer: {
    service: 'gmail', // Gmail, SMTP
    auth: {
      user: '',
      pass: ''
    }
  }
};
