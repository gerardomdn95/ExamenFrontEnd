function hasUniqueCharacters(cadena) {
    var i;
    var flag = true;
    for(i = 0; i < cadena.length; i++) {
        for(j = i+1; j < cadena.length; j++) {
            if(cadena[j] == cadena[i]) {
                flag = false;
            }
        }
    }
    return flag;
}

hasUniqueCharacters("String"); //True

//hasUniqueCharacters("Some String") //False