import checkBTC from './check_btc'
import checkETH from './check_eth'

class CryptoAddressValidator {
  static validate(address, type) {
    let isValid = false;

    type = type.toLowerCase();
    switch (type) {
      case "eth":
        isValid = checkETH(address);
        break;
      case "btc":
        isValid = checkBTC(address);
        break;
      default:
        console.error("Invalid type");
        break;
    }

    return isValid;
  }
}

if (typeof window !== 'undefined') {
  window.CryptoAddressValidator = CryptoAddressValidator;
}

export default CryptoAddressValidator;