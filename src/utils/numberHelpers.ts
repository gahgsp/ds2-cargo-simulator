export const formatAmount = (amount: number): string => {
    return amount.toFixed(1)
}

export const degreesToRadians = (deg: number): number => {
    return deg * (Math.PI / 180) 
}