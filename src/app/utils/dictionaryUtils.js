export const flatten = async (dictionary) => {
    let flattened = []
    for (const lang in dictionary) {
        for (const category in dictionary[lang]) {
            for (const key in dictionary[lang][category]) {
                flattened.push({
                    lang, category, key, value: dictionary[lang][category][key]
                })
            }
        }
    }
    return flattened
}