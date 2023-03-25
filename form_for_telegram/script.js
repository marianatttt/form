
const BOT_TOKEN = '6033857072:AAEo6vZglOnDwyjw7ciJwrapzJGjeNbaY-I';
const CHAT_ID = '563391475';
const URI_API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

document.getElementById('tg').addEventListener('submit', function (e) {
    e.preventDefault();

    let message = `<b>Заявка із сайту</b>\n`;
    message += `<b>Відправник: </b>${this.name.value}\n`;
    message += `<b>Номер: </b>${this.phone.value}`;
    const success = document.getElementById('success');

    axios.post(URI_API,{
        chat_id: CHAT_ID,
        parse_mode:'html',
        text:message
    })
        .than((res)=>{
            this.name.value ="";
            this.phone.value="";
            success.innerHTML="Відправлено";
            success.style.display = "block";
        })
        .catch((err)=>{
            console.warn(err)
        })
        .finally(()=>{
            console.log('Rjytw')
        })
})
