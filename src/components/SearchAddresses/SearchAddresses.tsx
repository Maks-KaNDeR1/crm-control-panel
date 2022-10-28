import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { ItemsAPI } from '../../api/api'
import s from './SearchAddresses.module.scss'
import search from '../../assets/images/search.svg'
import { ItemType } from '../../api/types'

type PropsType = {
    mobile: boolean
}

export const SearchAddresses: React.FC<PropsType> = ({ mobile }) => {

    const [value, setValue] = useState('')
    const [items, setItems] = useState<ItemType[]>()
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [error, setError] = useState('')

    const [errorReq, setErrorReq] = useState('')
    const [disabledAdd, setDisabledAdd] = useState(true)


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        setValue(value)
        if (value.length < 3) setDisabled(true)
        else {
            setError('')
            setDisabled(false)
        }
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            if (value.length < 3) setError('Минимум 3 символа')
            else {
                handleClick()
                setError('')
            }
        }

    }

    const handleClick = async () => {
        setLoading(true)
        const res = await ItemsAPI.getItems(value)
        try {
            setItems(res.data.suggestions)
            setDisabledAdd(false)
            if (res.data.suggestions.length <= 0) {
                setErrorReq('По данному запросу ничего не найдено')
            } else (
                setErrorReq('')
            )
        }
        catch (e) {
            alert(e)
        }
        finally {
            setLoading(false)
        }
    }


    return (
        <div className={s.adressBlock}>
            <h1> Поиск адресов</h1>
            <h3>Введите интересующий вас адрес</h3>
            <span className={s.error}>{error}</span>
            <div className={s.searchBlock} >
                <input
                    type="text"
                    value={value}
                    placeholder='Введите интересующий вас адрес'
                    onChange={handleChange}
                    onKeyPress={onKeyPressHandler}
                />
                {loading ? <button className={s.disabledBut} disabled >
                    <i
                        className="fa fa-refresh fa-spin"
                        style={{ margin: "0 40px 0 0", fontSize: "27px" }}
                    />
                </button>
                    :
                    <button
                        disabled={disabled}
                        className={disabled ? s.disabledBut : ''}
                        onClick={handleClick}
                    >
                        <span className={s.icon}>
                            <img src={search} alt="" />
                        </span>
                        Поиск
                    </button>
                }
            </div>
            {
                !disabledAdd ?
                    <div className={s.foundBlock}>
                        <h1>{errorReq !== '' ? errorReq : 'Адреса'}</h1>
                        <div className={s.foundItems}>
                            {/* <div  {mobile ? style={ overflow:  'auto', height: '560px' } : ''} > */}
                            {items?.map(v => <div className={s.found} key={v.value} >
                                {!v.data.city && !v.data.area && v.data.region + ' ' + v.data.region_type_full}
                                {v.data.city ? ' ' + v.data.city_type_full + ' ' + v.data.city : ''} {v.data.area ? v.data.area + ' ' + v.data.area_type_full : ''}
                                {v.data.street ? ' улица  ' + v.data.street : v.data.settlement}
                                {v.data?.house ? ' ' + v.data.house : ''}
                            </div>
                            )}
                        </div>
                    </div>
                    : ''
            }
        </div>
    );
}
