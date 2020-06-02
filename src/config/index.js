export default {
    serverPort: process.env.PORT || 3000,
    api: {
      url: '/api/',
      bdurl: 'mongodb+srv://root:root@devdb-wxxue.mongodb.net/test?retryWrites=true&w=majority',
      bdoptions: {
        useNewUrlParser:true ,
        useUnifiedTopology: true
      },
    },
    views: {
      engine: '.hbs',
      extension: '.hbs',
      path: './views'
    }
  };