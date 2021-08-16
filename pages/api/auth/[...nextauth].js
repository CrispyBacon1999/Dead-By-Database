import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";

import config from "../../../config";

import firebase from "firebase/app";
import "firebase/firestore";

const firestore = (
  firebase.apps[0] ?? firebase.initializeApp(config)
).firestore();

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Twitch({
      clientId: process.env.TWITCH_CLIENT_ID,
      clientSecret: process.env.TWITCH_CLIENT_SECRET,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  adapter: FirebaseAdapter(firestore),
});
