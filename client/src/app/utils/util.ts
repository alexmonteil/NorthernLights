export default function getCookie(key: string) {
    const result = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    return result ? result.pop() : "";
}

export function currencyFormat(amount: number) {
    return '$' + (amount/100).toFixed(2);
}