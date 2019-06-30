
import React from 'react';

import './MessageList.css';


const Msg = (props: { id: number, msg: string, removeMsg: any }) => {
    const { id, msg, removeMsg } = props;

    const [key, setKey] = React.useState(id);
    const [name, setName] = React.useState(msg);

    return <div>
        <p className='msg_id'>{key}</p>
        <p className='msg_text'> somedey ..</p>
        <div className='msg_button'><button onClick={() => { removeMsg(); }}>確認</button></div>
    </div >
}

interface IfMsg {
    id: number,
    msg: string
}
const MessageList = () => {

    const items: Array<IfMsg> = [{ id: 1, msg: 'orange' }, { id: 2, msg: 'berry' }, { id: 3, msg: 'banana' }];

    const [msgs, setMsgs] = React.useState<Array<IfMsg>>(items);

    const addMsg = () => {
        console.debug('addMsg');
        const msg = { id: 22, msg: 'apple' };
        setMsgs([...msgs, msg]);
    }


    const removeMsg = (msg_id: number) => {

        const newMsgs = msgs.filter((msg, index) => {
            console.debug(msg.id);
            return msg_id !== msg.id;
        });
        setMsgs(newMsgs);
    };

    const [cnt, setCount] = React.useState(0);
    React.useEffect(() => {
        //document.title = `You clicked ${count} times`;
    });

    return (
        <div className="msgArray">
            <div className='msg_button'><button onClick={() => { addMsg(); }}>メッセージ確認</button></div>
            {msgs.map((item) => {
                return <div key={item.id} className="msg">
                    <Msg id={item.id} msg={item.msg} removeMsg={() => removeMsg(item.id)} /> </div>
            })}
        </div>
    );
};

export default MessageList;
