const { ImageKit } = require("@imagekit/nodejs");

const imageKitClient = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATEKEY,
});

async function uploadFile(file) {
  const result = await imageKitClient.files.upload({
    file,
    fileName: "_video" + Date.now(),
    folder: "reels/food",
  });
  return result;
}

module.exports = { uploadFile };
