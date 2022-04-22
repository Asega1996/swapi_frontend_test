// Text transform to uppercase
export const uppercase = (message: string) => {
    return message.toUpperCase()
}

// Text transform to tittlecase
const GET_EACH_WORD_BEFORE_BLANKSPACE = /\w\S*/g

export const titlecase = (message: string) => {
    return message.replace(GET_EACH_WORD_BEFORE_BLANKSPACE, (message) => {
        return message.charAt(0).toUpperCase() + message.substr(1).toLowerCase()
    })
}
