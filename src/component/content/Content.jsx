import React from "react";
import {connect} from "react-redux";
import {changeGender} from "../../redux/actions/gender-action";
import {
    changeDaughters,
    changeDaughtersOfSonsRef,
    changeSons,
    changeSonsOfSons
} from "../../redux/actions/children-action";
import {changeHusband, changeWives} from "../../redux/actions/spouse-action";
import {changeFather, changeMother} from "../../redux/actions/ancestors-action";
import {changeSiblingsCount} from "../../redux/actions/siblings-action";

const Content = (props) => {
    let isHeMarried = props.isMarried ? {display: 'flex'} : {display: 'none'};
    let isSheMarried = !props.isMarried ? {display: 'flex'} : {display: 'none'};
    let sonsRef = React.createRef();
    let daughtersRef = React.createRef();
    let wivesRef = React.createRef();

    let sonsOfSonsRef = React.createRef();
    let daughtersOfSonsRef = React.createRef();
    let siblingsRef = React.createRef();
    return (
        <div>
           <div>
               <p><b>Женесе</b></p>
               <button onClick={() => {
                   props.onGender(true);
                   wivesRef.current.value = 0;
               }}>Ир кеше</button>
               <button onClick={() => {props.onGender(false)}}>Хатын-кыз</button>
           </div>

            <div style={isHeMarried} >
                <div>Ире</div>
                <button onClick={() => {props.onHusband(true)}}>Бар</button>
                <button onClick={() => {props.onHusband(false)}}>Юк</button>
            </div>

            <div style={isSheMarried}>
                <div>Хатыннары</div>
                <input type="number"
                       min={0}
                       max={4}
                       ref={wivesRef}
                       onChange={() => {
                           props.onWivesCount(wivesRef.current.value)
                       }}/>
            </div>

            <div>
                <div>Уллары</div>
                <input type="number"
                       min={0}
                       ref={sonsRef}
                       onChange={() => {
                           props.onSonsCount(sonsRef.current.value)
                       }}/>
            </div>

            <div>
                <div>Кызлары</div>
                <input type="number"
                       min={0}
                       ref={daughtersRef}
                       onChange={() => {
                           props.onDaughtersCount(daughtersRef.current.value)
                       }}/>
            </div>

            <div>
                <div>Улынын уллары</div>
                <input type="number"
                       min={0}
                       ref={sonsOfSonsRef}
                       onChange={() => {
                           props.onSonsOfSonsCount(sonsOfSonsRef.current.value)
                       }}/>
            </div>

            <div>
                <div>Улынын кызлары</div>
                <input type="number"
                       min={0}
                       ref={daughtersOfSonsRef}
                       onChange={() => {
                           props.onDaughtersOfSonsCount(daughtersOfSonsRef.current.value)
                       }}/>
            </div>

            <div>
                <div>Бертуганнары</div>
                <input type="number"
                       min={0}
                       ref={siblingsRef}
                       onChange={() => {
                           props.onSiblingsCount(siblingsRef.current.value)
                       }}/>
            </div>


            <div>
                <div>Этисе</div>
                <button onClick={() => {props.onFather(true)}}>Бар</button>
                <button onClick={() => {props.onFather(false)}}>Юк</button>
            </div>

            <div>
                <div>Энисе</div>
                <button onClick={() => {props.onMother(true)}}>Бар</button>
                <button onClick={() => {props.onMother(false)}}>Юк</button>
            </div>
        </div>
    )
}

export default connect(
    state => {
        return {
            isMarried: state.heirsReducer.isGenderFemale,
        }
    },
    dispatch => ({
        onGender: (isMale) => {
            dispatch(changeGender(isMale))
        },
        onSonsCount: (count) => {
            dispatch(changeSons(count))
        },
        onDaughtersCount: (count) => {
            dispatch(changeDaughters(count))
        },
        onWivesCount: (count) => {
            dispatch(changeWives(count))
        },
        onHusband: (isHave) => {
            dispatch(changeHusband(isHave))
        },
        onFather: (isAlive) => {
            dispatch(changeFather(isAlive))
        },
        onMother: (isAlive) => {
            dispatch(changeMother(isAlive))
        },
        onSonsOfSonsCount: (count) => {
            dispatch(changeSonsOfSons(count))
        },
        onDaughtersOfSonsRef: (count) => {
            dispatch(changeDaughtersOfSonsRef(count))
        },
        onSiblingsCount: (count) => {
            dispatch(changeSiblingsCount(count))
        }
    })
)(Content);

