const getBillingCycleLabel = (option) => {
    if (option === "Half Yearly") {
        return <span className="offer">7.5%</span>;
    } else if (option === "Yearly") {
        return <span className="offer">15%</span>;
    }
    return <span className="offer hide"></span>;
};

export default getBillingCycleLabel;