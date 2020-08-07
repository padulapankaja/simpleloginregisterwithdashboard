pragma solidity ^0.5.12;
pragma experimental ABIEncoderV2;

contract Doc {

    struct Document {
        string docHash;
        string orgID;
        string docID;   
    }

    mapping (string => Document) public storedDocs;

    function set(string memory contentHash, string memory _docHash, string memory _orgID, string memory _docID) public returns(bool) {
        storedDocs[contentHash].docHash = _docHash;
        storedDocs[contentHash].orgID = _orgID;
        storedDocs[contentHash].docID = _docID;
        return true;
    }

    function get(string memory contentHash) public view returns(Document memory) {
        return storedDocs[contentHash];
    }
}