export const Keyboard = (props:any) => {

    const onClick=(e:any)=>{
        props.click(e.currentTarget.textContent)
    }

    const buttons=props.arr.map((a:any)=>

            <button onClick={onClick} className={'button'} key={a} id={a}>{a}</button>)

    return <div className={'keyboard'} >
        {buttons}
    </div>


}