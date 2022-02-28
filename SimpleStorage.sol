pragma solidity ^0.6.0;

contract SimpleStorage {
    uint256 public favoriteNumber;

    struct People {
        uint256 favoriteNumber;
        string name;
    }

    People[] public people;
    mapping(string => uint256) public persons;

    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }

    function getVal() public view returns (uint256) {
        return favoriteNumber;
    }

    function addPerson(uint256 _number, string memory _name) public {
        people.push(People(_number, _name));
        persons[_name] = _number;
    }
}
