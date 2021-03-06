import http from '@/netClient/config.js';

export async function fetchAllItems() {
    try {
        const response_items = await http.get('/items/');
        for (let i = 0; i < response_items.data.items.length; i++){
            const image_response = await http.get('/images/' + response_items.data.items[i].id)
            response_items.data.items[i].imageLink = image_response.data.location;
        }
        return response_items.data.items;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function fetchItemByID(itemID) {
    try {
        const response_item = await http.get('/items/certain/' + itemID);
        const item = response_item.data;
        const response_images = await http.get('/images/' + itemID +'/all')
        item.imageLinks = response_images.data.images;
        const response_offers = await http.get('/offers/' + itemID);
        item.offers = response_offers.data.offers;
        const response_wish = await http.get('/wishes/' + itemID);
        item.wish = response_wish.data.wish
        //console.log(item.imageLinks);
        return item;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function fetchItemsByWishlist(){
    try {
        const response_items = await http.get('/items/wished');
        for (let i = 0; i < response_items.data.items.length; i++){
            const image_response = await http.get('/images/' + response_items.data.items[i].id)
            response_items.data.items[i].imageLink = image_response.data.location;
        }
        return response_items.data.items;
    } catch (error) {
        console.error(error);
        throw error;
    }
}