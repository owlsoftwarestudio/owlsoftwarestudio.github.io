# Privacy Policy for PriceTrack

**Effective Date:** May 4, 2026

PriceTrack is designed to help you track grocery spending, scan receipts, and compare prices over time. This Privacy Policy explains what information the app collects, how it is used, and the choices you have.

## Summary

PriceTrack is local-first by default. Most of your data is stored on your device unless you choose to enable household sync or use receipt scanning features that rely on a server-side parsing service.

## Information We Collect

### Information you enter or create
- Grocery purchases, item names, prices, quantities, categories, store names, notes, and dates
- Receipt images you choose to capture or import
- Receipt text or parsed receipt data generated from a receipt scan
- Household and sync information if you opt into household sharing
- Promo or referral codes you enter

### Information collected automatically
- Basic app usage needed to operate the app
- Local app preferences stored on your device, such as onboarding completion and sync opt-in state
- Authentication/session data if you use household sync or other account-based features

### Permissions
PriceTrack may request access to:
- Camera, so you can scan receipts
- Photo library, so you can select receipt images

## How We Use Information

We use the information above to:
- Store and organize your grocery purchases
- Extract items and prices from receipt images
- Show price history and trends
- Enable optional household sync across devices
- Apply promo, referral, and feature access rules
- Improve app reliability and functionality

## AI Receipt Scanning

If you use receipt scanning, PriceTrack may send the receipt image and related receipt context to a server-side parsing service to extract store name, products, and prices. The app shows an AI consent prompt before this feature is used.

This service is handled through a Supabase Edge Function, and the OpenRouter API key is stored server-side rather than in the client app.

## Data Storage and Sync

- By default, purchase data is stored locally on your device.
- If you opt into household sync, your data may be synchronized through PowerSync and Supabase so it can be available across devices in your household.
- Sync is opt-in and can be disabled from the app.

## Sharing of Information

We do not sell your personal information.

We may share information only with service providers necessary to run the app, such as:
- Supabase for authentication, sync, and server-side functions
- PowerSync for optional household synchronization
- AI service provider and the underlying model provider used for receipt parsing, when you use AI receipt scanning

We may also disclose information if required by law or to protect our rights, users, or the app.

## Data Retention

- Local data remains on your device until you delete it or uninstall the app.
- Synced data remains available until you remove it from the app or disable sync, subject to any server-side retention needed to operate the service.
- Receipt parsing requests may be retained by the service providers involved in delivering the feature according to their own policies.

## Security

We use reasonable technical and organizational safeguards to protect information. However, no system is completely secure, and we cannot guarantee absolute security.

## Your Choices

You can control your data by:
- Declining camera or photo access
- Avoiding receipt scanning and entering purchases manually
- Disabling household sync
- Deleting app data from your device
- Removing synced household data from within the app

## Children’s Privacy

PriceTrack is not intended for children under 13, and we do not knowingly collect personal information from children under 13.

## Changes to This Policy

We may update this Privacy Policy from time to time. When we do, we will update the effective date above and post the revised version in the app repository or on the app’s support site.

## Contact Us

If you have questions about this Privacy Policy or your data, contact the app support team at:

**Email:** support@owlsoftware.studio
