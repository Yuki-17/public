import itertools
from decimal import Decimal, getcontext

getcontext().prec = 4
maxtransize = 500000
transactionreward = 12.5
maxfee = 0
idcombi = []
nearmaxtransize = 0
db = [
    {"ID":1,"size":57247,"fee":0.0887},
    {"ID":2,"size":98732,"fee":0.1856},
    {"ID":3,"size":134928,"fee":0.2307},
    {"ID":4,"size":77275,"fee":0.1522},
    {"ID":5,"size":29240,"fee":0.0532},
    {"ID":6,"size":15440,"fee":0.0250},
    {"ID":7,"size":70820,"fee":0.1409},
    {"ID":8,"size":139603,"fee":0.2541},
    {"ID":9,"size":63718,"fee":0.1147},
    {"ID":10,"size":143807,"fee":0.2660},
    {"ID":11,"size":190457,"fee":0.2933},
    {"ID":12,"size":40572,"fee":0.0686},   
]

sizeary = []
feeary = []
combidb = []
combidb2 = []
combidb3 = []
combidb4 = []
alldb = []
alldb2 = []

for a in db:
    sizeary.append(a["size"])
    feeary.append(Decimal(a["fee"]))

for b, c in enumerate(sizeary):
    combidb.extend(itertools.combinations(sizeary, b))
    combidb3.extend(itertools.combinations(feeary, b))
print(len(combidb3))
for d in combidb:
    combidb2.append(sum(d))

for d in combidb3:
    combidb4.append(sum(d))

combidb5 = sorted(combidb2)
for d in range(len(combidb)):
    tmp = {"size": combidb2[d], "fee": combidb4[d]}
    alldb.append(tmp)

for e, f in enumerate(combidb5):
    if f > maxtransize:
        nearmaxtransize = combidb5[e-1]
        break

for g, i in enumerate(alldb):
    if i["size"] <= nearmaxtransize:
        alldb2.append(alldb[g])

allfee = []
for y, x in enumerate(alldb2):
    allfee.append(x["fee"])

allfee.sort()
ret = float(allfee[-1]) + 12.5
#print("maxfee:" + allfee[-1] + " transactionsum:")
