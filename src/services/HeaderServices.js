

export const getLogo = async () => {
    try{
            const res = await fetch('https://beta.ashinyc.com/rest/V1/getLogo',{headers:{Authorization: 'Bearer gifbwywtvyy4fybs31xgo8nzhrdovuob'}});
            if(!res.ok){
                throw new Error(
                    `This is an HTTP error: The status is ${res.status}`
                )
            }
            const response = await res.json();
            return response
    }catch(err){
        console.log(err)
    }finally{
        console.log('finish')
    }
}
