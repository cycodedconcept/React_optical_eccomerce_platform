import Dexie from 'dexie'

export const db = new Dexie('Opticals');

 db.version(2).stores({
    carts: '++id, brand, image_url, owner_id, product_name, product_price, stock'
});