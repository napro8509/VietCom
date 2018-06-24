
export async function showList(token) {
    try {
      let response = await fetch('http://auto.500ae.vn:8089/api/project/list?size=10&page=0&from=0&to=0',{
        method: 'GET',       
        headers:{
            Accept:'application/json',
            PlatformType:'ADR',
            Authorization:'Bearer '+token
        },
    });
      let responseJson = await response.json();
      return responseJson;
    } catch(error) {
      console.error(error);
    }
  }

  
export async function showListContract(token) {
  try {
    let response = await fetch('http://auto.500ae.vn:8089/api/contract/list?size=10&page=0&from=0&to=0',{
      method: 'GET',       
      headers:{
          Accept:'application/json',
          PlatformType:'ADR',
          Authorization:'Bearer '+token
      },
  });
    let responseJson = await response.json();
    return responseJson;
  } catch(error) {
    console.error(error);
  }
}

export async function createContract(contract,token) {
  try {
    let response = await fetch('http://auto.500ae.vn:8089/api/contract/create',{
      method: 'POST',       
      headers:{
          'Content-Type':'application/json',
          Accept:'application/json',
          PlatformType:'ADR',
          Authorization:'Bearer '+token
      },
      body:JSON.stringify(contract)
  });
    let responseJson = await response.json();
    console.log('Tao du an');
    console.log(responseJson);
    return responseJson;
  } catch(error) {
    console.error(error);
  }
}

export async function editContract(contract,token){
  try {
    let response = await fetch('http://auto.500ae.vn:8089/api/contract/edit',{
      method: 'POST',       
      headers:{
          'Content-Type':'application/json',
          Accept:'application/json',
          PlatformType:'ADR',
          Authorization:'Bearer '+token
      },
      body:JSON.stringify(contract)
  });
    let responseJson = await response.json();
    console.log('Edit Contract');
    console.log(responseJson);
    return responseJson;
  } catch(error) {
    console.error(error);
  }
}

export async function getContract(contractId,token){
  try {
    let response = await fetch(`http://auto.500ae.vn:8089/api/contract/get/${contractId}`,{
      method: 'GET',       
      headers:{
          'Content-Type':'application/json',
          Accept:'application/json',
          PlatformType:'ADR',
          Authorization:'Bearer '+token
      },
  });
    let responseJson = await response.json();
    console.log('Edit Contract');
    console.log(responseJson);
    return responseJson;
  } catch(error) {
    console.error(error);
  }
}

export async function deleteContract(contractId,token){ //Test Ok
  try {
    let response = await fetch(`http://auto.500ae.vn:8089/api/contract/delete/${contractId}`,{
      method: 'GET',       
      headers:{
          'Content-Type':'application/json',
          Accept:'application/json',
          PlatformType:'ADR',
          Authorization:'Bearer '+token
      },
  });
    let responseJson = await response.json();
    console.log('Delete Contract');
    console.log(responseJson);
    return responseJson;
  } catch(error) {
    console.error(error);
  }
}

export async function editPaymentTerm(paymentTerm,token){
  try {
    let response = await fetch('http://auto.500ae.vn:8089/api/contract/edit',{
      method: 'POST',       
      headers:{
          'Content-Type':'application/json',
          Accept:'application/json',
          PlatformType:'ADR',
          Authorization:'Bearer '+token
      },
      body:JSON.stringify(paymentTerm)
  });
    let responseJson = await response.json();
    console.log('Edit Payment Term');
    console.log(responseJson);
    return responseJson;
  } catch(error) {
    console.error(error);
  }
}

export async function addPaymentTerm(contractId,paymentTerm,token){ //PaymentTerm is a object
  try {
    let response = await fetch(`http://auto.500ae.vn:8089/api/contract/add-payment-term/${contractId}`,{
      method: 'POST',       
      headers:{
          'Content-Type':'application/json',
          Accept:'application/json',
          PlatformType:'ADR',
          Authorization:'Bearer '+token
      },
      body:JSON.stringify(paymentTerm),
  });
    let responseJson = await response.json();
    console.log('Add Payment Term');
    console.log(responseJson);
    return responseJson;
  } catch(error) {
    console.error(error);
  }
}

export async function deletePaymentTerm(paymentTermId,token){ //Test Ok
  try {
    let response = await fetch(`http://auto.500ae.vn:8089/api/contract/delete-payment-term/${paymentTermId}`,{
      method: 'GET',       
      headers:{
          'Content-Type':'application/json',
          Accept:'application/json',
          PlatformType:'ADR',
          Authorization:'Bearer '+token
      },
  });
    let responseJson = await response.json();
    console.log('Delete Payment Term');
    console.log(responseJson);
    return responseJson;
  } catch(error) {
    console.error(error);
  }
}


export async function editCostIncurred(costIncurred,token){  ///costIncurred is an object
  try {
    let response = await fetch('http://auto.500ae.vn:8089/api/contract/edit-cost-incurred',{
      method: 'POST',       
      headers:{
          'Content-Type':'application/json',
          Accept:'application/json',
          PlatformType:'ADR',
          Authorization:'Bearer '+token
      },
      body:JSON.stringify(costIncurred)
  });
    let responseJson = await response.json();
    console.log('Edit Payment Term');
    console.log(responseJson);
    return responseJson;
  } catch(error) {
    console.error(error);
  }
}


export async function addCostIncurred(contractId,costIncurred,token){ //Test Ok
  try {
    let response = await fetch(`http://auto.500ae.vn:8089/api/contract/add-cost-incurred/${contractId}`,{
      method: 'POST',       
      headers:{
          'Content-Type':'application/json',
          Accept:'application/json',
          PlatformType:'ADR',
          Authorization:'Bearer '+token
      },
      body:JSON.stringify(costIncurred)
  });
    let responseJson = await response.json();
    console.log('Add Cost Incurred');
    console.log(responseJson);
    return responseJson;
  } catch(error) {
    console.error(error);
  }
}


export async function deleteCostIncurred(costIncurredId,token){ //Test Ok
  try {
    let response = await fetch(`http://auto.500ae.vn:8089/api/contract/delete-cost-incurred/${costIncurredId}`,{
      method: 'GET',       
      headers:{
          'Content-Type':'application/json',
          Accept:'application/json',
          PlatformType:'ADR',
          Authorization:'Bearer '+token
      },
  });
    let responseJson = await response.json();
    console.log('Delete Cost Incurred');
    console.log(responseJson);
    return responseJson;
  } catch(error) {
    console.error(error);
  }
}