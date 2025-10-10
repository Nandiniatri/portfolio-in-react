export const Button = ({ children, type, onClick, className }) => (
    <button className={className} type={type} onClick={onClick}>{children}</button>
)

