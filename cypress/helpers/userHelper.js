/**
 * Generates a random email address
 * @returns {string} - A random email address
 */
export const generateRandomEmail = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    const domain = '@example.com';
    let username = '';
    for (let i = 0; i < 10; i++) {
        username += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return username + domain;
};

/**
 * Generates a random password
 * @returns {string} - A random password
 */
export const generateRandomPassword = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < 12; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
};
