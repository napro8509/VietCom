export async function  createRequest(request,token) {
    try {
        let response = await fetch('http://auto.500ae.vn:8089/api/request-ticket/create',{
          method: 'POST',       
          headers:{
              'Content-Type':'application/json',
              Accept:'application/json',
              PlatformType:'ADR',
              Authorization:'Bearer '+token
          },
          body:JSON.stringify(request)
      });
        let responseJson = await response.json();
        console.log('Tao du an');
        console.log(responseJson);
        return responseJson;
      } catch(error) {
        console.error(error);
      }
}

export async function  showListRequest(token,typeRequest) {
  try {
      let response = await fetch(`http://auto.500ae.vn:8089/api/request-ticket/list?status=${typeRequest}&size=10&page=0&from=0&to=0`,{
        method: 'GET',       
        headers:{
            'Content-Type':'application/json',
            Accept:'application/json',
            PlatformType:'ADR',
            Authorization:'Bearer '+token
        },
    });
      console.log(responseJson);
      let responseJson = await response.json();
      console.log('List Request');
      console.log(responseJson);
      return responseJson;
    } catch(error) {
      console.error(error);
    }
}
