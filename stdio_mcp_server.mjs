#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "hn",
  boardId: "hn-official",
  domain: "news.ycombinator.com",
  npmName: "zc-hn-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
