#!/usr/bin/env python                                                     

import os  
import subprocess
import sys
import pathlib
from watchdog.observers import Observer
from watchdog.events import PatternMatchingEventHandler

PIPEDIR="/Users/minorijibiki/Desktop/arai.txt"


def get_sendpipe():
    pr = []
    row = 0
    p=pathlib.Path(PIPEDIR)
    po = p.open()
    while True:
        pr.append(po.readline())
        if pr[row]:
           row += 1
        else:
           break
    print(pr[-2])
    return(pr[-2][0:4])


ret = get_sendpipe()
print(ret)
if ret != "1091":
    sys.exit(1)
