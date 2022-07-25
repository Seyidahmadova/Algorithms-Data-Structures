var isAnagram = function (s, t) {
    const tarr = [...t];  
    const sarr = [...s];

    if(sarr.sort().join()===tarr.sort().join()){
      return true;
    }
    else{
      return false;
    }

  }

