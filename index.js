export default function clapback(str, emoji = "👏") {
    if (typeof str !== "string" || typeof emoji !== "string") {
        throw new TypeError("CLAPBACK👏ONLY👏WORKS👏WITH👏STRINGS!👏")
    }
    return str.trim().split(" ").join(emoji).toUpperCase().concat(emoji)
}