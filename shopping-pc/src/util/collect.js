import axios  from 'axios'

function collect({actionId, logId}){
    console.log('采集用户数据', actionId, logId)
    let date = new Date()
    let actionDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    let actionHour = date.getHours() 

    let param = {
        actionId,
        logId,
        actionDate,
        actionHour
    }

    console.log('采集用户数据入参', param)
    axios.post("http://127.0.0.1:7001/api/actiondetail", param).then(res => {
        console.log('采集用户数据回调', res)
    })

}


export default collect