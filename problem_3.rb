require 'prime'

def prime_factors(n)
  prime_factors = []
  divisor = 2
  while n > 1
    while n % divisor == 0
      n /= divisor
      prime_factors << divisor
    end
    divisor += 1
  end
  prime_factors.last
end

p prime_factors(600851475143)

# => 6857
