import java.util.Arrays;

public class PrimeNumberValidator {

    // Function to check if a single number is prime
    public static boolean isPrime(int number) {
        if (number < 1 || number > 1000000) {
            return false; // Numbers out of range are not prime
        }
        if (number == 1) {
            return false; // 1 is not a prime number
        }
        for (int i = 2; i * i <= number; i++) {
            if (number % i == 0) {
                return false; // Not a prime number
            }
        }
        return true; // Prime number
    }

    // Function to handle batch inputs
    public static boolean[] isPrimeBatch(int[] numbers) {
        boolean[] results = new boolean[numbers.length];
        for (int i = 0; i < numbers.length; i++) {
            results[i] = isPrime(numbers[i]); // Call isPrime for each number
        }
        return results;
    }

    public static void main(String[] args) {
        // Test case batch
        int[] testInputs = {1, 2, 17, 9973, 1000000, 104729}; // Valid inputs within the range

        // Process batch inputs
        boolean[] results = isPrimeBatch(testInputs);

        // Output results
        System.out.println("Input Numbers: " + Arrays.toString(testInputs));
        System.out.println("Prime Results: " + Arrays.toString(results));
        // Explanation: 1 is not prime, 2 is prime, 17 is prime, 9973 is prime, 1000000 is not prime
        // 1000000 is not prime because it is divisible by 2, 4, 5, 8, 10, etc.
        // 104729 is prime, demonstrating the function's efficiency for large prime numbers
        // The function is tested for numbers up to 10^6
    }
}
