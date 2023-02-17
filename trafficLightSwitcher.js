function updateLight(current) {
    let lighter = ["green","yellow","red"];
    return (current == lighter[0]) ? lighter[1] 
    : (current == lighter[1]) ? lighter[2] 
    :  (current == lighter[2])? lighter[0]
    : "there is no such light in a traffic light";
   
  }
  console.log(updateLight('red'))