export const checkValidData = (email, password, fullName) => {
    // Validate Email: Must be in lowercase
    const isEmailValid = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email);

    // Validate Password:
    // - Must be entirely lowercase
    // - Minimum 8 characters
    // - At least one lowercase letter
    // - At least one digit
    // - At least one special character (@, $, !, %, *, ?, &)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[@$!%*?&])[a-z\d@$!%*?&]{8,}$/.test(password);

    // Validate Full Name:
    // - At least two words
    // - Allows letters, spaces, and common name punctuation (like hyphens and apostrophes)
    const isFullNameValid = /^[a-zA-Z]+([\s'-][a-zA-Z]+)*$/.test(fullName);

    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password is not valid";
    if (!isFullNameValid) return "Full Name is not valid";

    return null;
};
