let users = [];

function addUser(user) {
    const findUser = users.find(userItem => userItem.mEmail === user.mEmail);
    if (!findUser) {
        users = [...users, user];
    }
    return users;
}

const removeUser = (mSocketID) => {
    let i = 0;
    for (i = 0; i < users.length; i++) {
        if (users[i].mSocketID === mSocketID) {
            users.splice(i, 1);
        }
    }
    return users;
}

const allUsers = () => {
    return users;
}

module.exports = {
    addUser,
    allUsers,
    removeUser,
}