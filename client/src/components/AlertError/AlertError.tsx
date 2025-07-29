
interface Props {
    children: React.ReactNode;
}

const AlertError = ({ children }: Props) => {
    return (
        <div className="alert alert-danger" role="alert">
            {children}
        </div>
    )
}

export default AlertError