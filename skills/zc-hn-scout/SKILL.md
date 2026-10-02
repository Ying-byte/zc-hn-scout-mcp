---
name: zc-hn-scout
description: >-
  Search jobs on news.ycombinator.com via zc-hn-scout-mcp.
  Portable MCP wrapping news.ycombinator.com public jobs feed (API/RSS) with standard search_jobs.
  Supports query, location, remoteOnly. Read-only. Works in any Agent Host that can
  mount stdio MCP (Cursor, Claude Code, Codex, Zhencheng, …).
---

# HN Who is Hiring 搜岗 · Skill

## When to use

- Target board: **news.ycombinator.com**
- Need a Host-portable MCP for this board’s public feed
- User provides role keywords and optional location / remote preference

## Tools (`zc-hn-scout-mcp`)

| Tool | Args |
|---|---|
| `search_jobs` | `query?`, `location?`, `remoteOnly?`, `postedAfter?`, `limit?` |
| `get_job` | `url` |

## Example

```json
{
  "query": "engineer",
  "location": "远程",
  "remoteOnly": true,
  "limit": 20
}
```

Returns jobs with `title`, `company`, `location`, `applyUrl`, `publishedAt`, `sourceUrl`.

## Host install

Mount the MCP package per its README (`mcp.json` / allowlist). Runtime uses the **bundled standalone scout runner** — no Zhencheng monorepo required. Any Host that can `tools/call` works.

## Limits

- Read-only; does not apply or store site cookies
- `location` is a **soft** filter on posting location text
- Still subject to site rate limits / ToS
