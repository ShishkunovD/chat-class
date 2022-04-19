import { SetStateAction, useEffect, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import getUserName from '../Redux/toolkitSlice';
import '../style/OneMessage.scss';

type TOneMessgae = {
    mess: {
      username: string,
      id: number,
      event: string,
      message: string
    }
    username: string;
    toggle: () => void;
    messages: any; // Тех долг. Изменить тип!!!
}

const OneMessage = ({ mess, username, toggle, messages }: TOneMessgae) => {

  // const dispatch = useDispatch<any>();

  // вот здесь попробовать uselayouteffect чтобы функционал не работал дальше, пока мелодия не закончит играть!!!

  useLayoutEffect(() => {
    if(username !== messages[messages.length - 1].username) {
      // console.log(messages[messages.length - 1].username);
      // console.log(username)
      toggle();
    } else {
      return
    }
  }, [messages])

  return(
    <div key={mess.id}>
      {mess.event === 'connection' ?
        <div className="user-connect"><span>Пользователь {mess.username} подключился</span></div> :
        <div className={username === mess.username ? "my-message": "another-message"}><span>{mess.username}</span>: <div>{mess.message}</div></div>}
    </div>
  )
}

export default OneMessage;