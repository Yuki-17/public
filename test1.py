import subprocess

print("1 start")
#pr = ""
# ファイルオープン
#with open("/Users/minorijibiki/Desktop/sendpipe") as po:
#    pr = po.readlines()
#print(pr[0])

# 非同期実行
subprocess.Popen(["python3","test2.py"])

print("1 end")

