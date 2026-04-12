# Privacy Policy — WhatToWear

**Last updated:** April 12, 2026  

This policy describes how the **WhatToWear** iOS app (“the App”) handles information. WhatToWear suggests clothing layers based on weather and your preferences. The routine is designed to stay **on your device** as much as possible; the App does not require you to create an account.

**Developer:** Owl Studios (bundle identifier `com.owlstudios.whattowear`).  

If you have questions about this policy, contact us at [support@owlsoftware.studio](mailto:support@owlsoftware.studio?subject=WhatToWear%20Privacy%20Inquiry).

---

## Summary

- The App **does not sell your personal information** and, in the current version, **does not include third-party advertising or analytics SDKs** as described in the open-source project.
- **Location** is optional. You can use a **manually chosen city** instead of device location.
- **Weather** is fetched from **Open-Meteo** using approximate coordinates. **Severe weather alerts** (where supported) may be fetched from the **U.S. National Weather Service (NWS)** API using coordinates.
- **Profile, saved cities, wardrobe notes, cached weather, and widget data** are stored **locally** on your iPhone (and shared with the App’s **widget** via Apple’s **App Group** container). This data is **not** transmitted to Owl Studios’ servers (the App does not operate its own backend for these features in the described build).

---

## Information the App Uses

### 1. Location

- **Device location (optional):** If you allow it, the App uses **Apple’s Core Location** to read your approximate position **while you use the App** and, if you grant broader access, for **background** updates described in the system permission prompts (e.g. refreshing suggestions when conditions change).
- **Manual location:** You may instead enter or pick a **city**. The App uses **Apple’s geocoding** (`CLGeocoder`) to turn a place name into coordinates on your device; Apple’s handling of that request is governed by **Apple’s privacy policy**.
- **What leaves the device:** Only **latitude and longitude** (and parameters derived from them) are sent to **weather providers** over the internet so they can return a forecast for that area. The App does **not** send your name or Apple ID to Owl Studios through these requests.

You can change or revoke location access anytime in **Settings → Privacy & Security → Location Services** on your device.

### 2. Weather and alerts (network)

- **Open-Meteo** — Forecast data is requested from Open-Meteo’s public API (`api.open-meteo.com`). Requests include **coordinates** (and standard technical data such as your device’s IP address as seen by Open-Meteo’s servers). See Open-Meteo’s terms and privacy documentation for how they handle API traffic.
- **National Weather Service (NWS)** — For locations in supported regions (e.g. United States / nearby areas the App treats as in-range), the App may request **active alerts** from `api.weather.gov`. Requests include **coordinates** and a **User-Agent** string identifying the client as the WhatToWear app. NWS operates under U.S. government policies; refer to their site for details.

The App does **not** use these services to build a personal profile of you on Owl Studios’ systems.

### 3. Information stored on your device

Stored locally (and, where noted, in the **App Group** shared with the widget extension):

- **User profile preferences** — e.g. warmth bias, formality, rain tolerance, units (metric/imperial), notification and onboarding flags, optional manual city name and coordinates.
- **Saved cities** — names and coordinates you save for quick switching.
- **Wardrobe / closet items** — labels and tags you add to describe your own items.
- **Weather cache** — a recent **weather snapshot** and related data to reduce network use and support offline-style display.
- **Widget payload** — short text and numbers the **Home Screen widget** can show (e.g. headline, layer summary, temperature-related fields, weather code).

**SwiftData** and **UserDefaults** (including the App Group) are used for this storage. Deleting the App removes its sandbox data unless iOS retains backups according to your device settings.

### 4. Notifications

If you turn on **smart notifications**, the App schedules **local notifications** on your device when conditions change in a meaningful way. These are **not** sent from Owl Studios’ servers.

### 5. Siri, Shortcuts, and the widget

- **App Intents / Shortcuts** may read **on-device** data (such as your latest cached suggestion) to respond to shortcuts or Siri, subject to Apple’s system permissions.
- The **widget** reads from the **App Group** container to display the latest suggestion; it does not get a separate login or cloud account from Owl Studios.

### 6. Data we do not intentionally collect

In the project as published: **no sign-in**, **no user content uploaded to Owl Studios**, and **no integrated third-party ad or analytics SDKs**. If that changes in a future version, we will update this policy and, where required, the App’s disclosures in the App Store.

---

## Legal bases (EEA / UK users)

If applicable law requires a “legal basis,” we rely on:

- **Performance of the service** — providing weather-based suggestions you asked for.
- **Consent** — where the system asks for **location** or **notifications**, you control those choices.
- **Legitimate interests** — keeping minimal technical logs on **your device** (e.g. cache) to make the App reliable and efficient, where not overridden by your choices.

---

## Your choices and rights

Depending on where you live, you may have rights to **access**, **correct**, **delete**, or **export** personal data, or to **object** to certain processing. Much of WhatToWear’s data is **only on your device** — you can delete it by **deleting the App** or clearing items inside the App. For privacy requests to Owl Studios, contact [support@owlsoftware.studio](mailto:support@owlsoftware.studio?subject=WhatToWear%20Privacy%20Request).

**California (CCPA/CPRA):** We do not **sell** or **share** personal information for cross-context behavioral advertising as part of the described App behavior. California residents may have additional rights under state law; use the contact above to exercise them.

---

## Children

The App is not directed at children under 13 (or the minimum age in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided information, contact [support@owlsoftware.studio](mailto:support@owlsoftware.studio?subject=WhatToWear%20Children%27s%20Privacy) and we will help remove it where feasible.

---

## International users

Weather requests may be processed on servers operated by **Open-Meteo** and, when used, **U.S. government** (NWS) infrastructure. If you use the App from outside those regions, your information may be transferred as needed to provide the forecast you requested.

---

## Security

We use reasonable practices consistent with an on-device app: data stays in Apple’s **sandbox** and **App Group** unless you explicitly use features that contact third-party APIs (weather/geocoding as described). No method of transmission or storage is 100% secure.

---

## Changes

We may update this policy when the App changes. The **“Last updated”** date at the top will change, and for material changes we will take reasonable steps to notify you (e.g. in-app notice or App Store description). Continued use after an update means you accept the revised policy.

---

## Third-party references

- [Apple Privacy Policy](https://www.apple.com/privacy/)
- [Open-Meteo](https://open-meteo.com/) — API documentation and any published privacy/terms information
- [weather.gov API](https://www.weather.gov/documentation/services-web-api) — NWS API documentation and applicable government notices

---

*This document is provided for transparency. It is not legal advice; have qualified counsel review it before publication if you need a binding policy for your jurisdiction or storefront.*
