exports.default = (ms = 1000) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(true), ms);
    });
};
