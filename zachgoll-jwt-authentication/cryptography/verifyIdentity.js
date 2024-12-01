const crypto = require("crypto");
const fs = require("fs");
const decrypt = require("./decrypt");

const receivedData = require("./signMessage").pacjageOfDataToSend;

const hash = crypto.createHash(receivedData.algorithm);

const publicKey = fs.readFileSync(__dirname + "/id_rsa_pub.pem", "utf8");

const decryptedMessage = decrypt.decryptWithPublicKey(
  publicKey,
  receivedData.signedAndEncryptedData
);

const decryptedMessageHex = decryptedMessage.toString();

const hashOfOriginal = hash.update(JSON.stringify(receivedData.originalData));
const hashOfOriginalHex = hash.digest("hex");

if (hashOfOriginalHex === decryptedMessageHex) {
  console.log(
    "Success! The data has not been tampered with and the sender is validated by the system."
  );
} else {
  console.log(
    "Uh, oh... Someone is trying to manipulate the data or someone else is trying to get access to your account."
  );
}
