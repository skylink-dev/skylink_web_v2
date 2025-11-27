export const tvPackages = [
    { label: "450+ Channels", additional: 347 },
    { label: "550+ Channels", additional: 544 },
    { label: "650+ Channels", additional: 644 },
    { label: "950+ Channels", additional: 944, suffix: "(HD Channels)" },
];

export const getSelectedPackage = (label) => {
    return tvPackages.find((pkg) => pkg.label === label) || tvPackages[0];
};