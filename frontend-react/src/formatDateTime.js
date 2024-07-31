// format time to HH:MM
export const formatTime = (time) => {
    if (!time) return '';
    return time.substring(0, 5); // only get the HH:MM part
}

//format date to DD-MM-YYYY
export const formatDate = (dateString) => {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year}`;
};

