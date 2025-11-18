export const isChannelOptionDisabled = (activePricing, option) => {
    return (
        (activePricing === "550+ Channels" && option === "350+ Channels") ||
        (activePricing === "650+ Channels" && ["550+ Channels", "350+ Channels"].includes(option)) ||
        (activePricing === "950+ Channels" && option !== "950+ Channels")
    );
};

export const getChannelLabel = (activePricing, option) => {
    if (isChannelOptionDisabled(activePricing, option)) {
        return "";
    }
    return activePricing === option ? "(Free)" : "(Add-on)";
};