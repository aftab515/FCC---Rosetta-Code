function happy(num) {
    let current_num = num;
    let current_digit, sum_squares;
    let num_seen = [];

    // Happy process
    while (current_num != 1 && num_seen[current_num] !== true) {
        // Mark as seen
        num_seen[current_num] = true;

        // Sum squares of digits
        sum_squares = 0;
        while (current_num > 0) {
            current_digit = current_num % 10 ;
            sum_squares += current_digit * current_digit ;
            current_num = (current_num  - current_digit) / 10 ;
        }

        // Use sum as new number
        current_num = sum_squares;
    }

    return current_num == 1;
}