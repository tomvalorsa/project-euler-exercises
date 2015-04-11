def fibonacci
  a = 1
  b = 2
  evens = []

  while a <= 4_000_000
    a, b = b, a + b
    evens << a if a % 2 == 0
  end
  evens.inject(:+)
end

p fibonacci

# => 4613732
