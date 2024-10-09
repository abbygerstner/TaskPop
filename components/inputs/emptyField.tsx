interface emptyFieldProps{
    placeholder?: string;
}

export default function EmptyField({placeholder}: emptyFieldProps){
    return(
        <input type="text" className="form-input px-4 py-3 rounded-full text-gray-600 bg-navy" placeholder = {placeholder}/>
    )
}