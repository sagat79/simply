<!--
SPDX-FileCopyrightText: 2026 Pavel Dimov <hello@dimov.xyz>
SPDX-License-Identifier: GPL-3.0-or-later
-->

# Data breach response note (internal)

Not published on the site. Short internal reference for what to do if a
personal-data breach is suspected or confirmed on blog-test.dimov.xyz or its
backing infrastructure (Ghost, `mash-mariadb`, `backoffice.dimov.xyz`).

## What counts as a breach

Any confirmed or suspected unauthorized access, disclosure, loss, or
alteration of personal data — e.g. member records, contact-form
submissions, or database credentials being exposed. Compare against the
scope in `records-of-processing.md`.

## Immediate steps

1. **Contain**: rotate any credential that may be exposed (DB password,
   Admin API keys), take the affected system offline if actively being
   exploited, preserve logs before they rotate out.
2. **Assess**: what data, how many people, what risk to them (identity
   theft, financial loss, etc.) — this determines whether notification is
   required.
3. **Notify the supervisory authority within 72 hours** of becoming aware
   of the breach, *if* it's likely to result in a risk to individuals'
   rights and freedoms (GDPR Art. 33). For this site, that's Bulgaria's
   **Комисия за защита на личните данни (CPDP)** — https://www.cpdp.bg.
   If the 72-hour window is missed, the notification must explain the
   delay.
4. **Notify affected individuals directly** (Art. 34) if the breach is
   likely to result in a **high** risk to them — plain-language
   description of what happened and what they should do (e.g. change a
   password), sent to the email on file.
5. **Record it** regardless of whether notification was required — Art. 33
   applies even to breaches assessed as low-risk; keep a short note of what
   happened, why notification was/wasn't needed, and what was done.

## Who does this

Single-person operation (Pavel Dimov, data controller) — no separate DPO or
security team to loop in. If a developer/contractor is involved in the
breach or its fix, they should be told only what's needed to fix it, not
given unnecessary access to the incident details.
