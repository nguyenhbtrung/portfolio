export const publicPath = (file) =>
    `${import.meta.env.BASE_URL}${file.startsWith('/') ? file.slice(1) : file}`;
