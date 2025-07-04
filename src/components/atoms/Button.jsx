

const Button = ({children, type, className}) => {
    return (
        <button type={type} className={className}>{children}</button>
    )
}

export default Button