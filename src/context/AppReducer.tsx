import { ProductItem, CartItem } from '../interfaces/interfaces';

interface AppState {
    initialProducts: ProductItem[];
    cart: CartItem[];
    period: string;
}

export type AppAction =
| { type: 'SET_PRODUCTS'; payload: ProductItem[] }
| { type: 'SET_CART'; payload: CartItem }
| { type: 'SET_CART_AMOUNT'; payload: CartItem[] }
| { type: 'SET_PERIOD'; payload: string};


export function AppReducer(state: AppState, action: AppAction) {
    switch(action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                initialProducts: action.payload
            };
        case 'SET_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        case 'SET_CART_AMOUNT':
            return {
                ...state,
                cart: action.payload,
            };
        case 'SET_PERIOD':
            return {
                ...state,
                period: action.payload,
            };
        default:
        return state;
    }
}