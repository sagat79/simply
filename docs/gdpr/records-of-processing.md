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
| Server/access logs | Security, abuse prevention | Site visitors | IP address, request metadata | None outside the hosting infra | Rotated per standard log-rotation (not GDPR-specific retention policy currently defined — flag for review) | Traefik/reverse-proxy standard logging |
| Third-party embeds (YouTube, privacy-enhanced mode) | Display video content in posts | Visitors who view/play embedded videos | IP on load; cookies on play (Google-controlled, not this site's) | Google/YouTube (`youtube-nocookie.com`) | Governed by Google's own retention policy, not this site's | N/A — disclosed in `/cookie/` page, not controlled by this site |

## Open items

- Server/access-log retention period isn't formally defined — worth
  picking an explicit number (e.g. 30/90 days) next time infra is touched,
  rather than leaving it as "whatever the reverse proxy defaults to."
- No international transfers currently, except the inherent one from
  embedding Google-hosted YouTube content (Google's own SCCs/transfer
  mechanism applies, not this site's).
