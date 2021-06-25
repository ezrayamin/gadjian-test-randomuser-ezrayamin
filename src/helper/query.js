module.exports = {
    setDOB: (isoString) => {
        const dob = new Date(isoString)
        const month = dob.getMonth() + 1
        const date = dob.getDate()

        const strDate = date.toString()
        const strMonth = month.toString()
        const pad = "00"
        const fixDate = pad.substring(strDate.length) + strDate
        const fixMonth = pad.substring(strMonth.length) + strMonth

        const result = `${fixDate}-${fixMonth}`

        return result
    },
    setID: (str) => {
        if (!str) return ' -'
        const res = str.substring(0, 6)
        return res
    }
    
}