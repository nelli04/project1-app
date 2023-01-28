import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";

const DialogsContainer = () => {
    /*let stateOne = props.store.getState().messages;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }*/
    return (
        <StoreContext.Consumer>
            {(store) => {
                let stateOne = store.getState().messages;
                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }
                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }
                return (<Dialogs update={onNewMessageChange}
                                 send={onSendMessageClick}
                                 messages={stateOne}/>)
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;