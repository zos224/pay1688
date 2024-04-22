export const convertViewTime = (time: string | Date) => {
    try {
        const date = new Date(time);

        return `${("00" + date.getDate()).slice(-2)}-${("00" + (date.getMonth() + 1)).slice(-2)
            }-${date.getFullYear()}`;
    } catch (error) {
        return `NOT VIEW TIME`;
    }
};

export const convertViewDate = (time: string | Date) => {
    try {
        const date = new Date(time);

        return `${("00" + date.getDate()).slice(-2)} Tháng ${("00" + (date.getMonth() + 1)).slice(-2)
            }, ${date.getFullYear()} ${("00" + date.getHours()).slice(-2)}:${("00" + date.getMinutes()).slice(-2)}`;
    } catch (error) {
        return `NOT VIEW TIME`;
    }
};

export const convertViewTimeLabel = (time: string | Date) => {
    try {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const date = new Date(
            new Date(time).toLocaleString("en-US", {
                timeZone: "Asia/Ho_Chi_Minh",
            })
        );

        return `${("00" + date.getDate()).slice(-2)} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    } catch (error) {
        return `NOT VIEW TIME`;
    }
};