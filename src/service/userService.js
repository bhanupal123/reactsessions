class UserService {
    constructor() {
        this.users = {};
        this.lastId = 1;
    }

    add(userInfo) {
        userInfo = {...userInfo};
        userInfo.id = this.lastId++;
        this.users[userInfo.id] = userInfo;
        return userInfo;
    }

    delete(userId) {
        if(!this.users[userId])  {
            throw ({
                err: "NoEntryFound",
                message: "No record found for id : " +userId 
            });
        }else {
            delete this.users[userId];
        }        
    }

    update(userInfo) {
        if(!this.users[userInfo.id])  {
            throw ({
                err: "NoEntryFound",
                message: "No record found for id : " +userInfo.id 
            });
        }else {
            this.users[userInfo.id] = {...userInfo};
        }
        return userInfo;
    }

    getUsers() {
        return Object.values(this.users);
    }
}

export default UserService;
