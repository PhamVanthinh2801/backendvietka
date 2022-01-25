module.exports = ({ env }) => ({
  upload: {
    provider: "cloudinary",
    providerOptions: {
      clound_name: env(""),
      api_key: env(""),
      api_secret: env(""),
    },
  },
});
