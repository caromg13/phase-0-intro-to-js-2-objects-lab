 
  const employee = {
    name: {
      firstName: 'Jane',
      lastName: 'Smith'
    },
    streetAddress: {
      line1: '50 High St',
      line2: 'Melbourne'
    },
  };
  
        //1. This function should take in three arguments: a employee Object, a key and a value


        function createNewAddress (oldAddress, addressChanges) {
            return Object.assign({}, oldAddress, addressChanges);
          }

  const newAddress = {
    name: {
      firstName: 'Jane',
      lastName: 'Smith'
    },
    streetAddress: {
      line1: '36 Middle Rd',
      line2: 'Hawthorn'
    },
  };
  
  const addressChange = createNewAddress(employee, newAddress);
      
      


      //2. This function should should mutate the employee Object passed in.

      function nondestructivelyUpdateObject(obj, key, value) {
        return Object.assign({}, obj, { [key]: value });
      }


      //3. This function should take in a employee Object and a key. It should delete the property with that key from the employee Object. 


      function deleteFromEmployeeByKey(obj, key, value) {
        return Object.assign({}, obj, { [key]: value });
      }


      //4. This function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object.

      function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
        return Object.assign({}, obj, { [key]: value });
      }



















