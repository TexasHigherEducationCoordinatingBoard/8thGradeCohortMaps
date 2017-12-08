
# coding: utf-8

# # This program prepares the selected data from 2006 8th Grade Cohort Longitudinal Study for mapping
# 
# ### Begin by downloading the Cohort Workbook from [the THECB website](http://www.txhighereddata.org/index.cfm?objectId=F2CBE4A0-C90B-11E5-8D610050560100A9). 
# 
# The selected data focuses on target populations from the Texas Higher Education Strategic Plan. The target populations examined here are African American students, particularly African american male students, and Hispanic students.
# 
# ### Target populations are examined by TEA Region which is how the data is presented by the THECB cohort workbook
# 

# In[1]:


import pandas as pd
import requests
import zipfile
import arcpy
import io
import os
pd.options.display.max_rows = 10
os.chdir('C:\\Users\John\Dropbox\MapDev\Eighth Grade Cohort Map')
os.getcwd()


# ### Start by downloading the 2006 cohort workbook from the THECB website
# 
# The cohort workbooks are available at: http://www.txhighereddata.org/index.cfm?objectId=F2CBE4A0-C90B-11E5-8D610050560100A9
# 
# Save the workbook in 'Data\CohortWorkbook2006.xlsx'

# ### First get the Gender by Ethnicity Data
# 
# This next part gets us:
# 
# African American males (a 60x30 target population) by TEA region.
# 

# In[2]:


xl = pd.read_excel('Data\CohortWorkbook2006.xlsx', sheetname='TEA by Gender by Ethnicity', header=None, index_col=None, skiprows=6)

#Keep the columns I need
xl2=xl[[0,1,2,3,4,17,18,21,22]]

#Drop the rows I don't need
GenEth=xl2[:160]
GenEth.columns=['TEAReg','RegName','Gender','Eth', 'CohoN', 'nEnr', 'pEnr', 'nComp', 'pComp']

#Make Dataset just of African American Males (60x30TX target popultation)
AAmales=GenEth.loc[(GenEth['Eth']=='African American') & (GenEth['Gender']=='Male')].copy() #copy to avoid chained indexing
AAmales=AAmales.drop(['Gender','Eth'], axis=1) #Keep the columns I need
AAmales.columns=['TEAReg','RegName','AAmCoho', 'AAmnEnr', 'AAmpEnr', 'AAmnComp', 'AAmpComp']
AAmales['AAmpEnr']=100*AAmales['AAmpEnr']
AAmales['AAmpComp']=100*AAmales['AAmpComp']

print(AAmales)
#AAmales.to_csv('AAmales.csv', index=False)


# This next part gets us:
# 
# African American and Hispanic totals by region. For this, we'll collapse on ethicity to remove gender.
# 

# In[3]:


#Keep Hispanic and African American counts, collapse to remove gender, and then recalculate percents 
EthCounts=GenEth.drop(GenEth.columns[[2,6,8]], axis=1) #axis=0 for rows, axis=1 for columns
#AA_Hisp=EthCounts.loc[EthCounts['Eth'].isin(['African American', 'Hispanic'])]
#AA_Hisp_collapsed=AA_Hisp.groupby(["TEAReg", "RegName","Eth"]).sum()


#Make African American Group
AAtemp=EthCounts.loc[EthCounts['Eth']=='African American'].copy() #copy to avoid chained indexing
AA=AAtemp.groupby(["TEAReg", "RegName","Eth"], as_index=False).sum()
AA['AApEnr']=100*AA['nEnr']/AA['CohoN']
AA['AApComp']=100*AA['nComp']/AA['CohoN']
AA=AA.drop(['Eth'], axis=1) #Keep the columns I need
AA.columns=['TEAReg','RegName','AACoho', 'AAnEnr','AAnComp','AApEnr','AApComp']

#Make Hispanic Group
Hisptemp=EthCounts.loc[EthCounts['Eth']=='Hispanic'].copy() #copy to avoid chained indexing
Hisp=Hisptemp.groupby(["TEAReg", "RegName","Eth"], as_index=False).sum()
Hisp['HispEnr']=100*Hisp['nEnr']/Hisp['CohoN']
Hisp['HispComp']=100*Hisp['nComp']/Hisp['CohoN']
Hisp=Hisp.drop(['Eth'], axis=1) #Keep the columns I need
Hisp.columns=['TEAReg','RegName','HisCoho', 'HisnEnr','HisnComp','HispEnr','HispComp']


#print(AA_Hisp_collapsed)
print(AA)
print(Hisp)
#AA.to_csv('AA.csv')
#Hisp.to_csv('Hisp.csv')


# This next part gets us:
# 
# All Males by TEA Region for comparison

# In[4]:


#Get total male counts by region, collape on gender, counts only.
GenCounts=GenEth.drop(GenEth.columns[[3,6,8]], axis=1) #axis=0 for rows, axis=1 for columns
Allmalestemp=GenCounts.loc[GenCounts['Gender']=='Male'].copy() #copy to avoid chained indexing
Allmales=Allmalestemp.groupby(["TEAReg", "RegName"], as_index=False).sum().copy()
Allmales['AllmpEnr']=100*Allmales['nEnr']/Allmales['CohoN']
Allmales['AApComp']=100*Allmales['nComp']/Allmales['CohoN']
Allmales.columns=['TEAReg', 'RegName','TotmCoho', 'TotmnEnr','TotmnComp','TotmpEnr','TotmpComp']


print(Allmales)
#Allmales.to_csv('Allmales.csv')


# In[5]:


xlEcon = pd.read_excel('Data\CohortWorkbook2006.xlsx', sheetname='TEA Region by Eco', header=None, index_col=None, skiprows=6)

#Keep the columns I need
xlEcon2=xlEcon[[0,1,2,3,16,17,20,21]]
EconTemp=xlEcon2.loc[xlEcon2[2]=='Economically Disadvantaged'].copy()

EconTemp2=EconTemp.drop([2], axis=1).copy()

#Get Region Totals and drop the rows I don't need
Econ=EconTemp2[:20].copy()
Econ.columns=['TEAReg','RegName','EcoCoho', 'EconEnr', 'EcopEnr', 'EconComp', 'EcopComp']

Econ['EcopEnr']=100*Econ['EcopEnr']
Econ['EcopComp']=100*Econ['EcopComp']
print(Econ)


# # Here we get overall totals by region for comparison
# 
#  1. All students for comparison to Ethnicity breakouts
# 

# In[6]:


xl = pd.read_excel('Data\CohortWorkbook2006.xlsx', sheetname='Summary', header=None, index_col=None, skiprows=16)

#Keep the columns I need
xl2=xl[[0,1,2,15,16,19,20]]

#Get Region Totals and drop the rows I don't need
RegTotals=xl2[:20].copy()
RegTotals.columns=['TEAReg','RegName','TotCoho', 'TotnEnr', 'TotpEnr', 'TotnComp', 'TotpComp']

RegTotals['TotpEnr']=100*RegTotals['TotpEnr']
RegTotals['TotpComp']=100*RegTotals['TotpComp']

print(RegTotals)
#RegTotals.to_csv('RegTotals.csv', index=False)


# ### Now get statewide Cohort totals for Hispanics and African Americans

# In[7]:


xl = pd.read_excel('Data\CohortWorkbook2006.xlsx', sheetname='Summary', header=None, index_col=None, skiprows=38)

#Keep the columns I need
xl2=xl[[0,1,2]]

#Get Region Totals and drop the rows I don't need
StatewideCohortTotals=xl2[:8]
StatewideCohortTotals.columns=['Gender','Eth','Cohort']

#Get African American and Hispanic Statewide Cohort Totals
StatewideCohortTotals=StatewideCohortTotals.groupby(["Eth"]).sum().copy()

print(StatewideCohortTotals)
#StatewideCohortTotals.to_csv('StatewideCohortTotals.csv', index=False)


# ### Now get statewide Cohort totals for Econ Disadvantage

# In[8]:


xl = pd.read_excel('Data\CohortWorkbook2006.xlsx', sheetname='Summary', header=None, index_col=None, skiprows=52)

#Keep the columns I need
xl2=xl[[0,1,2]]

#Get Region Totals and drop the rows I don't need
StatewideCohortEcon=xl2[:4]
StatewideCohortEcon.columns=['Eco','Eth','Cohort']

#Get African American and Hispanic Statewide Cohort Totals
StatewideCohortEcon=StatewideCohortEcon.groupby(["Eco"]).sum().copy()

print(StatewideCohortEcon)


# ### And now merge the tables

# In[9]:


All=pd.merge(AA, AAmales,on=['TEAReg', 'RegName']).copy()
All=pd.merge(All, Hisp,on=['TEAReg', 'RegName']).copy()
All=pd.merge(All, Allmales,on=['TEAReg', 'RegName']).copy()
All=pd.merge(All, RegTotals,on=['TEAReg', 'RegName']).copy()
All=pd.merge(All, Econ,on=['TEAReg', 'RegName']).copy()


#Calculate Hisp, AA, and Econ % of statewide cohort for each TEA Region
All['AATXCoho']=StatewideCohortTotals.loc['African American','Cohort']
All['HisTXCoho']=StatewideCohortTotals.loc['Hispanic','Cohort']
All['EcoTXCoho']=StatewideCohortEcon.loc['Economically Disadvantaged','Cohort']
All['AApTXCoho']=100*All['AACoho']/All['AATXCoho']
All['HisTXCoho']=100*All['HisCoho']/All['HisTXCoho']
All['EcoTXCoho']=100*All['EcoCoho']/All['EcoTXCoho']


#Calculate % point differences for AA/Hisp/AAmales/Eco enrollmnet and completion rates from total
All['AAEnrpDi']=All['AApEnr']-All['TotpEnr']
All['HisEnrpDi']=All['HispEnr']-All['TotpEnr']
All['AAmEnrpDi']=All['AAmpEnr']-All['TotmpEnr']
All['EcoEnrpDi']=All['EcopEnr']-All['TotpEnr']
All['AAComppDi']=All['AApComp']-All['TotpComp']
All['HisComppDi']=All['HispComp']-All['TotpComp']
All['AAmComppDi']=All['AAmpComp']-All['TotmpComp']
All['EcoComppDi']=All['EcopComp']-All['TotpComp']

#Drop unneeded variables
Final=All.drop(['HisTXCoho','AATXCoho', 'EcoTXCoho'], axis=1).copy() #Keep the columns I need


#Make perc of total for AA, Hisp, Eco, and AA_males
Final['AApCoho']=100*All['AACoho']/All['TotCoho']
Final['HispCoho']=100*All['HisCoho']/All['TotCoho']
Final['AAmpCoho']=100*All['AAmCoho']/All['TotmCoho']
Final['EcopCoho']=100*All['EcoCoho']/All['TotCoho']

#set percentages to have just one decimal place
Processed = Final.round({'AApEnr': 0, 'AApComp': 0, 'AAmpEnr': 0, 'AAmpComp': 0, 
             'HispEnr': 0, 'HispComp': 0, 'TotmpEnr': 0, 'TotmpComp': 0, 
             'TotpEnr': 0, 'TotpComp': 0, 'AApTXCoho': 0, 'AAEnrpDi': 0, 
             'HisEnrpDi': 0, 'AAmEnrpDi': 0, 'AAComppDi': 0, 'HisComppDi': 
             0, 'AAmComppDi': 0, 'AApCoho': 0, 'HispCoho': 0, 'AAmpCoho': 0,
             'EcopEnr': 0, 'EcopComp': 0, 'EcoEnrpDi': 0, 'EcoComppDi': 0, 'EcopCohoi': 0, 'EcopCoho':0}).copy()

Processed.to_csv('ProcessedData.csv', index=False)
print(Processed)


# # The rest of the code prepares the shapefiles for mapping.
# 
# ### We'll need:
#     
# * Polygons for TEA Regions [available from TEA](http://schoolsdata2-tea-texas.opendata.arcgis.com)
# * Centroids (points) for TEA Regions
#     
#     

# In[10]:


#get TEARegion file and unzip
URL=requests.get('https://opendata.arcgis.com/datasets/12142ff8beec4a1797334c9c41ba7b18_0.zip')
zippedRegions=zipfile.ZipFile(io.BytesIO(URL.content))
zippedRegions.extractall('Data/rawESC_Regions')

#Delete unnecessary fields
arcpy.DeleteField_management("Data/rawESC_Regions/ESC_Regions.shp", 
                             ["FID_1", "OBJECTID", "CITY", 'REGION', 'ORG_E_ID', 'WEBSITE', 'SHAPE_Leng'])


# In[11]:


# Create a File Geodatabase and copy shapefile data
# uncomment the following line the first time code is run
arcpy.CreateFileGDB_management('Data',"Cohort.gdb")

arcpy.FeatureClassToGeodatabase_conversion('Data/rawESC_Regions/ESC_Regions.shp', 'Data/Cohort.gdb')

#List fields in dataset
fields = arcpy.ListFields('Data/Cohort.gdb/ESC_Regions')

for field in fields:
    print("{0} is a type of {1} with a length of {2}"
          .format(field.name, field.type, field.length))


# In[12]:


#Add Cohort data to GeoDataBase
arcpy.TableToTable_conversion('ProcessedData.csv', 'Data/Cohort.gdb', 'CohortData')

#Merge Cohort Data to TEA Region Polygons
arcpy.JoinField_management('Data/Cohort.gdb/ESC_Regions', 'OBJECTID','Data/Cohort.gdb/CohortData', 'TEAReg')


# In[13]:


os.makedirs('Data/FinalShapefiles')
#Export merged TEARegions with Cohort data to shapefile
arcpy.FeatureClassToShapefile_conversion ('Data/Cohort.gdb/ESC_Regions', 'Data/FinalShapefiles')


# ### Now make the centrids for the TEA Regions
# 
# (Requires the advanced license)

# In[14]:


#  Set local variables
inFeatures = "Data/Cohort.gdb/ESC_Regions"
outFeatureClass = "Data/Cohort.gdb/ESC_Points"

# Use FeatureToPoint function to find a point inside each park
arcpy.FeatureToPoint_management(inFeatures, outFeatureClass)


# In[15]:


#Export merged TEARegion Points to shapefile
arcpy.FeatureClassToShapefile_conversion ('Data/Cohort.gdb/ESC_Points', 'Data/FinalShapefiles')


# ### Now, go to linux and use the GDAL to convert shapefiles to geojson. Then use the Tippecanoe tool to make .MBtiles
# 
# I used the following commands:
# 
# * ogr2ogr -f GeoJSON Cohort2006TEARegionPolys.json Data/FinalShapefiles/ESC_Regions.shp -progress
# * ogr2ogr -f GeoJSON Cohort2006TEARegionPoints.json Data/FinalShapefiles/ESC_Points.shp -progress
# * tippecanoe --output=Cohort2006TEARegionData.mbtiles Cohort2006TEARegionPoints.json Cohort2006TEARegionPolys.json -r1 --drop-fraction-as-needed  --simplification=9 --maximum-zoom=15 --minimum-zoom=3 --exclude=OBJECTID_1 --detect-shared-borders
