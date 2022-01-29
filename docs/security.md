---
title: Mudmap Security
---

Mudmap uses several techniques in its security posture. In no particular 
order the following secure practices are used.

- Secure Shell, to communicate with devices from the user interface
- SSH key-based authentication between the server and device
- JWT RS256 security between the user interface and backend server
- Auth0 for secure communication between the user interface, as for user management
- API service accounts and unique authentication on each device
- Load balancers with static IP's to allow custom firewall rules, preventing unauthorized connections on your SSH port

More details will be released in the future. 
