const {
    REQUEST_LATEST_BLOCK,
    RECEIVE_LATEST_BLOCK,
    REQUEST_LATEST_BLOCKCHAIN,
    RECEIVE_LATEST_BLOCKCHAIN,
    HANDSHAKE
} = require('./message-types');

class Messages {
    // 请求最新区块
    static getLatestBlock() {
        return {
            type: REQUEST_LATEST_BLOCK
        };
    }

    // 返回最新区块
    static sendLatestBlock(block) {
        return {
            type: RECEIVE_LATEST_BLOCK,
            data: block
        };
    }

    // 请求整条链
    static getBlockchain() {
        return {
            type: REQUEST_LATEST_BLOCKCHAIN
        };
    }

    // 返回整条链
    static sendBlockchain(blockchain) {
        return {
            type: RECEIVE_LATEST_BLOCKCHAIN,
            data: blockchain
        };
    }

    // 握手消息
    static sendHandshake(port) {
        return {
            type: HANDSHAKE,
            data: { port }
        };
    }
}

module.exports = Messages;