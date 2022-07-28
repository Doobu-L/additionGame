pragma solidity ^0.4.24;

contract AdditionGame {
    address public owner;

    constructor() public{
        owner = msg.sender;
    }

    //단위 peb , 클레이튼 가상머신에서는 최소단위인 peb로 변환해서 처리하기 때문.
    function getBalance() public view returns(uint){
        return address(this).balance;
    }

    //계정에서 솔리디티함수로 클레이튼을 보낼때 payable 필수.
    function deposit() public payable{
        //송신자 유효성 체크.
        require(msg.sender == owner);
    }

    //정답을 맞춘 사용자에게 상금을 전송하는 로직
    function transfer(uint _value) public returns(bool){
        //잔액확인
        require(getBalance() >= _value);
        //전송!!!!
        msg.sender.transfer(_value);
        return true;
    }
}
