// Requiring @types/serverless in your project package.json
import type { Serverless } from 'serverless/aws';

const serverlessConfiguration: Serverless = {
    frameworkVersion: '2',
    provider: {
        name: 'aws',
        stage: 'dev',
        runtime: 'nodejs14.x',
    },
    service: 'users',
    functions: {
        usersCreate: {
            handler: 'src/handler.hello',
            events: [
                {
                    http: {
                        path: '/hello',
                        method: 'get'
                    }
                },
            ],
        },
    },
    plugins: [
        'serverless-plugin-typescript',
        'serverless-offline'
    ]
};

module.exports = serverlessConfiguration;
