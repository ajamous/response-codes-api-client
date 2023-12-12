const axios = require('axios');

const apiClient = axios.create({
  baseURL: 'https://response-codes-api.telecomsxchange.com'
});

async function getAllSMPPErrorCodes() {
  try {
    const response = await apiClient.get('/smpp-error-codes');
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function getSMPPErrorCodeDescription(errorCode) {
  try {
    const response = await apiClient.get(`/smpp-error-code/${errorCode}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function getAllHTTPResponseCodes() {
  try {
    const response = await apiClient.get('/http-response-codes');
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function getHTTPResponseCodeDescription(code) {
  try {
    const response = await apiClient.get(`/http-response-code/${code}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function getAllSIPResponseCodes() {
  try {
    const response = await apiClient.get('/sip-response-codes');
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function getSIPResponseCodeDescription(code) {
  try {
    const response = await apiClient.get(`/sip-response-code/${code}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllSMPPErrorCodes,
  getSMPPErrorCodeDescription,
  getAllHTTPResponseCodes,
  getHTTPResponseCodeDescription,
  getAllSIPResponseCodes,
  getSIPResponseCodeDescription
};

