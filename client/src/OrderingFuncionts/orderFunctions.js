
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

export const orderMin = (array) => {
    let min = array.sort((a, b) => {
      // Extraer el primer valor numérico de la cadena "weight"
      const weightA = Number(a.weight.split(" ")[0]);
      const weightB = Number(b.weight.split(" ")[0]);
  
      return weightA - weightB;
    });
  
    return min;
  };
  
  export const orderMax = (array) => {
    let max = array.sort((a, b) => {
      // Extraer el primer valor numérico de la cadena "weight"
      const weightA = Number(a.weight.split(" ")[0]);
      const weightB = Number(b.weight.split(" ")[0]);
  
      return weightB - weightA ;
    });
  
    return max;
  };