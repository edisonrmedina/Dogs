
export const descendOrder = (array) => {
    function SortArrayAZ(x, y){
        if (x.name.toUpperCase() < y.name.toUpperCase()) {return -1;}
        if (x.name.toUpperCase() > y.name.toUpperCase()) {return 1;}
        return 0;
    }
    var descendOrder = array.sort(SortArrayAZ);
    return descendOrder;
} 

export const ascendOrder = (array) => {
    function SortArrayZA(x, y){
        if (x.name.toUpperCase() < y.name.toUpperCase()) {return 1;}
        if (x.name.toUpperCase() > y.name.toUpperCase()) {return -1;}
        return 0;
    }
    var ascendeOrder = array.sort(SortArrayZA);
    return ascendeOrder;
}
