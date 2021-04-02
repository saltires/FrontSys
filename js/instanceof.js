function instanceof2 (child, parent) {
    let left = Object.getPrototypeOf(child)
    const right = parent?.prototype

    while (left !== null) {
        if (left === right) {
            return true
        }
        left = Object.getPrototypeOf(left)
    }

    return false
}