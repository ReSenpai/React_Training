/**
 * 
 * @param {*} items 
 * @param {*} itemId 
 * @param {*} objPropName 
 * @param {*} newObjProps 
 */
export const changeObjToArr = (items, itemId, objPropName, newObjProps) => {
    return items.map(item => {
        if(item[objPropName] === itemId) {
            return {
                ...item, 
                ...newObjProps
            }
        }
        return item;
    })
}
