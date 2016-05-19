module.exports = {
  database: 'mongodb://root:root@ds025469.mlab.com:25469/ecommerce',
  port: 3000,
  secretKey: "Larry$",

  facebook: {
    clientID: process.env.FACEBOOK_ID || '',
    clientSecret: process.env.FACEBOOK_SECRET || '',
    profileFields: ['emails', 'displayName'],
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
  }
}
