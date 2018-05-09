const mongoose = require('mongoose');

class MongoManager {
    constructor(config) {
        this._config = config;
    }
    getMongoUrl() {
        return this._config.MONGODB_URL;
    }
    connect() {
        return mongoose.connect(this.getMongoUrl());
    }
}