export default {
  restBackendUrl: (process.env.DOCKER) ? 'http://rest-backend:3000' : 'http://localhost:3000',
};
