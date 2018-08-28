# Maps of the 8th Grade Cohort Longitudinal Study

## 60x30TX
Maps of enrollment and completion of higher education in Texas using data from the Texas Higher Education Coordinating Board's 
11-year [8th Grade Cohort Longitudinal Study](http://www.txhighereddata.org/index.cfm?objectId=F2CBE4A0-C90B-11E5-8D610050560100A9).

The overarching goal of the 2015-2030 [Texas Higher Education Strategic Plan](http://www.thecb.state.tx.us/reports/PDF/9306.PDF?CFID=57485581&CFTOKEN=60423954), 
known as *60x30TX*, is to increase the percent of the Texas population with a postsecondary credential. The rate at which Texas students successfully earn a 
college degree or certificate is a key contributor to this goal.

## Target Populations
The Strategic Plan identifies target populations that have had historically lower rates of college success. These 
groups include African American, Economically Disadvantaged, Hispanic, and Male students. The 8th Grade Cohort maps show
the distribution of these groups throughout the state as well as their enrollment and completion rates in higher education.

## Analysis
The data comes from 8th Grade Cohort Longitudinal Study excel workbooks. 
The data is processed using free, open source python libraries and merged to the Texas Education Agency service center region polygons using proprietary ArcGIS Pro python tools. The 
same results could also be accomplished without ArcGIS Pro by using the open source GDAL library. The complete code 
for processing and preparing the data can be found in [this Jupyter Notebook](https://github.com/TexasHigherEducationCoordinatingBoard/8thGradeCohortMaps/blob/master/8thGradeCohort2007DataPrep.ipynb).

The maps were created and rendered in the browser using the Mapbox GL javascript library. For questions about this project, please contact John Dinning, Program Director in Strategic Planning and Funding at the Texas Higher Education Coordinating Board: john.dinning@thecb.state.tx.us.

