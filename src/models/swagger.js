let options = {
    swaggerDefinition: {
        info: {
            description: 'This is a sample server',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: 'localhost:3001',
        basePath: '/',
        produces: [
            "application/json"
        ],
        schemes: ['http', 'https'],
       
    },
    basedir: __dirname, //app absolute path
    files: ['./../routes/**/*.js'] //Path to the API handle folder
};

export default {
    options
};