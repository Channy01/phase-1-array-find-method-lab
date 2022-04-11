function superbowlWin(record) {
    const superbowl = record.find(element => element.result === "W")
    if (superbowl) {
        return superbowl.year
    }
    else { return undefined }
}