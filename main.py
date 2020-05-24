import requests
import json


#業務ロジック
#c#から取得した数値を10倍返し
def getdb():
    url = 'ここにC#のアドレスを入れる'
    response = requests.get(url)
    data = response.json()
    calten = int(data["Data1"])*10
   
    return (calten)

def gettest():
    return 1


