export const diff = (db_array, file_array) => {
    const file_only = []
    const db_map = Object.fromEntries(db_array.map(f => [f.name, f.name]))
    const file_map = Object.fromEntries(file_array.map(s => [s.name, s]))
    for (const file_element in file_map) {
        if (!db_map[file_element]) {
            file_only.push(file_map[file_element])
        }
    }
    return file_only
}
export const diff_v2 = (db_array, file_array) => {
    const file_only = []
    const db_only = []
    const intersection = []
    let db_map = null, file_map = null
    db_map = Object.fromEntries(db_array.map(f => [f.name, f]))
    file_map = Object.fromEntries(file_array.map(s => [s.name, s]))
    for (const file_element in file_map) {
        if (!db_map[file_element]) {
            file_only.push(file_map[file_element])
        } else {
            // preserve the difference between file version and db version for easy compare
            intersection.push({
                db: db_map[file_element],
                file: file_map[file_element]
            })
        }
    }
    for (const db_element in db_map) {
        if (!file_map[db_element]) {
            db_only.push(db_map[db_element])
        }
    }
    return {
        file_only,
        intersection,
        db_only
    }
}