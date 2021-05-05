
export function isNameValid(name: string): boolean {
    const firstChar = name.charAt(0)
    return (name.length !== 0) && (firstChar.toUpperCase() === firstChar)
}

export function isEmailValid(email: string): boolean {
    return email.length !== 0 && email.includes('@')
}

export function isPhoneNumberValid(phoneNumber: string): boolean {

    // Remove spaces from number
    const noSpaceNumber = phoneNumber.replace(/\s/g, '');

    return noSpaceNumber.charAt(0) === '+' && noSpaceNumber.length === 13
}

export function isPasswordValid(password: string): boolean {
    return password.length >= 5;
}