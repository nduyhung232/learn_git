// calculator.js

/**
 * Hàm cộng hai số
 * @param {number} a - Số thứ nhất
 * @param {number} b - Số thứ hai
 * @returns {number} - Tổng của a và b
 */
function additional(a, b) {
    return a + b;
}

/**
 * Hàm trừ hai số
 * @param {number} a - Số bị trừ
 * @param {number} b - Số trừ
 * @returns {number} - Hiệu của a và b
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Hàm nhân hai số
 * @param {number} a - Số thứ nhất
 * @param {number} b - Số thứ hai
 * @returns {number} - Tích của a và b
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Hàm chia hai số
 * @param {number} a - Số bị chia
 * @param {number} b - Số chia
 * @returns {number} - Thương của a và b
 */
function divide(a, b) {
    if (b === 0) {
        throw new Error("Không thể chia cho 0.");
    }
    return a / b;
}

/**
 * Hàm tính lũy thừa
 * @param {number} base - Cơ số
 * @param {number} exponent - Số mũ
 * @returns {number} - Kết quả của base^exponent
 */
function power(base, exponent) {
    return Math.pow(base, exponent);
}

/**
 * Hàm tính căn bậc hai
 * @param {number} x - Số cần tính căn bậc hai
 * @returns {number} - Căn bậc hai của x
 */
function sqrt(x) {
    if (x < 0) {
        throw new Error("Không thể tính căn bậc hai của số âm.");
    }
    return Math.sqrt(x);
}

// Xuất các hàm ra ngoài để sử dụng
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    power,
    sqrt
};