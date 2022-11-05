const PACKAGES = [
    {
        id: 100,
        name: 'React Headset',
        price: 350,
        image: require('../assets/company/bikinibottom.jpg'),
        description: 'A headset which I hope I can buy in general but cant afford at all.'
    },
    {
        id: 101,
        name: 'Ari Toy Car',
        price: 600,
        image: require('../assets/company/bikinibottom.jpg'),
        description: 'A toy car that aris job probabaly sells.'
    },
    {
        id: 102,
        name: 'Cupcake',
        price: 2,
        image: require('../assets/company/bikinibottom.jpg'),
        description: 'Why would someone buy a cupcake?'
    }
];
export function getPackages() {
    return PACKAGES;
}
export function getPackages(id) {
    return PACKAGES.find((packages) => (packages.id == id));
}