# Map of Recent Bird Siting in DC
This is a simple map of recent bird sitings in DC.  It is a small project to teach myself how to connect not only an API to a Slippy map but my two passions, birding and mapping.

# curl request to get the json
```
curl --request GET   --url 'https://ebird.org/ws2.0/data/obs/US-DC/recent'   --header 'X-eBirdApiToken: dav3luvqimbb' -o dc.json
```