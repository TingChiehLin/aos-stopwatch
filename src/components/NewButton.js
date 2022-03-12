const NewButton = ({className, text, onClick}) => {
    return (
        <button className={className}
                onClick={onClick}
        >
            {text}
        </button>
    )
}

export default NewButton;
