module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1c7468710109fe9d4bc57132dd017af6'),
  },
});
