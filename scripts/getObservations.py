#! usr/bin/env python

import json
import os
from ebird.api import region_observations, region_species, region_notable   

# get observations for DC 
records = region_observations('US-DC')
print(type(records))

# export it as a json
with open('./data/dc.json', 'w', encoding = "utf-8") as outfile:
    json.dump(records, outfile)

# print (records) 