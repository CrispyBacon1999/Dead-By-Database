// ./initAuth.js
import { init } from "next-firebase-auth";

const initAuth = () => {
  init({
    authPageURL: "/auth",
    appPageURL: "/",
    loginAPIEndpoint: "/api/login", // required
    logoutAPIEndpoint: "/api/logout", // required
    // firebaseAuthEmulatorHost: "localhost:9099",
    // Required in most cases.
    firebaseAdminInitConfig: {
      credential: {
        projectId: "dead-by-database",
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        // The private key must not be accesssible on the client side.
        privateKey: process.env.FIREBASE_ADMIN_KEY,
      },
      databaseURL: "https://my-example-app.firebaseio.com",
    },
    firebaseClientInitConfig: {
      apiKey: "AIzaSyDWEyW4aBsike77l5ftjM7qqbTNsjD2Cy8", // required
      authDomain: "dead-by-database.firebaseapp.com",
      projectId: "dead-by-database",
    },
    cookies: {
      name: "DeadByDatabase", // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [process.env.COOKIE_SECRET_CURRENT],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: "/",
      sameSite: "strict",
      secure: true, // set this to false in local (non-HTTPS) development
      signed: true,
    },
  });
};

export default initAuth;
