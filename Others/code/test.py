def factors(b):
    for i in range(1, b + 1):
        if b % i != 0:
            print(i)


b = 12
b = float(b)

if b > 0 and b.is_integer():
    factors(int(b))
else:
    print("please give a positive integer")
