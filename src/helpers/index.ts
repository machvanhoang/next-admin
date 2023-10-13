
export const formatPrice = (price: number): string => {
    return price.toLocaleString('vi-VI', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
};