const Container = (props) => {

    const {className, children} = props

    return (
        <div className={`${className} w-full  h-[789px] lg:pl-[320px] `}>
       {children}
        </div>
    )
}

export default Container