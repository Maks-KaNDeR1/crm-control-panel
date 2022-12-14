import React from 'react'
import s from './Header.module.scss';
import wrench from '../../assets/images/wrench.svg'
import profile from '../../assets/images/profile.svg'

type PropsType = {
    name: string
    lastName: string
}

export const Header: React.FC<PropsType> = ({ name, lastName }) => {

    return <header className={s.header}>
        <div className={s.headleft}>
            <span className={s.header__icon}>
                <img src={wrench} alt="" />
            </span>
            <span className={s.header__logo}> Wrench CRM </span>
        </div>
        <div className={s.headright}>
            <span className={s.header__icon}>

                <a target="_blank" rel="noreferrer" href="https://t.me/Maks_KaNDeR">
                    <img src={profile} alt="" />
                </a>
            </span>
            <span className={s.header__name} >
                {name} {lastName}
            </span>
        </div>
    </header>

}
