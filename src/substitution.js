// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    const encryptionKeys = {};

    if(!alphabet || alphabet.length < 26 || alphabet.length > 26) return false;
 
    let charCodeCount = 97;

    for(let c = 0; c <= 25; c++){ 
      if(Object.values(encryptionKeys).includes(alphabet[c])){ return false; } 
      else{
        encryptionKeys[String.fromCharCode(charCodeCount)] = alphabet[c]; 
        charCodeCount++;
      }
    }

    const buildEncryption = input.toLowerCase().split('');

    { 
		  return buildEncryption.map(letter => {  
		  	for(let plainLetter in encryptionKeys){  
		  		let substitutionLetter = encryptionKeys[plainLetter]; 
          if(letter == " ") return " "; 
		  		if(encode && letter == plainLetter) return substitutionLetter; 
          if(!encode && letter == substitutionLetter) return plainLetter; 
      }
		}).join('');
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
