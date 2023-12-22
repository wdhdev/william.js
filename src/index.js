module.exports = {
    cap: require("./functions/cap"),
    gravatar: require("./functions/gravatar"),
    id: require("./functions/id"),
    random: require("./functions/random"),
    util: {
        getDirs: require("./util/getDirs"),
        md5Hex: require("./util/md5Hex"),
        removeDuplicates: require("./util/removeDuplicates")
    },
    uuid: require("./functions/uuid"),
    validate: {
        discord: require("./validate/discord"),
        email: require("./validate/email")
    },
    version: require("../package.json").version
}
