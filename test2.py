#!/usr/bin/python3

m = 12

a = [[] for i in range(m)]

for i in range(m):
    for j in range(i + 1):
        if (j < i):
            if (j == 0):
                a[i].append(1)
            else:
                a[i].append(a[i - 1][j] + a[i - 1][j -1])
        elif (j == i):
                a[i].append(1)

print(a)
