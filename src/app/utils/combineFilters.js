export const combineFilters = (filter = null, status) => {
    let combined_filters = filter

    if (status === 'deleted') {
        combined_filters = {
            $and: [
                filter,
                {
                    deleted: true
                }
            ]
        }
    } else if (status === 'active') {
        combined_filters = {
            $and: [
                filter,
                {
                    deleted: false
                }
            ]
        }
    }

    return combined_filters
}