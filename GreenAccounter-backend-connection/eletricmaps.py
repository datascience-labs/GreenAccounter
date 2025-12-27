import asyncio
from aioelectricitymaps import ElectricityMaps, ZoneRequest # Python 3.11
import pandas as pd
from datetime import datetime


class electric:
    def __init__(self, token):
        self.token = token
        
    async def get_carbon_intensity(self,region):
        async with ElectricityMaps(token=self.token) as em:
            response = await em.latest_carbon_intensity(ZoneRequest(region)) # Python 3.11 
            return float(response.carbon_intensity)
    
    async def get_carbon_intensity_history(self, region, gap_time):
        async with ElectricityMaps(token=self.token) as em:
            respose = await em.carbon_intensity_history(ZoneRequest(region))
            data = self.carbon_history(respose.to_dict(), gap_time)
            return data
    
    def carbon_history(self, carbon_dict, gap_time):
        key1 = 'history'
        data = list()
        for item in carbon_dict[key1]:
            carbons = item['carbon_intensity']
            times = datetime.fromisoformat(item['timestamp']).strftime('%H')
            times = int(times) + gap_time
            if times < 0: times = 24 + times 
            data.append([times, carbons])
        data.sort(key=lambda x:x[0])
        return data