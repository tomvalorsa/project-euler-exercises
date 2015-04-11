# Find the sum of all the multiples of 3 or 5 below 1000.

sum = 0

(1...1000).each do |n|
  n % 3 == 0 || n % 5 == 0 ? sum += n : sum
end

sum

# => 233168
