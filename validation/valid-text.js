//make sure suers are putting in valid fields
const validText = str => { 
    return typeof str === "string" && str.trim().length > 0
}

module.exports = validText
