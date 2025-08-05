function print(n,x) {
    if (n > x) {
        return
    }
    console.log(n)
    print(n+1,x)
}
print(1,15)