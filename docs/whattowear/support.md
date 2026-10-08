---
layout: default
title: Support
---

# Support — WhatToWear

**WhatToWear** suggests what to wear from local weather and your preferences. There is **no account** and no in-app chat; use the contact below for help or feedback.

**Contact:** [support@owlsoftware.studio](mailto:support@owlsoftware.studio?subject=WhatToWear%20Support%20Request)  
**Privacy:** [Privacy Policy](./privacy-policy)  
**Terms:** [Apple Standard EULA](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/)

---

## Requirements

- **iOS 18** or later  
- **Network** access for fresh forecasts (cached data may show when you were last online)

---

## Frequently asked questions

### Location and “Location unavailable”

- **Allow location:** Settings → Privacy & Security → Location Services → WhatToWear → choose *While Using the App*. Approximate location is enough; the app rounds coordinates to about 1 km before requesting weather.  
- **Use a city instead:** Set a manual city from the in-app flow or profile so the app does not need GPS.  
- **Accuracy:** The app needs a valid coordinate (from GPS or your chosen city) before it can load weather.

### Weather looks wrong or hasn’t updated

- **Pull to refresh** on **Today** or leave and reopen the app.  
- **Check the network** — forecasts come from Apple Weather, with MET Norway and Open-Meteo as automatic backups if a service is slow or unavailable; alerts (where available) come from the U.S. National Weather Service API for supported regions. If no service responds, the app shows your last saved forecast and marks it as offline.  
- **Same-day cache:** If you haven’t moved far from the last place you loaded, the app may reuse today’s cached snapshot to save battery. The cache must include a full hourly forecast when available; if something looks stale, pull to refresh or switch tabs so the app can fetch again.

### The 24-hour graph on Outlook is empty

- **Outlook** loads the forecast on its own, even if you open it first. While it loads you’ll see *Loading forecast…*.  
- If it can’t load (for example, no network or location is off), tap **Try again**, or **pull to refresh** on **Today**, then return to **Outlook**.  
- If you use a **saved city** on Today, Outlook uses that same city context for the chart.

### I don’t see severe weather alerts

Alerts are shown when the **National Weather Service** reports active alerts for your coordinates. Outside the supported geographic area, the app may show **no** alert banner even if the weather is rough. The outfit suggestion still reflects general forecast data.

### Widget is empty or outdated

- Open **WhatToWear** at least once so it can fetch weather and write data the widget reads.  
- Add the widget again from the widget gallery if it seems stuck.  
- The widget uses **shared on-device data** from the main app; it does not log in to a separate service.

### Siri or Shortcuts say to open the app first

Siri and Shortcuts use your **latest forecast stored on the device**. Open the app once after install or after a long time away so data is available.

### Metric vs imperial (°C / °F)

Change units in the **You** (profile) area of the app. The setting is stored on your device.

### Smart notifications

Notifications are **local** (scheduled on your iPhone). Turn them on or off in the app’s profile/settings. If you see nothing, check **Settings → Notifications → WhatToWear** and that Focus modes are not blocking alerts.

### “Buy me a coffee”

An optional one-time tip of **$2.99** (U.S. price; the App Store shows your local price) that supports development. It doesn’t unlock anything, and there are no ads. If you already bought it, including in an earlier version of the app, and the app doesn’t show the thank-you, tap **Restore purchases** in **You**. Purchases are handled by Apple; refund requests go through [Apple’s Report a Problem](https://reportaproblem.apple.com).

### Wardrobe / saved cities

Saved cities and closet items are stored **locally** with the app. **Deleting the app** removes that data unless you restore from an iOS backup that includes it.

---

## Troubleshooting checklist

1. Update to the **latest iOS** and the **latest WhatToWear** from the App Store.
2. Confirm **Wi‑Fi or cellular** works in Safari or another app.
3. For location issues: **restart the app**, then verify **Location Services** is set to *While Using the App* for WhatToWear (Precise Location is not required).
4. **Force quit** and reopen the app once.
5. If something still fails, **email support** with: iPhone model, iOS version, app version, what you expected vs what happened, and a screenshot if possible.

---

## Feature overview (quick reference)

| Area | What it’s for |
| ---- | ------------- |
| **Today** | Today’s outfit suggestion, quick tweaks (warmer/cooler, casual/dressy), alert banner when NWS data is available |
| **Outlook** | Multi-day strip, day detail, **24-hour** hourly charts; switch between current location and saved cities |
| **You** | Defaults, saved cities, optional wardrobe list, smart notifications, units, optional “Buy me a coffee” tip |

---

## Reporting bugs or ideas

Send mail to [support@owlsoftware.studio](mailto:support@owlsoftware.studio?subject=WhatToWear%20Feedback) with a short title (e.g. “Widget not updating on iOS 18.3”) and steps to reproduce. We read feedback even though we can’t promise a reply to every message.

---

*WhatToWear is built for calm, everyday decisions—not fashion trends or shopping.*
