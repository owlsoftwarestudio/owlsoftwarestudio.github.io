---
layout: default
title: "Privacy Policy for Prismai"
---

# Privacy Policy for Prismai

**Effective date:** November 25, 2026  
**Last updated:** November 25, 2026

Prismai ("Prismai", "the app") is an iPhone app from Owl Software Studio ("we", "our", "us") that runs AI chat on your device. This Privacy Policy explains what information the app handles and how.

## Summary

- Your chats, files, photos and voice are processed on your iPhone. We do not operate a server that receives this content.
- Models you choose from the catalog are downloaded once from Hugging Face and then run locally on your device.
- Optional web search is off by default. If you turn it on, only the search words (usually your question) are sent to DuckDuckGo, along with ordinary request data such as your IP address.
- Optional use of Apple's on-device model is provided by Apple's Foundation Models framework and is subject to Apple's terms.
- There is no account, no advertising and no cross-app tracking in the app. We use RevenueCat for app functionality (unlocking and restoring Prismai Pro) and for analytics.
- We do not sell your personal information. We do not run a server that receives your chats, files or voice.

## Information stored on your device

The following stay in Prismai's storage on your iPhone (the app's Application Support folder), unless you delete them or uninstall the app:

- **Chats and history:** the messages in each chat, titles, personas, attached document text, and any web-search source links saved with a reply.
- **Files and photos you add:** text extracted from a PDF or text file you import, or from a photo you choose, using on-device processing (including Apple's Vision framework for photo text). The original file is not uploaded to us.
- **Voice:** dictation transcripts become the text in your message field and, if you send the message, part of the chat. Audio is transcribed on your iPhone and is not sent to a speech server. If on-device recognition is not available for the current language, the app will not transcribe and will not send your voice off the device. Spoken replies use Apple's on-device speech synthesis.
- **Settings and other app data:** preferences such as whether web search or the local API is on, shortcut names you add to My Shortcuts, review-prompt counters, and which model you last used, stored in iOS UserDefaults or local JSON files.

A home-screen widget can show recent chat titles. Those titles (which are taken from your messages) are stored on the device in the app group `group.com.owlstudios.prismai`, which is shared only with Prismai's own widget extension.

If you use a paired Apple Watch, questions and replies are sent between the Watch and your iPhone with Apple's Watch Connectivity. That traffic stays on your devices. If web search is on, a search started from the Watch is handled on the iPhone in the same way as a search in the iPhone app.

## Permissions

Prismai may ask for:

- **Microphone and Speech Recognition:** only for dictation, and only with on-device recognition, as described above.
- **Photo library / photo picker:** only when you choose a photo so the app can read text from it. When you pick a photo, iOS gives the app the item you selected.

You can change these permissions at any time in iOS Settings.

## Model downloads

Chat models are not bundled in the app. When you download a model, the app fetches the files from [Hugging Face](https://huggingface.co/) at addresses such as `https://huggingface.co/…/resolve/main/…`. After a successful download, inference runs locally through llama.cpp. You can delete a downloaded model in the app.

Like any download over the internet, Hugging Face's servers can see ordinary request data, including your IP address, the time of the request, and which model file you requested. Model files are marked so they are excluded from iCloud Backup. Hugging Face's handling of that request data is governed by [Hugging Face's Privacy Policy](https://huggingface.co/privacy). The current app does not ask you to sign in to Hugging Face and does not store a Hugging Face access token.

## Optional web search

Web search is **off by default**. You can turn it on in Settings, or request a search for a single message with the globe control.

When a search runs, Prismai sends the search words — typically your question, not the rest of the chat, and not your files or voice — to DuckDuckGo at `https://api.duckduckgo.com/` and `https://html.duckduckgo.com/html/`. The request also includes ordinary HTTP data: your IP address, a Prismai user-agent string, and an English language preference. The app does not then fetch the result pages themselves. Answers in the app can show source links; if you open a link, it opens in your browser and that site's own practices apply.

DuckDuckGo handles those requests under [DuckDuckGo's Privacy Policy](https://duckduckgo.com/privacy). We do not receive a copy of your searches.

## Apple Intelligence and Apple's on-device model

On a compatible iPhone running iOS 26 or later, you can choose Apple's on-device model if Apple Intelligence is turned on in iOS Settings. Prismai then sends the prompt through Apple's Foundation Models framework (`LanguageModelSession`). Apple documents that framework as running on the device. Other Apple Intelligence features may use Apple's Private Cloud Compute. In every case, that processing is provided by Apple and is subject to [Apple's Privacy Policy](https://www.apple.com/legal/privacy/) and Apple's Apple Intelligence terms. We do not receive those prompts or replies.

## Purchases

Prismai can be downloaded for free. All chat models are free. Prismai Pro, a one-time purchase, unlocks only hands-free voice and the local API. Payment is processed by Apple through the App Store and is charged to your Apple ID. We do not receive or store your payment details, name or Apple ID.

To verify and restore Prismai Pro, [RevenueCat, Inc.](https://www.revenuecat.com/) acts as our service provider and processor. RevenueCat receives your purchase history from Apple, an anonymous app user ID that RevenueCat generates, and basic device and app information such as the OS version, app version and country or storefront. This information is used for app functionality (unlocking Prismai Pro and restoring purchases) and for analytics. We do not create an account for you, and we do not send RevenueCat your name, email address or an advertising identifier. We do not set subscriber attributes on your RevenueCat customer profile, and we do not use RevenueCat for tracking or advertising. RevenueCat handles this information under [RevenueCat's Privacy Policy](https://www.revenuecat.com/privacy).

The app may also ask Apple to show the system review prompt. That request goes to Apple, not to us. A tip paid on Ko-fi, described below, does not unlock Pro and is not processed by us.

## Optional tips (Ko-fi)

Settings includes a "Buy me a coffee" link. If you tap it, an in-app browser opens [Ko-fi](https://ko-fi.com/dhrumilvora). Anything you do on that page, including payment, is between you and Ko-fi under [Ko-fi's Privacy Policy](https://ko-fi.com/privacy). Prismai does not see your payment details. Opening the link is optional.

## Shortcuts and the local API

**Shortcuts.** Prismai provides App Intents so you can ask a question, start a new chat or open a persona from Siri or the Shortcuts app. Processing runs on your iPhone. You can also keep a list of your own shortcut names in the app and ask Prismai to run them. The app asks before running a shortcut unless you choose "Always allow." Shortcut names and that preference stay on your device. When a shortcut runs, the Shortcuts app handles it under Apple's terms.

**Local API.** The local API is **off by default**. If you turn it on, Prismai starts a small HTTP server that listens only on the iPhone itself (localhost, port 8080) while the app is in the foreground, and stops it when you leave the app or turn the setting off. Other devices cannot reach this server. Only apps running on the same iPhone can send requests to it. **There is no password or other access control**, so any app on the device could use the API while it is on. Prompts and replies on this path are not sent to us. Turn it off when you are done.

## Sharing and export

Chats leave the app only when you choose to export or share them, for example with the iOS share sheet. They go only where you send them, and that destination's own privacy practices apply.

## iCloud Backup

Downloaded model files are excluded from iCloud Backup. Chats and personas are left in the backup on purpose, so they can be restored if you back up your iPhone with iCloud or a computer. If iCloud Backup is on, those items may be stored in your iCloud account under [Apple's Privacy Policy](https://www.apple.com/legal/privacy/). This is your device backup, not a Prismai account or a server we run. The app does not use iCloud Drive or CloudKit to sync chats.

## Network use

Prismai does not send your chats, files or voice to any server we run. The connections the app may make are:

- **Hugging Face,** when you download a model, as described above.
- **DuckDuckGo,** if you use optional web search, as described above.
- **Apple,** for App Store purchases and restore, the optional review prompt, Apple Intelligence / Foundation Models if you choose that model, and other iOS platform services (including Watch Connectivity and the Shortcuts app).
- **RevenueCat,** to verify and restore Prismai Pro and for purchase analytics, as described above.
- **Ko-fi,** only if you open the optional tip link.
- **Links you open,** such as search sources or this policy, which open in a browser or in-app browser.

## Third-party services

The third-party libraries bundled in the app are used to run features on your device: llama.cpp for local chat models, and Swifter for the optional local API. They do not add analytics, advertising, crash-reporting or tracking.

We do not include Firebase, Sentry, TelemetryDeck or other analytics, crash-reporting or advertising SDKs. RevenueCat is included to verify and restore purchases and for purchase analytics, as described above.

Third-party services the app may contact (Hugging Face, DuckDuckGo, Apple, RevenueCat, and Ko-fi if you open it) have their own privacy practices and terms.

## Data storage and retention

- App data is stored on your device until you delete it in the app or uninstall the app.
- Uninstalling the app deletes its local app data, including chats, personas and downloaded models.
- We do not require an account to use the app.
- We do not sell personal information.

## Children's privacy

Prismai is not directed to children under 13, and we do not knowingly collect personal information from children under 13. The app does not collect personal information from anyone on a server we run.

## Your choices

- You can delete individual chats or uninstall the app to remove local app data.
- You can turn web search and the local API off in Settings. Both stay off until you turn them on.
- You can delete downloaded models in the app.
- You can change microphone, speech and Photos permissions in iOS Settings.
- You can leave Apple Intelligence off, or not select Apple's model, if you do not want to use it.

## Changes to this policy

We may update this Privacy Policy from time to time. When we do, we will post the revised policy on this page and update the effective date above.

## Contact

For privacy questions, contact us at:

[support@owlsoftware.studio](mailto:support@owlsoftware.studio)

© 2026 Owl Software Studio. All rights reserved.
