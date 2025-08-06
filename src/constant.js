
export const INPUT_TYPES = [
    "button",
    "checkbox",
    "color",
    "date",
    "datetime-local",
    "email",
    "file",
    "hidden",
    "image",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "reset",
    "search",
    "submit",
    "tel",
    "time",
    "url",
    "week"
]

export const REGEX = {
    mobile: /^[6-9]\d{9}$/,
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    aadhaar: /^[0-9]{12}$/,
    pan: /^[A-Z]{5}[0-9]{4}[A-Z]$/,
    ifsc: /^[A-Z]{4}0[A-Z0-9]{6}$/,
    pincode:/^[0-9]\d{5}$/,
    name:/^[A-Za-z ]*$/,
    otp:/^[0-9]\d{5}$/,
    voterid: /^[A-Z]{3}[0-9]{7}$/, // e.g. ABC1234567
    passport: /^[A-PR-WYa-pr-wy][1-9]\d\s?\d{4}[1-9]$/, // simplified
    drivingLicense: /^[A-Z]{2}\d{2} \d{11}$/ // e.g. MH12 20110012345
}