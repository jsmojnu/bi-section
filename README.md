# bisection method to find root
## Find a real root of the equation x^3 - 2x -5 = 0

### STEP: 1
- let `epsilon = 0.01` and `c = 0`
- Calculate `f(a)` and `f(b)`

### STEP: 2
- if `f(a)*f(b) >= 0` then return `"change the value of a and b"`
- else execute the loop below

### STEP: 3
- loop: while `( b - a ) > epsilon` execute the scope
- now value of `c` is `(a+b)/2`
- if `f(c) == 0` return `c`
- and else if `f(c) is positive` then `b = c`
- else then `a = c` and check the condition again `b-a > epsilon` if condition true execute the loop again and again else condition is false return `c`
