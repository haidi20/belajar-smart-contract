// https://eth-rinkeby.alchemyapi.io/v2/Etw8YEEM8qUKQjPNWXR8dZrnxf1ZixE8

require("@nomiclabs/hardhat-waffle");

module.exports = {
    solidity: '0.8.0',
    networks: {
        rinkeby: {
            url: "https://eth-rinkeby.alchemyapi.io/v2/Etw8YEEM8qUKQjPNWXR8dZrnxf1ZixE8",
            // private key metamask
            accounts: ["351e8a740364be3259c194a7fdf1d5a3b91bce9fc62fc688e7fb1b03a77e05f6"]
        }
    }
}