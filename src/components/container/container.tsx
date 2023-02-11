const Container = (props) => {

    const {className, children} = props

    return (
        <div className={`${className} w-full p-10 h-[789px] `}>
       {children}
        </div>
    )
}

export default Container