pragma solidity ^0.4.18;
contract LandDetails{
   struct StoreSigniture  {
        string DigitalSign;
        string DigitalSign1;
        string DigitalSign2;
    }
    mapping (string => StoreSigniture) LandRecords;

    function SetLandDetails(string _PID, string _Signmsg) public {
        LandRecords[_PID].DigitalSign = _Signmsg;
}
function SetLandDetails1(string _PID, string _Signmsg) public {
        LandRecords[_PID].DigitalSign1 = _Signmsg;
}
function SetLandDetails2(string _PID, string _Signmsg) public {
        LandRecords[_PID].DigitalSign2 = _Signmsg;
}
   function GetUserInfo(string _PID) public view returns (string) {
        return (LandRecords[_PID].DigitalSign);
        } 
        function GetUserInfo1(string _PID) public view returns (string) {
        return (LandRecords[_PID].DigitalSign1);
        } 
        function GetUserInfo2(string _PID) public view returns (string) {
        return (LandRecords[_PID].DigitalSign2);
        } 
}