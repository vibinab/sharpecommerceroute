

import React from "react";

const CartContext= React.createContext({
    items:[],
    additem:(item)=> {}
}) 
export default CartContext