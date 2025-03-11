export const generateAvatar = (email: string): string => {
    const hash = md5(email.trim().toLowerCase());
    return `https://www.gravatar.com/avatar/${hash}?d=identicon`; 
}

const md5 = (str: string): string => {
    return require('crypto').createHash('md5').update(str).digest('hex');
}