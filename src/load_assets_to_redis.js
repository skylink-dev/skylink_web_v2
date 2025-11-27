// /home/skydev/projects/skylink_web_v2/src/load_assets_to_redis.js

import fs from "fs";
import path from "path";
import { createClient } from "redis";

// 🧠 Create Redis client
const redis = createClient();
redis.on("error", (err) => console.error("❌ Redis Error:", err));

// 📂 Asset configuration
const ASSET_DIR = "/home/skydev/projects/skylink_web_v2/public/assets";
const ASSET_LIST_KEY = "nextjs:assets:list";
const ASSET_KEY_PREFIX = "nextjs:asset:";

async function loadAssets() {
  await redis.connect();

  console.log("🔍 Reading files from:", ASSET_DIR);

  // 📄 Get only files (skip directories)
  const files = fs.readdirSync(ASSET_DIR).filter((f) =>
    fs.lstatSync(path.join(ASSET_DIR, f)).isFile()
  );

  const pipeline = redis.multi();
  const fileList = [];

  for (const file of files) {
    const filePath = path.join(ASSET_DIR, file);

    // ⚠️ Use base64 for binary files like images, utf-8 for text
    const content = fs.readFileSync(filePath, "utf-8");

    // ❌ FIXED: Template literal needed backticks (` `)
    const redisKey = `${ASSET_KEY_PREFIX}${file}`;

    pipeline.set(redisKey, content);
    fileList.push(file);
  }

  // Store the asset list for reference
  pipeline.set(ASSET_LIST_KEY, JSON.stringify(fileList));
  await pipeline.exec();

  console.log(`✅ Loaded ${fileList.length} assets into Redis`);
  await redis.disconnect();
}

// 🏁 Execute
loadAssets().catch((err) => {
  console.error("❌ Error loading assets:", err);
  process.exit(1);
});
