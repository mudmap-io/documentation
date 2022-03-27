/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  docsSidebar: {
    "Get Started": [
      "welcome",
      "register-account",
      "preparing-devices",
      "adding-the-device",
      "registering-devices",
      "integration-troubleshooting",
      "free-tier",
      "pfsense-community-and-plus",
    ],
    "Dashboard": [
      "welcome-dashboard",
      // "registering-devices-dashboard",
      "device-list-dashboard",
      "mudmap-api-page",
    ],
    // "Devices in Detail": [
    //     "detail-view-dashboard",
    // ],
    "User Profile": [
      "user-profile-overview",
      "stripe-payments",
      "payment-legacy",
    ],
    "Architecture": [
      "security",
      //     "design",
    ],
    "Videos (demonstrations)": [
      "videos/demo-overview",
      "videos/demo-registration",
      "videos/demo-firewall-rules",
      "videos/demo-firewall-alias",
      "videos/demo-diagnostics",
    ]

  }
};
