<!--
SPDX-FileCopyrightText: 2026 Pavel Dimov <hello@dimov.xyz>
SPDX-License-Identifier: GPL-3.0-or-later
-->

# DSAR runbook (internal)

Not published on the site. This is the operational procedure for handling a
Data Subject Access Request (DSAR) submitted through `/get-in-touch/`, which
POSTs a `requestType` field (`general` / `access` / `delete` / `correct` /
`export` / `other`) to `backoffice.dimov.xyz/talk`. See the site's
`/privacy-policy/` page for the public-facing rights summary this runbook
fulfills.

## 1. Intake

- Requests arrive via the contact form (backend at `backoffice.dimov.xyz`) or
  directly by email to `hello@dimov.xyz` / Matrix `@pavel:dimov.xyz`.
- Log the date received — this starts the response clock.

## 2. Identity verification (before acting on any request)

There is no formal ID-document check for a site this size; verification is
proportionate to the data involved:

- If the request comes from the same email address as the member/contact
  record on file, reply asking the requester to confirm from that same
  address (or reply-to the original thread) before making any change.
- If the request email doesn't match records, or asks about another person's
  data, ask for enough detail to locate the record (e.g. approximate
  signup date, newsletter name) and do not proceed until it's plausible the
  requester is who they claim to be.
- Never confirm or deny whether an email address exists in the system to an
  unverified third party.

## 3. Response deadline

- **One month (30 calendar days)** from receipt — GDPR Art. 12(3).
- Extendable by two further months for complex/numerous requests — must
  notify the requester of the extension and reason within the first month.
- If a request will be refused (e.g. manifestly unfounded/excessive per
  Art. 12(5)), still respond within the deadline explaining why.

## 4. Fulfillment by request type

| Type | Action |
|---|---|
| **Access** | Ghost Admin → Members → find member → check profile fields, newsletter subscriptions, and label history. For contact-form submissions, check the `backoffice.dimov.xyz` `/talk` log for that email. Compile into a plain-text/email summary. |
| **Delete** | Ghost Admin → Members → delete member, or Admin API `DELETE /admin/api/members/{id}/`. Also remove/redact any matching entries in the `backoffice.dimov.xyz` contact log. Confirm deletion to the requester in writing. |
| **Correct** | Ghost Admin → Members → edit the member's name/email/labels directly. |
| **Export (portability)** | Ghost Admin → Members → export (CSV), or Admin API GET on the member record; send the requester their own data in a structured format (CSV/JSON). |
| **Other / General** | Triage manually — most "other" requests will be objection-to-processing or withdrawal-of-consent, both of which reduce to unsubscribing the member (Portal / Admin) or deleting the record per the Delete flow above. |

## 5. Record-keeping

- Keep a short internal note of: date received, request type, identity
  check performed, action taken, date completed. A plain-text log or a
  private note is sufficient at this scale — no dedicated tooling exists
  for this today.

## 6. Notes

- Member signup is currently **invite-only** (`members_signup_access:
  invite` — verified directly against the live settings), so the pool of
  people who can hold a DSAR is limited to staff-invited members plus
  anyone who has used the contact form.
- Re-verify this runbook's Ghost Admin steps if the Ghost version or
  Members UI changes significantly — written against Ghost 6.53.0.
