  const rec_binary_search = (arr,checked) => {
    
    this.apply = (start, end) => {
      const halve = Math.floor((start + end)/2) 
      
      if (checked == arr[halve]) return halve

      if (checked > arr[halve]) return apply(halve, end + 1)

      return apply(0, halve)
    }    

    return this.apply(0, arr.length)
  }

//examples
rec_binary_search([0,2,4,10,25], 10) 
rec_binary_search([0,2,4,10,13,28,6], 28) 
