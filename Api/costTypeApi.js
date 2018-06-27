export async function showCostTypeList(token) {
    try {
      let response = await fetch('http://auto.500ae.vn:8089/api/cost-type/list?size=10&page=0',{
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