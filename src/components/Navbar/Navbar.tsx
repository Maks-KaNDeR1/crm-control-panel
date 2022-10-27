import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import s from './Navbar.module.scss'
import home from '../../assets/images/home.svg'
import adresses from '../../assets/images/adresses.svg'
import tables from '../../assets/images/tables.svg'
import calendar from '../../assets/images/calendar.svg'
import cards from '../../assets/images/cards.svg'
import setting from '../../assets/images/setting.svg'
import exit from '../../assets/images/exit.svg'
import angleUp from '../../assets/images/angleUp.svg'
import settingProfile from '../../assets/images/setting-profile.svg'
import managmentFin from '../../assets/images/managment-fin.svg'

function Navbar() {

    const [settingShow, setSettingShow] = useState(true)
    const [active, setActive] = useState('h')

    const path = useLocation().pathname

    useEffect(() => {
        if (path == '/address') setActive('a')
    }, [])

    return (
        <div className={s.nav}>
            <div className={s.nav__menu}>Меню</div>
            <div className={s.items} >
                <div className={s.item} >
                    <span style={{ marginLeft: '-42px', marginTop: '-48px' }} className={s.icon}>
                        <img src={home} alt="" />
                    </span>
                    <NavLink to='/'
                        onClick={() => setActive('h')}
                        className={active === 'h' ? s.active : ''}
                    >
                        Главная
                    </NavLink>
                </div>
                <div className={s.item}>
                    <span className={s.icon}>
                        <img src={adresses} alt="" />
                    </span>
                    <NavLink to='/address'
                        onClick={() => setActive('a')}
                        className={({ isActive }) => { return isActive ? s.active : s.a }}
                    >
                        Поиск адресов
                    </NavLink>
                </div>
                <div className={s.item}>
                    <span className={s.icon}>
                        <img src={tables} alt="" />
                    </span>
                    <NavLink to=''
                        onClick={() => setActive('h')}
                    >
                        Таблицы
                    </NavLink>
                </div>
                <div className={s.item}>
                    <span style={{ marginLeft: '-2px' }} className={s.icon}>
                        <img src={calendar} alt="" />
                    </span>
                    <NavLink to=''
                        onClick={() => setActive('h')}
                    >
                        Календарь
                    </NavLink>
                </div>
                <div className={s.item}>
                    <span className={s.icon}>
                        <img src={cards} alt="" />
                    </span>
                    <NavLink to=''
                        onClick={() => setActive('h')}
                    >
                        Карты
                    </NavLink>
                </div>
                <div
                    className={s.item}
                    onClick={() => setSettingShow(state => !state)}
                >
                    <span className={s.icon}>
                        <img src={setting} alt="" />
                    </span>
                    <a> Настройки </a>
                    <span style={{ transform: !settingShow ? 'rotate(-180deg)' : '' }} className={s.angle}>
                        <img src={angleUp} alt="" />
                    </span>
                </div>
                {
                    settingShow &&
                    <div className={s.itemsSetting}>
                        <div className={s.item}>
                            <span className={s.icon}>
                                <img src={settingProfile} alt="" />
                            </span>
                            <NavLink to=''
                                onClick={() => setActive('h')}
                            >
                                Настройки профиля
                            </NavLink>
                        </div>
                        <div className={s.item}>
                            <span className={s.icon}>
                                <img src={managmentFin} alt="" />
                            </span>
                            <NavLink to=''
                                onClick={() => setActive('h')}
                            >
                                Управление финансами
                            </NavLink>
                        </div>
                    </div>
                }
                <div className={s.item}>
                    <span className={s.icon}>
                        <img src={exit} alt="" />
                    </span>
                    <NavLink to=''
                        onClick={() => setActive('h')}
                    >
                        Выход
                    </NavLink>
                </div>
            </div>
        </div>
    )
}



export default Navbar
