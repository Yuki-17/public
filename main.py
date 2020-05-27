import requests
import json
import calendar


#?Ɩ????W?b?N
#c#?????????????l??0?{?Ԃ?

data = open('./sample.json',"r")
data1 = json.load(data)
data2 = len(data1["datalist"])
datalist = []
for i in range(data2):
	datalist.append((data1["datalist"][i]["a"])[0:7])

data3 = list(dict.fromkeys(datalist))

data4 = {"rev_vol1":"","rev_vol2":"","rev_vol3":"","rev_vol4":""}

data7 = {}
for i in range(len(data3)):
	data5 = {}
	data6 = calendar.monthrange(int(data3[i][0:4]),int(data3[i][5:7]))[1]
	for n in range(data6):
		data5[n+1] = data4
	data7[data3[i]] = data5


print(data7)
   





