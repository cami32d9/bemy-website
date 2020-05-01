export function createCollectionData(rawCollections) {
    console.log("rawCollections", rawCollections);

    const collections = [];

    rawCollections.forEach(collection => {
            const thisCollection = createCollectionInfo(collection);

            thisCollection.products = getCollectionProducts(collection);

            collections.push(thisCollection);
        }
    );
    return collections;
}

export function createCollectionInfo(collection) {
    return {
        collectionTitle: collection.node.description,
        collectionImage: collection.node.image.originalSrc,
        collectionType: collection.node.title.split(']').shift().replace('[', '')
    }
}

export function getCollectionProducts(collection) {
    const products = [];

    collection.node.products.edges.forEach(product => {
        products.push(product.node.id);
    });

    return products;

}