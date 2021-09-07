pragma solidity 0.8.5;

import "./ERC721Tradable.sol";

contract SpacePepe is ERC721Tradable {
    string baseURI;
    uint256 public MAX_SUPPLY = 100;
    uint256 public basePrice = 500 ether;
    uint256 public incrementPrice = 5 ether;
    mapping(address => bool) public minted;

    constructor(string memory baseURI_)
        ERC721Tradable("SpacePepeFTM", "SPFTM", address(0))
    {
        baseURI = baseURI_;
    }


    function mint() external payable {
        uint256 newTokenId = _getNextTokenId();
        uint256 price = basePrice + (incrementPrice * currentTokenId);
        require(msg.value >= price, "Insufficient Purchase Amount");
        require(newTokenId < MAX_SUPPLY, "Sold out");
        require(minted[_msgSender()] == false, "Already bought");
        minted[_msgSender()] = true;
        _mint(_msgSender(), newTokenId);
        _incrementTokenId();
        if (msg.value > price)
            payable(_msgSender()).transfer(msg.value - price);
        payable(owner()).transfer(price);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        return
            string(abi.encodePacked(baseTokenURI(), Strings.toString(tokenId)));
    }

    function isApprovedForAll(address _owner, address operator)
        public
        view
        override
        returns (bool)
    {
        // Whitelist OpenSea proxy contract for easy trading.
        ProxyRegistry proxyRegistry = ProxyRegistry(proxyRegistryAddress);
        if (
            proxyRegistryAddress != address(0) &&
            address(proxyRegistry.proxies(_owner)) == operator
        ) {
            return true;
        }

        return super.isApprovedForAll(_owner, operator);
    }

    function setProxyRegistry(address _proxyRegistryAddress)
        external
        onlyOwner
    {
        proxyRegistryAddress = _proxyRegistryAddress;
    }

    function setBaseURI(string memory baseURI_) external onlyOwner {
        baseURI = baseURI_;
    }

    function baseTokenURI() public view override returns (string memory) {
        return _baseURI();
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    function _msgSender()
        internal
        view
        virtual
        override
        returns (address sender)
    {
        return ContextMixin.msgSender();
    }

}
