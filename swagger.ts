import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger/swagger_output.json';
const endpointsFiles = ['./src/shared/infra/http/app.ts'];

swaggerAutogen(outputFile, endpointsFiles);