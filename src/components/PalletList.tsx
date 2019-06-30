
import React from 'react';

import './PalletList.css';

const itemList = [
    { id: 0, name: 'Empty' },
    { id: 1, name: 'item_1' },
    { id: 2, name: 'item_2' },
    { id: 3, name: 'item_3' },
];



enum Signals {
    empty,
    full,
    attention
}

const Pallet = (props: { id: number, title: string }) => {
    const { id, title } = props;

    const [key, setKey] = React.useState(id);
    const [signal, setSignal] = React.useState(0);
    const [signalTag, setSignalTag] = React.useState(Signals.empty);
    const [item_id, setItemId] = React.useState(0);


    React.useEffect(() => {
        let tag = getTag(signal)
        setSignalTag(tag);
        console.log(tag);
    }, [signal]);  // 依存関係としてsignalを渡す

    const getTag = (sig: number) => {
        switch (sig) {
            case 0:
                setItemId(0);
                return Signals.empty;
            case 1:
                return Signals.full;
            default:
                return Signals.attention;
        }
    }


    const getOp = () => {
        if (signal === Signals.empty) {
            setSignal(1);
        } else if (signal === Signals.full) {
            setSignal(2);
        } else {
            setSignal(0);
        }
        console.debug('Get');
    };

    return <div>
        <p className='pallet_id'>{key}</p>
        <div className='pallet_signal'>{signal}</div>
        <div className='item_select sl'>
            <select
                value={item_id}
                onChange={e => setItemId(Number(e.target.value))}
            >
                {itemList.map(item => (
                    <option key={item.id} value={item.id}>
                        {item.name}
                    </option>
                ))}

            </select>
        </div>
        <div><button onClick={() => getOp()}>Get</button></div>
    </div >
}

interface IfMsg {
    id: number,
    title: string
}
const PalletList = () => {

    const items: Array<IfMsg> = [{ id: 1, title: 'orange' }, { id: 2, title: 'berry' }, { id: 3, title: 'banana' }];

    const [pallets, setMsgs] = React.useState<Array<IfMsg>>(items);




    React.useEffect(() => {
        //document.title = `You clicked ${count} times`;
    });

    return (
        <div className="palletArray">
            {pallets.map((item) => {
                return <div key={item.id} className="pallet">
                    <Pallet id={item.id} title={item.title} /> </div>
            })}
        </div>
    );
};

export default PalletList;
