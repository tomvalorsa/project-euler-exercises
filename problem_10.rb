class Sieve
  def initialize(n)
    @n = n
  end

  def primes
    nums = [nil, nil, *2..@n]

    # For every number from 2 to the sqrt of the given number...
    (2..Math.sqrt(@n)).each do |i|
      # ...square it and step through its multiples up to n.
      # Set it to nil if it's in the range we're going through.
      (i**2..@n).step(i){|m| nums[m] = nil}  if nums[i]
      # 'if nums[i]' is checking if the current number in the range is present in the range of
      # 2..Math.sqrt(@n). If it is then we need to set it to nil, as it's not prime.
    end

    p nums.compact.inject(:+)
  end
end


Sieve.new(2_000_000).primes