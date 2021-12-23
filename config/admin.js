module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '45f10d4ff18f6d7fcd7f5152a62e72e4'),
  },
});
