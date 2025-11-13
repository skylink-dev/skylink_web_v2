// Load .env file before defining apps
require("dotenv").config({ path: "/home/skydev/projects/skylink_web_v2/.env" });

module.exports = {
  apps: [
    {
      name: "skylinkapp",
      script: "npm",
      args: "run start",
      cwd: "/home/skydev/projects/skylink_web_v2",
      env: {
        NODE_ENV: "production",
        PORT: process.env.PORT || 3000,  // Specify the port here
        NEXT_PUBLIC_GOOGLE_MAPS_API_KEY:
          process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "default_map_key",
        GOOGLE_TAG_KEY:
          process.env.GOOGLE_TAG_KEY || "default_tag_key",
      },
    },
  ],
};
