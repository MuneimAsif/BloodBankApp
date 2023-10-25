import axios from "axios";
export const apiHandle = axios.create(
    {
        baseURL: "https://jsonplaceholder.typicode.com"
    }
    )

export const Get = (endPoint: string, id?: (string | number))=>
{
    return apiHandle.get(`${endPoint}/${id ? id : ''}`)
}

export const Delete = (epOfDel: any,id?:(string|number))=>
{
    return apiHandle.delete(`${epOfDel}/${id?id:''}`)
}

export const Post = (epOfPost: string ,model:{})=>
{
    return apiHandle.post(epOfPost,model)
}

export const Edit = (epOfEdit:any ,model:{},id?:(string|number))=>
{
    return apiHandle.put(`${epOfEdit}/${id?id:''}`,model?model:{})
}



// How to use "GET" ====
// Get("comments")
//     .then((res) => {
//         setData([...res.data])

//     })
//     .catch((error) => {
//         console.log(error);

//     })

// How to use "DELETE"
// const delData = () => {
// DEL(`comments/${id}`).then((res)=>
// console.log(res);
// ).catch((err)=>{
    // console.log(err)
// })
// }

// How to use "PUT"
// First getting data by Id
//   const getDataById = () => {
//   axios.get(`https://jsonplaceholder.typicode.com/comments/${params.id}`).then((res) => {
//     console.log(res.data);
//     setModel({ ...res.data })
//   }).catch((err) => {
//     console.log(err.data);

//   })
// }
// then edit 
// const updatePost = () => {
//     Put(`comments/${params.id}`)
//       .then((res) => {
//         console.log(`Post Updated === > ${res.data}`);

//       }).catch((err) => {
//         console.log(err.data);
//       }) 
//   }
// 

// How to use "POST"

// const updatePost = () => {
//     Put(`comments/${params.id}`)
//       .then((res) => {
//         console.log(`Post Updated === > ${res.data}`);

//       }).catch((err) => {
//         console.log(err.data);
//       }) 
//   }
