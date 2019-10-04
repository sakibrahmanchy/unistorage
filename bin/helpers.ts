export const formatClassName = (string) => {
    const camelized = camelize(string);
    return camelized.charAt(0).toUpperCase() + camelized.slice(1);
};

export const camelize = (string) => {
    return string.replace(/(\-\w)/g, function(m){return m[1].toUpperCase();})
};