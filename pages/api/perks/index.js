import firebase from "common/firebase";

export default (req, res) => {
  firebase.collection("perks").get();
  res.status(200).json([{ name: "Aftercare" }]);
};
