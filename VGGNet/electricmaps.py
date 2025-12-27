import asyncio
from aioelectricitymaps import ElectricityMaps, ZoneRequest # Python 3.11
# from aioelectricitymaps import ElectricityMaps  # Python 3.8
import pandas as pd

class electric:
    def __init__(self, token):
        self.token = token
        
    async def get_carbon_intensity(self,region):
        async with ElectricityMaps(token=self.token) as em:
            # response = await em.latest_carbon_intensity_by_country_code(region) # Docker Python Version issue, Python 3.8 기준 
            # return float(response.data.carbon_intensity)
            response = await em.latest_carbon_intensity(ZoneRequest(region)) # Python 3.11 
            return float(response.carbon_intensity)
            # print(f"Carbon intensity in {region_full}: {response.carbon_intensity} gCO2eq/kWh")
            # print(response.timestamp)            
            # IE : Ireland 
        