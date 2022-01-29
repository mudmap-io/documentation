---
title: Register an Account
---
import useBaseUrl from '@docusaurus/useBaseUrl';

To get started with Mudmap, you first need to [register an account][register].

Once you have registered, you will be able to navigate around the dashboard and
add your devices. 

If you've already registered and want to know how to add and
activate devices head over to [Adding a Device to Mudmap][adding] and 
[Registering Devices][register-device], respectively.

## Register you account

Mudmap uses [Auth0](https://auth0.com) for authentication and user 
management. To register, fill in your email and password. Auth0 will then 
send you a verification email, so be sure to check for that in your inbox.

The registration page will look the same as below.

<div style={{textAlign: 'center'}}>
<img  alt="Register your Mudmap account" src={useBaseUrl
('img/register-auth0.png')} />
</div>

After registering, you will be able to login and get started using Mudmap. 
Password resets are handled by Auth0 so make sure you've added them to the 
safe email list in your account, or check spam for a reset, if needed.

### Can't register?
Having trouble registering? Please reach out and [get in touch][contact] so it
can be sorted out as soon as possible.


[register]: https://mudmap.io/register
[adding]: https://docs.mudmap.io/adding-the-device
[register-device]: https://docs.mudmap.io/registering-devices
[contact]: https://mudmap.io/contact
