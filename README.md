# Response Codes API Client

This is a client library for interacting with the Response Codes API, providing easy access to SMPP, HTTP, and SIP error codes and their descriptions.

## Installation

Install the package using npm:

```bash
npm install response-codes-api-client
```


## Usage

Here's how you can use the library:

```javascript
const responseCodesClient = require('response-codes-api-client');

async function getCodes() {
  try {
    // Fetch all SMPP error codes
    const smppCodes = await responseCodesClient.getAllSMPPErrorCodes();
    console.log(smppCodes);

    // Fetch a specific HTTP error code description
    const httpCodeDesc = await responseCodesClient.getHTTPResponseCodeDescription(404);
    console.log(httpCodeDesc);

    // Similarly, use other available functions
    // ...
  } catch (error) {
    console.error(error);
  }
}

getCodes();

```

## API

`getAllSMPPErrorCodes()`
Fetches all SMPP error codes.

`getSMPPErrorCodeDescription(errorCode)`
Fetches the description for a specific SMPP error code.

`errorCode` (int): The specific SMPP error code.

`getAllHTTPResponseCodes()`
Fetches all HTTP response codes.

`getHTTPResponseCodeDescription(code)`
Fetches the description for a specific HTTP response code.

code (int): The specific HTTP response code.

`getAllSIPResponseCodes()`
Fetches all SIP response codes.

`getSIPResponseCodeDescription(code)`
Fetches the description for a specific SIP response code.

code (int): The specific SIP response code.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check issues page https://github.com/ajamous/response-codes-api-client/issues

