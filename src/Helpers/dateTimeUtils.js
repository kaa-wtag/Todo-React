export const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
};

export const calculateCompletedDays = (createdAt) => {
    const today = new Date();
    const createdDate = new Date(createdAt);

    const difference = today - createdDate;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    return days === 0 ? "1 day" : `${days + 1} days`;
};
