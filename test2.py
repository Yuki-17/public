import subprocess
import time

print("2 start")
pr = ""
flg = 0
#itime.sleep(3)
# ファイルオープン
while flg == 0:
    row = -2
    try:
        with open("/Users/minorijibiki/Desktop/sendpipe") as po:
            pr = po.readlines()
    except:
        pass
    while True:
        try:
            if pr[row][0:4] == "1022":
                flg = 1
                break
            else:
                row -= 1
        # 全部読み切った
        except:
            break
print("2 end")

