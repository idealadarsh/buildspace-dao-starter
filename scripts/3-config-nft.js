import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xEEE865FDFADaDc0d8c1fA7FF6cAC83701878d912",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Wall of Creator",
        description: "This NFT will give you access to CreativeDAO!",
        image: readFileSync("scripts/assets/Wall.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()