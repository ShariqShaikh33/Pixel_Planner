const storedUser = JSON.parse(localStorage.getItem("user")) || {};
export const userInitialState = {
    userId: (storedUser.userId) || " ",
    username: storedUser.username || " ",
    charsprite: "",
    exp: storedUser.exp || 0,
    level: storedUser.level || 1,
};