const prompt = require('prompt-sync')();

function main() {

    let customers = [
        {
            'firstName':"Jon",
            'lastName':"Smiith",
            'gender':"M",
            'creditLimit': 9999
        },
        {
            'firstName':"Mary",
            'lastName':"Smith",
            'gender':"F",
            'creditLimit': 9999
        }
        
    ]
    

    displayMenu();
    let choice = parseInt(prompt('Please Enter your Choice : '));

   while(choice!=6){

    switch(choice) {
        case 1:
        listAllCustomers();
          break;
        case 2:
        searchForCustomers();
          break;
        case 3:
        addCustomer(customers);
            break;
        case 4:
         updateCustomer(customers);    
            break;
        case 5:
        deleteCustomer();          
            break;
        default:   
        return choice;
    
      }
      displayMenu();
      let choice = parseInt(prompt('Please Enter your Choice : '));
    }
}

main();






function displayMenu(){
    console.log("Welcome to the ACME CRM!");
    console.log("1. List all Customeres ");
    console.log("2. Search For customers");
    console.log("3. Add a new customer ");
    console.log("4. Update existing Customer ");
    console.log("5. Delete a customer ");
    console.log("6. Quit ");
}

function listAllCustomers(){
 console.log("List all Cutomers ");
 let i = 0 ;
while(i<customers.length){
    console.log("-------------------------------");
    console.log("Customer name : ",customers[i].firstName,customers[i].lastName)
    console.log("Gender :",customers[i].gender)
    console.log9("Credit Limit : ",customers[i].creditLimit)
}
}
function searchForCustomers(){

}

function  addCustomer(customers){
 console.log();
 console.log("Add new customer ")
  let newCustomer = [
    {
        'firstName': prompt('Enter First Name : '),
        'lastName': prompt('Enter last name'),
        'gender': prompt('Enter Gender (M/F): '),
        'creditLimit': parseFloat(prompt('Enter the Limit of Credit :'))
    }
   ]
   customers.push(newCustomer);
}


function updateCustomer(customers)
{
    console.log("Update Customer")
    let customerIndex= parseInt(prompt("Enter the index of Customer to update : "))
    let newCustomer = [
        {
            'firstName': prompt('Enter First Name : ',customers[customerIndex].firstName),
            'lastName': prompt('Enter last name',customers[customerIndex].lastName),
            'gender': prompt('Enter Gender (M/F): ',customers[customerIndex].gender),
            'creditLimit': parseFloat(prompt('Enter the Limit of Credit :',customers[customerIndex].creditLimit))
        }
       ]
       customers[customerIndex]=newCustomer;
       console.log(`Customer ${customerIndex} has been Updated.`)

}

function deleteCustomer(){

}


