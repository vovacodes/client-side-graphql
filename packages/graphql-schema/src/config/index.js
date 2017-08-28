export default {
  restBackendUrl: (process.env.NODE_ENV === 'docker') ? 'http://rest-backend:3000' : 'http://localhost:3000',
};
