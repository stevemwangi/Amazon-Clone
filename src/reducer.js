export const initialState = {
    basket: [
        // {
        //     id: '1234',
        //     title: 'New Book',
        //     price: 98.99,
        //     rating: 5,
        //     image: 'https://m.media-amazon.com/images/I/518DfIBtGzL._SY346_.jpg'
        // }, 
        // {
        //     id: '12345',
        //     title: 'New Book 2',
        //     price: 108.99,
        //     rating: 4,
        //     image: 'https://m.media-amazon.com/images/I/518DfIBtGzL._SY346_.jpg'
        // },
        // {
        //     id: '12346',
        //     title: 'New Book 3',
        //     price: 29.99,
        //     rating: 3,
        //     image: 'https://m.media-amazon.com/images/I/518DfIBtGzL._SY346_.jpg'
        // }
    ],
    user: null,
}; 

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);
 
const reducer = (state, action) => {
    console.log(action); 
    switch(action.type) {        
        case 'ADD_TO_BASKET':
            console.log(action) ;             
            return {
                ...state, 
                basket: [...state.basket, action.item]  
            };
        case 'REMOVE_FROM_BASKET':  

            let newBasket = [...state.basket];            
            const index = state.basket.findIndex(
                basketItem => basketItem.id === action.id
                );

            if(index >=0 ) {
              // It exists proceed to remove it 
                newBasket.splice(index, 1);
            } else {
                console.warn('Cannot remove product (id: ${action.id}) as it does not exist in basket')
            }
            return {
                ...state,
                basket: newBasket
            }; 
        default:
            return state;
    }
}

export default reducer; 