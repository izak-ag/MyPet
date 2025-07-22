export const appConfig = () => ({
  application: {
    PORT: process.env.PORT || 3001,
    environment: process.env.APP_ENVIRONMENT,
    nodeEnv: process.env.NODE_ENV,
  },
  cors: {
    corsOrigin: process.env.CORS_ORIGIN?.split(';'),
    corsMethods:
      process.env.CORS_METHODS ||
      'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
  },
});

export type AppConfigType = ReturnType<typeof appConfig>;
