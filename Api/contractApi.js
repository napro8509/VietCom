
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