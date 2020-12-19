function getParagraph(collection, idFromElement) {
    return collection.find(({ id }) => id === idFromElement)
}

export { getParagraph }