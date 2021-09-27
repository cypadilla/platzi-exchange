const url = "https://api.coincap.io/v2";
const urlAssets = "https://api.coincap.io/v2/assets?limit=20"

// function getAssets() {
//   return fetch(`${url}/assets?limit=20`,{
//       mode:"cors",
//       method:"GET",
//       headers:{
//           "accept":"application/json"
//       }
//   })
//     .then((res) => res.json())
//     .then((res) => res.data);
// }

function getAssets(){ 
    return fetch(`${urlAssets}`,{
        mode:"cors",
        method:"GET",
    })
    .then((res) => res.json())
    .then((res) => {
        return res.data
    })
    .catch((rej) => console.log(rej));
}
async function getAsset(coin){
    return await fetch(`${url}/assets/${coin}`,{
        mode:"cors",
        method:"GET",
        headers:{
            "accept":"application/json"
        }
    })
      .then((res) => res.json())
      .then((res) => res.data)
      .catch((rej) => console.log(rej));
}

function getAssetHistory (coin){
    const now = new Date()
    const end = now.getTime()
    now.setDate(now.getDate()-1)
    const start = now.getTime()

    return fetch (`${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`,{
        mode:"cors",
        method:"GET",
        headers:{
            "accept":"application/json"
        }
    })
      .then((res) => res.json())
      .then((res) => res.data);
}

function getMarkets(coin) {
    try{
        return fetch(`${url}/assets/${coin}/markets?limit=5`)
        .then(res => res.json())
        .then(res => res.data)
    }catch (error){
        console.error("Error en el requiest", error)
    }
}

function getExchange(id){
    try {
        return fetch(`${url}/exchanges/${id}`)
        .then(res => res.json())
        .then(res => res.data)
    }catch (error){
        console.error("Error en el requiest", error)
    }
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange
};
