pragma solidity ^0.4.18;

contract Land_Details {
    
   string  property_ID;
   string Digital_Sign;
   
   function setLandDetails(string _PID, string _DS) public {
       property_ID = _PID;
       Digital_Sign = _DS;
   }
   
   function getLandDetails() public constant returns (string, string) {
       return (property_ID, Digital_Sign);
   }
    
}