export default {
    serverPort: process.env.PORT || 3000,
    api: {
      url: '/api/'
    },
    views: {
      engine: '.hbs',
      extension: '.hbs',
      path: './views'
    }
  };