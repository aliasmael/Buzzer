import * as io from 'socket.io-client'

const url = 'http://999b76f3.ngrok.io'
const socket = io(url)

export default socket