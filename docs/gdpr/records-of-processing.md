<!--
SPDX-FileCopyrightText: 2026 Pavel Dimov <hello@dimov.xyz>
SPDX-License-Identifier: GPL-3.0-or-later
-->

# Records of processing activities (internal, Art. 30)

Not published on the site. GDPR Art. 30(5) exempts controllers with fewer
than 250 employees unless processing is regular (not occasional), likely to
risk data subjects' rights, or involves special categories of data. A
single-person blog with regular member/contact-form processing sits close
enough to that line that keeping this one-pager is good practice regardless
of whether the formal exemption applies.

**Controller**: Pavel Dimov (physical person, no registered company) —
`hello@dimov.xyz`.

| Activity | Purpose | Data subjects | Data categories | Recipients | Retention | Security measures |
|---|---|---|---|---|---|---|
| Member signup (invite-only) | Newsletter delivery, site membership | Invited members | Email, name (optional), signup date, newsletter subscription status | None outside Ghost itself (self-hosted) | Until member deletes account or requests erasure | Self-hosted Ghost + MariaDB behind Traefik/TLS; Admin API keys scoped per-integration |
| Contact form / DSAR intake | Respond to inquiries, handle GDPR requests | Anyone submitting `/get-in-touch/` | Name, email, optional Matrix ID, message text, request type | `backoffice.dimov.xyz` (own backend, same controller) | Until inquiry resolved + reasonable follow-up window; deleted on request | Same infra as above; form requires explicit consent checkbox before submission |
| Server/access logs | Security, abuse prevention (nominally) | Site visitors | IP address, request metadata | None outside the hosting infra | **Not retained at all** — verified directly: all three containers (`ghost`, `mash-traefik`, `mash-mariadb`) run with Docker `log-driver: none`, and Ghost's own file-log transport is disabled (`logging__transports:["stdout"]`, `logging__rotation__enabled:false`; `/ghost/data/logs/` is empty on disk). Traefik's `accessLog` (format `common`) writes to stdout, which Docker then discards immediately. | N/A — nothing persists to durable storage |
| Third-party embeds (YouTube, privacy-enhanced mode) | Display video content in posts | Visitors who view/play embedded videos | IP on load; cookies on play (Google-controlled, not this site's) | Google/YouTube (`youtube-nocookie.com`) | Governed by Google's own retention policy, not this site's | N/A — disclosed in `/cookie/` page, not controlled by this site |

## Open items

- **Zero log retention cuts both ways.** From a pure data-minimization
  standpoint it's the most GDPR-friendly answer possible (no IP data is
  ever persisted, so there's nothing to protect, retain a policy for, or
  accidentally over-retain). But it means `breach-response.md`'s own
  "preserve logs before they rotate out" containment step is currently
  **not actionable** — there is nothing to preserve, and no way to
  investigate after the fact what happened during a suspected breach or
  abuse incident. This is a security/observability trade-off, not a GDPR
  compliance gap — deliberately not "fixed" here (enabling logging would
  itself create a new, small retention policy to define and defend), left
  for the user to decide if/when it's worth the trade.
- No international transfers currently, except the inherent one from
  embedding Google-hosted YouTube content (Google's own SCCs/transfer
  mechanism applies, not this site's).
