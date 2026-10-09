---
layout: default
title: "Privacy Policy"
---

# Privacy Policy — WhatToWear?

**Last updated:** October 8, 2026

This policy describes how the **WhatToWear?** iOS app (“the App”) handles information. WhatToWear? suggests clothing layers based on weather and your preferences. The App is designed to keep your data **on your device**; it does not require you to create an account.

**Developer:** Owl Studios (bundle identifier `com.owlstudios.whattowear`).

If you have questions about this policy, contact us at [support@owlsoftware.studio](mailto:support@owlsoftware.studio).

---

## Summary

- **No accounts.** There is no sign-in and no Owl Studios server that stores your data.
- **No ads, no tracking.** The App contains no advertising SDKs, no third-party analytics SDKs, and does not track you across apps or websites. It never asks for App Tracking Transparency permission.
- **No data sold or shared** for advertising.
- **Approximate location only.** Before any weather request, your coordinates are **rounded to about 1 km** (two decimal places). Only that approximate location is sent, and only to the weather providers listed below.
- **On-device storage.** Your profile, saved cities, wardrobe notes, cached weather, and widget data are stored **only on your iPhone**.
- **Optional tip.** “Buy me a coffee” is an optional one-time **$2.99** in-app purchase processed by **Apple (StoreKit)**. It unlocks nothing; the App never sees your payment details.

---

## Information the App Uses

### 1. Location

- **Device location (optional):** If you allow it, the App uses Apple’s **Core Location** **while you are using the App**. The App requests **approximate (reduced-accuracy)** location by default because weather does not need your exact position.
- **Manual location:** You may instead pick a **city**. The App uses **Apple’s geocoding** service to turn a place name into coordinates. The App may also use Apple’s geocoding with your rounded (~1 km) coordinates to look up the local **time zone** for the forecast. Apple’s handling of these requests is governed by the **Apple Privacy Policy**.
- **Rounding:** Every coordinate is rounded to **two decimal places (about 1 km)** before it leaves your device, for every weather provider.
- **What leaves the device:** Only the **rounded latitude and longitude** are sent, plus standard technical data every internet request carries (such as your IP address as seen by the provider’s servers and a User-Agent string identifying the WhatToWear? app). The App does **not** send your name, Apple ID, or any identifier to Owl Studios or to weather providers.

You can change or revoke location access anytime in **Settings → Privacy & Security → Location Services**.

### 2. Weather providers (network)

To get a forecast, the App contacts these providers **in this order**, moving to the next one only if the previous one fails or doesn’t respond:

1. **Apple WeatherKit** (Apple Weather) — governed by the [Apple Privacy Policy](https://www.apple.com/privacy/). Data sources are listed on [Apple’s Weather legal attribution page](https://weatherkit.apple.com/legal-attribution.html).
2. **MET Norway** (Norwegian Meteorological Institute, `api.met.no`) — [terms of service](https://api.met.no/doc/TermsOfService).
3. **Open-Meteo** (`api.open-meteo.com`) — [terms and privacy](https://open-meteo.com/en/terms).

In addition, for locations in or near the United States, the App asks the **U.S. National Weather Service** (`api.weather.gov`) for **active severe-weather alerts**, using the same rounded coordinates.

Each request contains only the rounded coordinates and standard technical data described above. The App does **not** use these services to build a profile of you.

### 3. Information stored on your device

Stored locally (and, where noted, in the **App Group** shared with the App’s widget):

- **Profile preferences** — e.g. warmth bias, formality, rain tolerance, units (metric/imperial), notification and onboarding flags, optional manual city name and coordinates.
- **Saved cities** — names and coordinates you save for quick switching.
- **Wardrobe / closet items** — labels and tags you add for your own items.
- **Weather cache** — recent forecasts (current conditions, daily summary, and hourly samples), keyed by rounded location, so the App can show the last forecast when you are offline or providers are unavailable. The cache is **stored on your device only** and is never uploaded.
- **Widget payload** — short text and numbers the **Home Screen widget** shows.

**SwiftData**, **UserDefaults** (including the App Group), and the App’s **Caches** folder are used for this storage. Deleting the App removes this data (except what iOS keeps in your own device backups).

### 4. Notifications

If you turn on **smart notifications**, the App schedules **local notifications** on your device when conditions change in a meaningful way. They are not sent from any Owl Studios server.

### 5. Siri, Shortcuts, and the widget

- **App Intents / Shortcuts** read **on-device** data (such as your latest cached suggestion) to respond to Siri or Shortcuts.
- The **widget** reads from the **App Group** container on your device. It has no separate account or network service.

### 6. In-app purchase (“Buy me a coffee”)

- “Buy me a coffee” is an **optional one-time tip of $2.99** (U.S. price; the App Store shows the price for your country or region) that supports development. It does not unlock any feature.
- Purchases and restores are processed entirely by **Apple via StoreKit**. Owl Studios never receives your payment card details or Apple ID. The App only learns from StoreKit whether the purchase was completed, so it can show a thank-you message.

### 7. What we do not collect

- No accounts, sign-in, or user content uploaded to Owl Studios.
- No advertising, advertising identifiers, or tracking.
- No third-party analytics or crash-reporting SDKs.
- **No sale or sharing** of personal information.

If this changes in a future version, we will update this policy and the App’s App Store privacy disclosures.

---

## Legal bases (EEA / UK users)

Where the law requires a legal basis, we rely on:

- **Performance of the service** — fetching the weather-based suggestions you asked for, using approximate location.
- **Consent** — iOS asks for your permission before the App can use **location** or **notifications**, and you can withdraw it at any time in Settings.

---

## Your choices and rights

Depending on where you live, you may have rights to **access**, **correct**, **delete**, or **export** personal data, or to **object** to certain processing. WhatToWear?’s data lives **only on your device**. You can delete it by **deleting the App** or clearing items inside the App. For privacy questions, contact [support@owlsoftware.studio](mailto:support@owlsoftware.studio). For app help, see [Support](./support).

**California (CCPA/CPRA):** We do not **sell** or **share** personal information, including for cross-context behavioral advertising.

---

## Children

The App is not directed at children under 13 (or the minimum age in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided information, contact us and we will help remove it where feasible.

---

## International users

Weather requests may be processed on servers run by the providers listed above (including Apple, MET Norway in Norway, Open-Meteo in the EU, and U.S. government infrastructure for NWS alerts). Only rounded (~1 km) coordinates are sent.

---

## Security

Your data stays in Apple’s **app sandbox** and **App Group** on your device. Network requests to weather providers use **HTTPS**. No method of transmission or storage is 100% secure.

---

## Changes

We may update this policy when the App changes. The **“Last updated”** date at the top will change, and for material changes we will take reasonable steps to notify you (e.g. in-app notice or App Store description). Continued use after an update means you accept the revised policy.

---

## Third-party references

- [Apple Privacy Policy](https://www.apple.com/privacy/)
- [Apple Weather data sources and legal attribution](https://weatherkit.apple.com/legal-attribution.html)
- [Apple Standard EULA (Terms of Use)](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/)
- [MET Norway API terms of service](https://api.met.no/doc/TermsOfService)
- [Open-Meteo terms](https://open-meteo.com/en/terms)
- [weather.gov API](https://www.weather.gov/documentation/services-web-api) — NWS API documentation and applicable government notices

---

*This document is provided for transparency. It is not legal advice; have qualified counsel review it before publication if you need a binding policy for your jurisdiction or storefront.*
