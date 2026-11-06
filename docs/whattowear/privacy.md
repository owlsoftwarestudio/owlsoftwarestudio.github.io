---
layout: default
title: "Privacy Policy"
---

# Privacy Policy — WhatToWear

**Last updated:** November 5, 2026  

This policy describes how the **WhatToWear** iOS app (“the App”) handles information. WhatToWear suggests clothing layers based on weather and your preferences. The App is designed to keep your data **on your device**; it does not require you to create an account.

**Developer:** Owl Studios (bundle identifier `com.owlstudios.whattowear`).  

If you have questions about this policy, contact us at **support@owlsoftware.studio**.

---

## Summary

- **No accounts.** There is no sign-in and no Owl Studios server that stores your data.
- **No ads, no tracking.** The App contains no advertising SDKs and does not track you across apps or websites. It never asks for App Tracking Transparency permission and never reads your advertising identifier (IDFA).
- **Usage analytics (you can turn them off).** The App uses **Google Analytics for Firebase** to count how the App is used (for example, that an outfit suggestion was shown or that onboarding was finished). These statistics, together with an approximate region Google derives from your IP address, are tied to a random app-instance ID, not to your name or account, and are never used for advertising or tracking. In the EEA and UK they are **off unless you turn them on**; elsewhere they are **on by default**. You can turn them on or off at any time in **You › Privacy › Share usage stats**. See section 7.
- **No data sold or shared** for advertising.
- **Approximate location only.** Before any weather, radar or alert request, your coordinates are **rounded to about 1 km** (two decimal places). Only that approximate location (or, for radar map images, the map tile you are viewing) is sent, and only to the weather providers listed below.
- **On-device storage.** Your profile, saved cities, wardrobe notes, cached weather, and widget data are stored **on your device** (iPhone or iPad, and your paired Apple Watch if you use the watch app) and are not uploaded to Owl Studios. The only usage data that leaves your device is the optional usage analytics sent to Google Analytics for Firebase (section 7).
- **Optional tip.** “Buy me a coffee” opens our **Ko-fi** page (an external website) in an in-app browser sheet. Tips unlock nothing; the App never sees your payment details.

---

## Information the App Uses

### 1. Location

- **Device location (optional):** If you allow it, the App uses Apple’s **Core Location** **while you are using the App**. The App requests **approximate (reduced-accuracy)** location by default because weather does not need your exact position.
- **Manual location:** You may instead pick a **city**. The App uses **Apple’s geocoding** service to turn a place name into coordinates. The App may also use Apple’s geocoding with your rounded (~1 km) coordinates to look up the local **time zone** for the forecast. Apple’s handling of these requests is governed by the **Apple Privacy Policy**.
- **Rounding:** Every coordinate is rounded to **two decimal places (about 1 km)** before it leaves your device, for every weather provider.
- **What leaves the device:** Only the **rounded latitude and longitude** are sent, plus standard technical data every internet request carries (such as your IP address as seen by the provider’s servers and a User-Agent string identifying the WhatToWear app). The App does **not** send your name, Apple ID, or any identifier to Owl Studios or to weather providers.

You can change or revoke location access anytime in **Settings → Privacy & Security → Location Services**.

### 2. Weather providers (network)

To get a forecast, the App contacts these providers **in this order**, moving to the next one only if the previous one fails or doesn’t respond:

1. **Apple WeatherKit** (Apple Weather) — governed by the [Apple Privacy Policy](https://www.apple.com/privacy/). Data sources are listed on [Apple’s Weather legal attribution page](https://weatherkit.apple.com/legal-attribution.html).
2. **MET Norway** (Norwegian Meteorological Institute, `api.met.no`) — [terms of service](https://api.met.no/doc/TermsOfService).
3. **Open-Meteo** (`api.open-meteo.com`) — [terms and privacy](https://open-meteo.com/en/terms).

In addition, for locations in or near the United States, the App asks the **U.S. National Weather Service** (`api.weather.gov`) for **active severe-weather alerts**, using the same rounded coordinates.

**Radar map.** When you open the radar, the App also contacts:

4. **RainViewer** (`api.rainviewer.com` and its tile servers) — [rainviewer.com](https://www.rainviewer.com/) — for live radar images. The App downloads RainViewer’s list of available radar frames (a request with no location), then map image tiles for the area shown on the radar map (identified only by zoom level and tile row/column, at zoom level 7 or coarser, so each tile covers a large area — roughly 200–300 km across, depending on latitude — rather than your position). To check whether radar coverage exists where you are, the App downloads the single zoom-7 coverage tile that contains your location; it sends only that tile’s row/column, never your coordinates.
5. **Open-Meteo** (`api.open-meteo.com`) for the radar’s forecast layer (rain, wind and thunderstorm signals for the next hours), using a grid of points about 40 km apart around your location, each rounded to two decimal places.
6. **Environment and Climate Change Canada (ECCC)** — MSC GeoMet (`api.weather.gc.ca`), [ECCC data licence](https://eccc-msc.github.io/open-data/licence/readme_en/) — for **official weather alerts**, only when your location falls inside a rough box around Canada. The request contains a ~1 km box around your rounded coordinates.
7. **Deutscher Wetterdienst (DWD)** — DWD GeoServer (`maps.dwd.de`), [dwd.de](https://www.dwd.de/) — for **official weather warnings**, only when your location falls inside a rough box around Germany. The request contains your rounded coordinates.

The radar also asks the **U.S. National Weather Service** for alert areas, as above, when your location is in its coverage area.

Each request contains only the rounded coordinates (or, for RainViewer, map tile numbers) and standard technical data described above (such as your IP address and the App’s User-Agent). The App does **not** use these services to build a profile of you.

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

### 6. Tips (“Buy me a coffee” on Ko-fi)

- “Buy me a coffee” is an **optional tip** that supports development. It does not unlock any feature, and it is shown on every App Store storefront.
- Tapping it opens **ko-fi.com/dhrumilvora** in an in-app Safari view. Anything you enter there (name, email, message, payment) is handled by **Ko-fi** and its payment processors under the [Ko-fi Privacy Policy](https://more.ko-fi.com/privacy), not by the App. The App does not learn whether you tipped.
- If you tip, Ko-fi may share with us the name, email and message you choose to provide on Ko-fi, so we can thank you. We do not combine this with any App data.

### 7. Usage analytics (Google Analytics for Firebase)

To understand which features are used and to improve the App, WhatToWear uses **Google Analytics for Firebase**, a service provided by Google LLC / Google Ireland Ltd. Google processes this data on our behalf as a **processor / service provider**.

- **What is collected:** a small set of in-app events:
  - an outfit suggestion being shown;
  - onboarding finished, and whether you chose device location or a manual city;
  - your answer to the location permission prompt (allowed / denied / restricted, precise / approximate);
  - taps on “Buy me a coffee” (opening Ko-fi). Whether or how much you tip is not known to the App.

  Firebase also records standard events such as first open, app updates and session start. It adds technical information: app version, iOS version, device model and language.
- **Approximate region from your IP address:** Google derives an **approximate location (country / region / city level)** from the IP address of each analytics request. This coarse region is stored with your analytics events and **linked to the app-instance ID**. The App does not send your GPS or rounded coordinates to Google.
- **Identifier:** Firebase uses a random **app-instance ID** generated for this installation. It is reset if you delete the App. The App does **not** collect the advertising identifier (IDFA) or the vendor identifier (IDFV), and does not use any account, name, email, or Apple ID.
- **What is not sent:** your device or rounded coordinates, city names, saved cities, wardrobe items, preferences, or any text you type.
- **No advertising or tracking:** the App uses Firebase’s analytics library without Apple’s advertising framework, never asks for App Tracking Transparency permission, and never reads the IDFA. Ad storage, ad personalization, and ad-user-data signals are turned off, and analytics data is not used for advertising, not shared with data brokers, and not used to track you across other companies’ apps or websites. Analytics data is tied to the app-instance ID, not to your name, email or Apple ID.
- **Retention:** event-level data is kept for **2 months** (Google Analytics’ default data-retention setting), then deleted automatically; aggregated, non-identifying reports may be kept longer.
- **Default setting:** whether analytics start on or off depends on your App Store country or region.
  - **EEA and UK:** **Share usage stats** is **off** until you turn it on. Nothing is collected before that.
  - **Everywhere else:** **Share usage stats** is **on** by default. You can turn it off at any time in **You › Privacy**.
  - **Unknown region:** if the App cannot yet tell your App Store region, it treats analytics as **off** until the region is known.
- **How to turn it off:** open **You › Privacy** and switch off **Share usage stats**. The App then stops sending analytics events and clears the analytics data stored on your device (including the app-instance ID). You can turn it back on at any time. Deleting the App also resets the app-instance ID.
- **Google’s handling:** see [How Google uses information from apps that use its services](https://policies.google.com/technologies/partner-sites) and the [Firebase privacy information](https://firebase.google.com/support/privacy).

### 8. What we do not collect

- No accounts, sign-in, or user content uploaded to Owl Studios.
- No advertising, advertising identifiers (IDFA), or tracking.
- No crash-reporting SDKs.
- **No sale or sharing** of personal information.

If this changes in a future version, we will update this policy and the App’s App Store privacy disclosures.

---

## Legal bases (EEA / UK users)

Where the law requires a legal basis, we rely on:

- **Performance of the service** — fetching the weather-based suggestions you asked for, using approximate location.
- **Consent** — iOS asks for your permission before the App can use **location** or **notifications**, and you can withdraw it at any time in Settings.
- **Consent (usage analytics)** — in the EEA and UK, we collect the usage statistics described in section 7 only with your consent: **Share usage stats** is off until you turn it on. You can withdraw consent at any time in **You › Privacy**, and withdrawing does not affect processing that already happened. Outside the EEA and UK, usage analytics are on by default, and you can switch them off at any time in the same place (see section 7).

---

## Your choices and rights

Depending on where you live, you may have rights to **access**, **correct**, **delete**, or **export** personal data, or to **object** to certain processing. Your WhatToWear data (profile, cities, wardrobe, cache) lives **only on your device**. You can delete it by **deleting the App** or clearing items inside the App. Usage analytics are tied only to a random app-instance ID, not to your name or account; you can switch them off in **You › Privacy › Share usage stats**, and switching them off or deleting the App resets that ID. To ask us to delete analytics data, email us; Google Analytics lets us delete data for an app-instance ID. For privacy questions, contact **support@owlsoftware.studio**.

**California (CCPA/CPRA):** We do not **sell** or **share** personal information, including for cross-context behavioral advertising. Google acts as our service provider for usage analytics.

---

## Children

The App is not directed at children under 13 (or the minimum age in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided information, contact us and we will help remove it where feasible.

---

## International users

Weather requests may be processed on servers run by the providers listed above (including Apple, MET Norway in Norway, Open-Meteo in the EU, U.S. government infrastructure for NWS alerts, Environment and Climate Change Canada in Canada for Canadian alerts, Deutscher Wetterdienst in Germany for German warnings, and RainViewer for radar images). RainViewer’s privacy policy covers servers inside and outside the EU, including Hetzner in Germany. Only rounded (~1 km) coordinates are sent (RainViewer receives only map tile numbers). Usage analytics are processed by Google, including on servers in the United States.

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
- [RainViewer](https://www.rainviewer.com/) and its [Weather Maps API](https://www.rainviewer.com/api/weather-maps-api.html)
- [Environment and Climate Change Canada open data licence](https://eccc-msc.github.io/open-data/licence/readme_en/)
- [Deutscher Wetterdienst](https://www.dwd.de/)
- [Ko-fi Privacy Policy](https://more.ko-fi.com/privacy)
- [Firebase privacy and security](https://firebase.google.com/support/privacy)
- [How Google uses information from apps that use its services](https://policies.google.com/technologies/partner-sites)
- [weather.gov API](https://www.weather.gov/documentation/services-web-api) — NWS API documentation and applicable government notices

---

*This document is provided for transparency. It is not legal advice; have qualified counsel review it before publication if you need a binding policy for your jurisdiction or storefront.*
