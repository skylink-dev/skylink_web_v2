// /home/skydev/projects/skylink_web_v2/src/load_assets_to_redis.js

import fs from "fs";
import path from "path";
import { createClient } from "redis";

const redis = createClient();
redis.on("error", (err) => console.error("❌ Redis Error:", err));

const ASSET_DIR = "/home/skydev/projects/skylink_web_v2/public/assets";
const ASSET_LIST_KEY = "nextjs:assets:list";
const ASSET_KEY_PREFIX = "nextjs:asset:";

async function loadAssets() {
  await redis.connect();

  console.log("🔍 Reading files from:", ASSET_DIR);
  const files = fs
    .readdirSync(ASSET_DIR)
    .filter((f) => fs.lstatSync(path.join(ASSET_DIR, f)).isFile());

  const pipeline = redis.multi();
  const fileList = [];

  for (const file of files) {
    const filePath = path.join(ASSET_DIR, file);
    const content = fs.readFileSync(filePath, "utf-8"); // use 'base64' for images if needed
    const redisKey = `${ASSET_KEY_PREFIX}${file}`;
    pipeline.set(redisKey, content);
    fileList.push(file);
  }

  pipeline.set(ASSET_LIST_KEY, JSON.stringify(fileList));
  await pipeline.exec();

  console.log(`✅ Loaded ${fileList.length} assets into Redis`);
  await redis.disconnect();
}

loadAssets().catch((err) => {
  console.error("❌ Error loading assets:", err);
  process.exit(1);
});
