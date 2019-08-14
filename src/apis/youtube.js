import axios from 'axios'

const KEY='AIzaSyAniOH1CcQcz0ICv6YZRflLwQ1jD6lvPV4'


export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3' ,
    params : {
        part:'snippet',
        maxResult:5,
        key:KEY
    }

})
