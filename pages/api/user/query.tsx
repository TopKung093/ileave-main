import axios from "axios"
import dotenv from "dotenv"
dotenv.config()

const Query = async(req:any,res:any) => {
    // const user = JSON.parse(req?.cookies?.user)
    const url = `${process.env.BACK_END_API}/user`
    const result = await axios({
        method: 'get',
        url: encodeURI(url),
        headers: { 
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM0YWQyM2ZkOWU2OTVkZWQyMzU5MzQ4IiwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTY2NTkwNjI3NSwiZXhwIjoxNjY1OTEzNDc1fQ.yofR3R9Q00Mr8xC4_cQTApnP5H3jJGzYz0Da1C-4wfg`,
            'Content-Type': 'application/json'
        },
        data: req?.body
    }).catch((err) => {
        console.log("error :", err)
        res.status(500).json({
            success: false,
            data: {},
            message: err
        })
    })
    res.status(200).json({
        success: true,
        data: result?.data,
    })
}
 

export default Query
