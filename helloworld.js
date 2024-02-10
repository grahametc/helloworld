const alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',' ' ];
const key = [ 'h','e','l','l','o',' ' , 'w', 'o', 'r', 'l', 'd'];
let string = '';
for(let i = 0; i < key.length; i++){
  for(let j = 0; j < alphabet.length; j ++){
    console.log(string + alphabet[j]);
    if(alphabet[j] == key[i]){
      string = string + key[i];
      j = alphabet.length;
    }
    
  }
  
}

 
    