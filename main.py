import requests
import json


#�Ɩ����W�b�N
#c#����擾�������l��10�{�Ԃ�
def getdb():
    url = '������C#�̃A�h���X������'
    response = requests.get(url)
    data = response.json()
    calten = int(data["Data1"])*10
   
    return (calten)

def gettest():
    return 1


