import {createTransport} from 'nodemailer'
export const sendMail= async(userMessage)=>{
    // create transport server
    const transpoter = createTransport({
        host: process.env.SMPT_HOST,
        port: process.env.SMPT_PORT,
        auth: {
          user: process.env.SMPT_USER,
          pass: process.env.SMPT_PASSWORD,
        }
    })
    await transpoter.sendMail({
        subject:"Contact from postfolio",
        to:process.env.MYMAIL,
        from:process.env.MYMAIL,
        text:userMessage
    })
}