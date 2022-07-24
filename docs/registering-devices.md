---
title: Register a Device with Mudmap
---

import useBaseUrl from '@docusaurus/useBaseUrl';
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);


:::tip Haven't added any devices yet?
This follows from the previous step, [Adding Devices to Mudmap][adding], if 
you have not added a device yet, be sure to read over that page first.
:::

:::info Demo Video
There is also a video demonstration, [here](/videos/demo-overview.md)
:::

Now that we've got a device showing up in the table of *Inactive Devices* 
we have three options; Activate, Update or Delete. 

A firewall that has been added but not yet made a connection with Mudmap 
will show up in the table like the image below.

<div style={{textAlign: 'center'}}>
<img  alt="Register your Mudmap account" src={useBaseUrl
('img/register-devices-docs-connections.png')} />
</div>

:::tip Hostname or IP
Devices can be accessed with either a static IP or a routable Hostname via 
[DDNS](https://en.wikipedia.org/wiki/Dynamic_DNS) or a 
[CNAME](https://www.cloudflare.com/en-au/learning/dns/dns-records/dns-cname-record/) entry to a URL you control.
:::
## Activation

To start the activation process is simple just click the <Highlight color="#4f46e5">activate</Highlight> button 

Next, you will be prompted to enter the devices `root` password. The pop up will look something 
like this. 


:::info this password is not saved in the database
Mudmap does not store this password or log this information. A great number of things have been
done to optimise the application so that your root password is not stored.
:::

<div style={{textAlign: 'center'}}>
<img  alt="Register your Mudmap account" src={useBaseUrl
('img/root-pass-activate.png')} />
</div>


After entering the password. Mudmap will send a request to the firewall with the information 
you've previously supplied. This ensures that if any information is incorrect, or the device is 
unreachable, remediation steps can be conducted prior to the installation being attempted.

### Authenticated Success

If Mudmap can authenticate with the firewall the user will be prompted to install the API on to 
the device. 

Installation will start as soon as the user accepts the prompt. This may take a few minutes. 
Once the installation is complete a new alert with be displayed. 

The device will now disappear from the table as it is no longer *inactive* and will appear on 
the dashboard home page ready to be viewed in detail.

### Authentication Failed

If Mudmap cannot authenticate with the device it will send an alert notifying the user.

This could mean several things:

- Password is incorrect,
- Device details are incorrect,
- Network issues between Mudmap and the device,
- SSH is not enabled on the firewall
- A firewall rule is blocking the connection

In almost all instances, remediation starts with a user attempting to access the device manually.

Using the device credentials supplied to Mudmap, attempt to log in using the terminal or terminal 
emulator. If you cannot authenticate, double-check the information is correct.

A common reason for this failure is the firewall set to `Public Key only` for SSH connections. 
Read [preparing devices] for more details on *why* Mudmap needs Password access via SSH and when 
it can be disabled.

If all the above steps fail, please [contact me](mailto:dan@mudmap.io). 
The more information you are able to provide the easier it will be to debug 
the issue. Gathering logs from pfSense, particularly the ssh access logs, are 
invaluable, as is whether the device is virtual or physical. Issues on the 
[Github][gh-issue] page are also welcomed.



## Update

To update a devices details click the <Highlight color="#d97706">update</Highlight> button 

Entering wrong information, such as an incorrect IP address will result in a connection failure. 
This can be amended here.

Clicking <Highlight color="#d97706">update</Highlight> will pop up a new form pre-populated with the current 
information about the firewall. Simply change the required information and submit the form.

Your device will now have the updated data and if correct be ready for activation.

## Delete

Deleting the device is as simple as clicking the <Highlight color="#dc2626">delete</Highlight> button 

This will delete the device from the database table inside Mudmap. Deleted devices can be re-registered at anytime. 
A recap on how to do that can be found at [here][adding].

## The Activation Flow

Once the installation procedure starts Mudmap will step over several tasks, such as:

- Installing the API Agent
- Creating the `mudmap` user account
- Granting `mudmap` the correct permissions

The agent installation, once complete, will refresh the *pfSense* GUI and create an API link 
inside the *General* tab. You are able to view the API in better detail there.

:::danger do not alter the API settings or `mudmap` user account
Altering the API settings, deleting the API or changing the `mudmap` user account details 
**will** in errors or even complete loss of connectivity.
:::

### Payment Required

When you have exhausted your *free tier* allocation, you will no longer 
able to access your devices detailed information, or make changes until 
subscribed or under the allocation.

To make a payment, go to the [profile][dashboard-profile] page. If you are 
not yet subscribed you will see a Subscribe button. Clicking this will open 
a [Stripe] page where you will be able to enter your payment details. 
Stripe is Mudmap's payment provider and handles all payment related details.

<div style={{textAlign: 'center'}}>
<img  alt="Subscribing to Mudmap through the profile page" src={useBaseUrl
('img/dashboard-not-subscribed.png')} />
</div>


Once you are subscribed, you will have full access to Mudmap and be able to 
add as many devices are required. Mudmap is a pay as you go service meaning 
you will be charged only for the devices you're currently using. Note, 
added devices are not charged but activated devices are. 

To see your expected monthly costs, open the Stripe portal in the 
[profile][dashboard-profile] page. It will take to a Stripe hosted page 
where you can also update payment details. Read more at the [payments] page 
in this documentation website.



:::caution Version 1 only
The first device connected to Mudmap will receive a prompt for payment. [Paddle] is the payment 
provider and will be responsible for all transactions and payment related data. Read more about 
how [Paddle] works for Mudmap [here][paddle-payments]. 
:::

After payment success, Mudmap will not prompt for payment again. Read more about how Mudmap 
calculates invoicing [here][payments].

### Why Root password?

Mudmap requires `root` access rights to do the initial installation onto the target device. 
Acting as a super user, Mudmap is able to:

- Install the API Agent
- Create a `mudmap` user account
- Provision the `mudmap` service account permissions and install SSH public keys

Once complete, and the device successfully registers with Mudmap, it 
will no longer need this level of privileged access. Nor will it require password authentication 
ove SSH.

**The password will not be saved or logged at any point.**

[adding]: adding-the-device.md
[preparing devices]: preparing-devices.mdx
[paddle]: https://paddle.com?ref=mudmap.io
[paddle-mm]: stripe-payments.md
[payments]: /stripe-payments
[stripe]: https://stripe.com
[dashboard-profile]: https://dashboard.mudmap.io/dashboard/profile
[gh-issue]: https://github.com/mudmap-io/customer-support/issues
