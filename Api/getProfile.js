const getProfile=(token)=>(
    fetch('http://auto.500ae.vn:8089/api/profile/me',
    {
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            Accept:'application/json',
            PlatformType:'ADR',
        },
        body: JSON.stringify({token})
        })
.then(res=>res.json()).catch(err=>console.log(err))
);
module.exports = getProfile;